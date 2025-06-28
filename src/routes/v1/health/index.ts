import {Hono} from "hono";
import {status} from "./status.ts";

export const health = new Hono();

health.route("/status",status)