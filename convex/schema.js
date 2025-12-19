import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export default defineSchema({
  //Users Table
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
  }),
});
