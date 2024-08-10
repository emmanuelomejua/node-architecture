import { FilterQuery } from "mongoose";
import Session, {  sessionDocument  } from "../models/session.model";

export async function createSession(userId: string, userAgent: string) {
    try {
        const session = await Session.create({user: userId, userAgent});
        return session.toJSON();
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message); 
        } else {
            throw new Error(String(error)); 
        }
    }
}


export async function findSessions(query: FilterQuery <sessionDocument>) {
    try {
        return Session.find(query).lean()
    } catch (error:any) {
        throw new Error(error)
    }
}
