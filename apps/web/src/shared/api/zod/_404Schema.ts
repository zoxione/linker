/* eslint-disable */
// @ts-nocheck
import { z } from "zod";

export const _404Schema = z.object({
  statusCode: z.number(),
  message: z.string(),
});
