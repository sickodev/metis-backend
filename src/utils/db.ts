import postgres from "postgres";
import {drizzle} from 'drizzle-orm/postgres-js'
import env from "@utils/env.ts";

const client =  postgres(env.DATABASE_URL!, { prepare: false})

export const db = drizzle(client);

export function exitDB(){
    return client.end();
}