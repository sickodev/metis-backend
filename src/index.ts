import {serve} from '@hono/node-server'
import {Hono} from 'hono'
import {initEnv} from "@utils/env.ts";
import {v1} from "@routes/v1.ts";
import {StatusCodes} from "http-status-codes/build/es/index.js";
import {sendResponse} from "@utils/response.js";

const app = new Hono()

initEnv();

app.route("/v1", v1);

app.get("/", c => {
   return sendResponse(c, StatusCodes.OK, StatusCodes.OK, "Hello To Metis")
})

serve({
    fetch: app.fetch,
    port: 8080
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
})