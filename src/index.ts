import {serve} from '@hono/node-server'
import {Hono} from 'hono'
import {v1} from "@routes/v1.ts";
import {StatusCodes} from "http-status-codes/build/es/index.js";
import {sendResponse} from "@utils/response.js";
import env from "@utils/env.js";

const app = new Hono()

app.route("/v1", v1);

app.get("/", c => {
   return sendResponse(c, StatusCodes.OK, StatusCodes.OK, "Hello To Metis")
})

serve({
    fetch: app.fetch,
    port: Number(env.PORT),
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
})