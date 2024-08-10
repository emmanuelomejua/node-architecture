import { Request, Response } from "express";
import log from "../utils/logger";
import { validatePassword } from "../services/user.service";
import { createSession, findSessions } from "../services/session.service";
import { signJwt } from "../utils/jwt.utils";
import config from 'config';


export async function createSessionHandler (req: Request, res: Response) {
    try {
        const user = await validatePassword(req.body);

        if(!user){
            return res.status(400).send('Invalid User or Password')
        }
                                          //@ts-ignore
        const session = await createSession(user._id, req.get('user-agent') || '');

        const accessToken = signJwt({
            ...user, session: session._id,
        }, {expiresIn: config.get('accessTokenTtl')})
    
        const refreshToken = signJwt({
            ...user, session: session._id,
        }, {expiresIn: config.get('refreshTokenTtl')});

        res.send({accessToken, refreshToken});
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(401).send(error.message);
        } else {
            return res.status(401).send(String(error));
        }
    }
}


export async function getSessionHandler (req: Request, res: Response) {
    try{
        const userId = res.locals.user._id;
    
        const sessions = await findSessions({user: userId, valid: true});
    
        return  res.send(sessions)

    } catch(error) {
        if (error instanceof Error) {
            return res.status(401).send(error.message);
        } else {
            return res.status(401).send(String(error));
        }
    }

}
