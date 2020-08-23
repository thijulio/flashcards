/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getModelToken } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import * as mongoose from 'mongoose';
import validator from 'validator';
import { User, UserModel } from '../interfaces/user.interface';

export const userSchema = {
    givenName: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    surname: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        enum: ['M', 'F'],
        default: 'M',
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value: string): boolean {
            if (value.toLowerCase().includes('password')) {
                throw new Error(`Password cannot contain 'password'`);
            }

            return true;
        },
    },
    email: {
        type: String,
        minlength: 15,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value: string): boolean {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            if (!validator.isEmail(value)) {
                throw new Error('Please provide a valid email');
            }
            return true;
        },
    },
    tokens: [
        {
            token: {
                type: String,
            },
        },
    ],
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const UserSchemaProvider = {
    name: 'User',
    provide: getModelToken('UserModel'),
    useFactory: (): mongoose.Schema<any> => {
        const schema = new mongoose.Schema(userSchema);

        schema.methods.toJSON = function (): User {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/naming-convention
            const { password, tokens, __v, ...user }: User = this.toObject();

            return user as User;
        };

        schema.statics.findByCredentials = async function (email: string, password: string): Promise<User | null> {
            const userModel = this as UserModel;

            const user = await userModel.findOne({ email }).exec();

            const isMatch = user && (await bcrypt.compare(password, user?.password));

            if (!isMatch) {
                return null;
            }

            return user;
        };

        schema.pre<User>('save', async function (next: mongoose.HookNextFunction): Promise<void> {
            if (this.isModified('password')) {
                this.password = await bcrypt.hash(this.password, 8);
            }
            next();
        });

        return schema;
    },
};
