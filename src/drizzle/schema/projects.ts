import {pgTable, text, uuid, varchar} from "drizzle-orm/pg-core";
import {users} from "./users.ts";

export const projects = pgTable(
    "projects",{
        id: uuid("id").primaryKey().defaultRandom(),
        userId: uuid("user_id").notNull().references(() => users.id),
        name: varchar("name", {length: 255}).notNull(),
        linkInBucket: text("link_in_bucket").notNull(),
        summary: text("summary"),

        csvLink: text("csv_link"),
        jsonLink: text("json_link"),
        sheetsLink: text("sheets_link"),
    }
)