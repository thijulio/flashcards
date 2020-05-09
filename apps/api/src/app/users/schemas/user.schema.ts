import * as bcrypt from 'bcrypt';
import * as mongoose from 'mongoose';
import * as validator from 'validator';
import { User, UserModel } from '../interfaces/user.interface';

// tslint:disable-next-line: naming-convention
export const UserSchemaProvider = {
    name: 'User',
    useFactory: () => {
        const schema = new mongoose.Schema({
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
                // Add validation...   it can be CHAR of type M/F
                type: String,
                required: true,
                trim: true,
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
        });

        schema.methods.toJSON = function(): User {
            const obj: User = this.toObject();
            delete obj.password;
            delete obj.tokens;
            delete obj.__v;
            return obj;
        };

        schema.statics.findByCredentials = async function(email: string, password: string): Promise<User> {
            const userModel = this as UserModel;

            const user: User = await userModel.findOne({ email }).exec();

            const isMatch = user && (await bcrypt.compare(password, user.password));

            if (!isMatch) {
                return null;
            }

            return user;
        };

        schema.pre<User>('save', async function(next: Function): Promise<void> {
            const user = this;

            if (user.isModified('password')) {
                user.password = await bcrypt.hash(user.password, 8);
            }
            next();
        });

        // tslint:disable-next-line: no-commented-code
        // schema.post('save', function( ) {
        //     console.log('post save hook runs');
        //     console.log(this);
        // });

        return schema;
    },
};
