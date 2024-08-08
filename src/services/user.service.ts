import {Document} from 'mongoose';

import User, { userDocument } from "../models/user.model";


export async function createUser(input: Document<Omit<userDocument, 'createdAt' | 'updatedAt' | 'comparePassword'>>) {
    try {
        return await User.create(input)
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message); 
        } else {
            throw new Error(String(error)); 
        }
    }
}


