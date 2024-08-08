import { Request, Response } from "express";
import logger from "../utils/logger";
import { createUser } from "../services/user.service";
import { createUserInput } from "../schema/user.schema";
import { omit } from 'lodash';


export async function createUserHandler (req: Request<{}, {}, createUserInput['body']>  , res: Response) {
    try {
                                    // @ts-ignore
        const user = await createUser(req.body);

        return res.send(omit(user.toJSON(), 'password'));
    } catch (error: any) {
        logger.error(error)
        return res.status(409).json(error.message)
    }
}
