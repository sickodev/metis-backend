import type {EnvironmentVariables} from "../../types.d.ts";
import {configDotenv} from "dotenv";

configDotenv();

const env: EnvironmentVariables = {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL!,
};

export default env;