import {pgTable, uuid, varchar} from "drizzle-orm/pg-core";

export const users = pgTable(
    "users",{
        id: uuid("id").primaryKey().defaultRandom(),
        username: varchar("username", {length: 100}).notNull(),
        email: varchar("email", {length: 255}),
        phone: varchar("phone", {length: 20}),
    }
)