import { Request, Response } from "express";
import log from "../utils/logger";
import { validatePassword } from "../services/user.service";
import { createSession } from "../services/session.service";

export async function createSessionHandler (req: Request, res: Response) {
    try {
        const user = await validatePassword(req.body);

        if(!user){
            return res.status(400).send('Invalid User or Password')
        }

        const session = await createSession(user._id, req.get('user-agent') || '');

    } catch (error: unknown) {
        log.error(error)
    }
}

