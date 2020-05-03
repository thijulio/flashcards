import * as bcrypt from 'bcrypt';
import * as mongoose from 'mongoose';
import * as validator from 'validator';
import { User } from '../interfaces/user-model.interface';

// tslint:disable-next-line: naming-convention
export const UserSchemaProvider = {
    name: 'User',
    useFactory: () => {
        const schema = new mongoose.Schema({
            name: {
                type: String,
                required: true,
                trim: true,
            },
            username: {
                type: String,
                required: true,
                trim: true,
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
            tokens: [
                {
                    token: {
                        type: String,
                        // required: true,
                    },
                },
            ],
        });

        schema.methods.toJSON = function(): User {
            const obj: User = this.toObject();
            delete obj.password;
            delete obj.tokens;
            return obj;
        };

        schema.statics.findByCredentials = async function(email: string, password: string): Promise<User> {
            const userModel = this;

            const user: User = await userModel.findOne({ email });

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
