import type {StatusCodes} from "http-status-codes";

type EnvironmentVariables = {
    PORT?: string
    DATABASE_URL: string
}

type ResponseMessage<T = unknown> = {
    status: StatusCodes,
    total?: number,
    message?: string,
    data? : T,
    errors?: string[]
}