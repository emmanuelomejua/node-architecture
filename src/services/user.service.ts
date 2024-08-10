import {Document} from 'mongoose';
import { omit } from 'lodash';
import User, { userDocument } from "../models/user.model";


export async function createUser(input: Document<Omit<userDocument, 'createdAt' | 'updatedAt' | 'comparePassword'>>) {
    try {
        const user = await User.create(input);

        return omit(user.toJSON(), 'password');
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message); 
        } else {
            throw new Error(String(error)); 
        }
    }
}


export async function validatePassword ({email, password}: {email: string, password: string}) {
    try {
        const user = await User.findOne({email});

        if(!user) return false;

        const isPasswordValid = await user.comparePassword(password);

        if(!isPasswordValid) return false;

        return omit(user.toJSON(), 'password');
    } catch (error: unknown) { 
        if (error instanceof Error) {
            throw new Error(error.message); 
        } else {
            throw new Error(String(error)); 
        }
    }
}

