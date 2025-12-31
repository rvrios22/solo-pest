import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getWaitlist = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("waitlist").collect();
  },
});

export const insertToWaitlist = mutation({
  args: { name: v.string(), email: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("waitlist", { name: args.name, email: args.email });
  },
});
