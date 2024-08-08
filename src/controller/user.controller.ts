import { Request, Response } from "express";
import logger from "../utils/logger";
import { createUser } from "../services/user.service";


export async function createUserHandler (req: Request, res: Response) {
    try {
        const user = await createUser(req.body);

        return user;
    } catch (error: any) {
        logger.error(error)
        return res.status(409).json(error.message)
    }
}
