import mongoose, { Document, model, Schema, } from "mongoose";
import bcrypt from 'bcrypt';
import config from 'config';


export interface userDocument extends Document {
    email: string,
    password: string,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    comparePassword(userPassword: string) : Promise<boolean>
}

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: { type: String, required: true },
    name: { type: String, required: true },
    // confirmPassword: { type: String, required: true },
}, {timestamps: true});


userSchema.pre('save', async  function(next: any) {
                    // @ts-ignore
    let user = this as userDocument;

    if(!user.isModified('password')){
       return next();

    }

    const salt = await bcrypt.genSalt(config.get<number>('saltWalkFactor'));

    const hash =  bcrypt.hashSync(user.password, salt);

    user.password = hash;

    return next();
})


userSchema.methods.comparePassword = async function(userPassword:string): Promise<boolean> {
    const user = this as userDocument;

    return bcrypt.compare(userPassword, user.password).catch((err: unknown) => false)
}

const User = model('User', userSchema);

export default User;
