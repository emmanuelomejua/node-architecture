import Session from "../models/session.model";

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
