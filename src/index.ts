import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import {initEnv} from "./utils/index.js";

const app = new Hono()

initEnv();

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 8080
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
