import type {Context} from "hono";
import {sendResponse} from "@utils/response.js";
import {StatusCodes} from "http-status-codes/build/es/index.js";

export function getStatus(c: Context) {
    return sendResponse(c, StatusCodes.OK, StatusCodes.OK, "API Running Successfully");
}