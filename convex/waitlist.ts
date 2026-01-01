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
    const existing = await ctx.db
      .query("waitlist")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();
    if (existing) {
      throw new Error("EMAIL_EXISTS");
    }
    await ctx.db.insert("waitlist", { name: args.name, email: args.email });
  },
});
