// import {DocumentDefinition} from 'mongoose';

import User, { userDocument } from "../models/user.model";


export async function createUser(input: userDocument) {
    try {
        return await User.create(input)
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message); // Use the error message if it's an Error object
        } else {
            throw new Error(String(error)); // Convert the unknown type to a string
        }
    }
}

