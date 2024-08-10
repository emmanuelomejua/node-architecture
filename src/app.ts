import express from 'express';
import config from 'config';
import connect from './utils/connect';
import log from './utils/logger';
import routes from './routes/routes';
import deserializeUser from './middleware/deserializeUser';

const app = express();

app.use(express.json())

app.use(deserializeUser)

const PORT = config.get<number>('PORT')

app.listen(PORT, async () => {
    log.info(`Server started at port http://localhost:${PORT}`)

    await connect();
    routes(app);
})
