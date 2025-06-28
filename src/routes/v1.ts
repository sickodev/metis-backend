import {Hono} from "hono";
import {health} from "./v1/health/index.ts";

export const v1 = new Hono()

v1.route("/health",health)