import {Hono} from "hono";
import {getStatus} from "@handlers/health/status.ts";

export const status = new Hono();

status.get("/", getStatus)