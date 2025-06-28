import type {Context} from "hono";
import type {StatusCodes} from "http-status-codes/build/es/index.js";
import type {ResponseMessage} from "../../types.js";
import type {ContentfulStatusCode} from "hono/utils/http-status";

export function sendResponse<T>(
    c: Context,
    status: StatusCodes,
    statusCode: ContentfulStatusCode,
    message: string,
    total?: number,
    data?: T,
    errors?: string[]
){
    return c.json<ResponseMessage<T>, ContentfulStatusCode>(
        {
            status,
            total,
            message,
            data,
            errors
        },
        statusCode
    )
}