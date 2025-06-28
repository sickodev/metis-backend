import type {StatusCodes} from "http-status-codes/build/es/index.js";

type EnvironmentVariables = {
    PORT?: string | 8080
}

type ResponseMessage<T = unknown> = {
    status: StatusCodes,
    total?: number,
    message?: string,
    data? : T,
    errors?: string[]
}