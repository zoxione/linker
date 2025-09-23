/* eslint-disable */
// @ts-nocheck
import { z } from "zod/v4";

export const _500Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});
