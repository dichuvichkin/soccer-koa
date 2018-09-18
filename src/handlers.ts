import { Context } from "koa";

export const catchErrors = (fn: Function) => {
  return function(ctx: Context, next: Function) {
    return fn(ctx, next).catch(next);
  };
};
