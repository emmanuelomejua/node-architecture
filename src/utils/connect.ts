import mongoose from "mongoose";
import config from 'config';
import logger from "./logger";

const connect = () => {
    const dbUri = config.get<string>('dbUri');

    return mongoose.connect(dbUri)

    .then(() => {
        logger.info('DB connected successfully')
    })
    .catch((error) => {
        logger.error(error.message);
        process.exit(1);
    })
}

export default connect;
