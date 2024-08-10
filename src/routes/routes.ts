import { Express, Request, Response } from "express";
import { createUserHandler } from "../controller/user.controller";
import validate from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";
import { createSessionSchema } from "../schema/sesssion.schema";
import { createSessionHandler, getSessionHandler } from "../controller/session.controller";
import requireUser from '../middleware/requireUser'

const routes = (app: Express) => {
    app.get('/healthcheck', (req: Request, res: Response) => {
        res.sendStatus(200)
    })

    app.post('/api/user', validate(createUserSchema), createUserHandler);

    app.post('/api/session', validate(createSessionSchema), createSessionHandler);

    app.get('/api/session', requireUser,  getSessionHandler)

}

export default routes;
