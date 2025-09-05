import pino from "pino";

const logger = pino({
  base: null,
  timestamp: pino.stdTimeFunctions.isoTime,
  formatters: {
    level: (label) => {
      return { level: label.toUpperCase() };
    },
  },
  transport: {
    target: "hono-pino/debug-log",
    options: {
      colorEnabled: true,
    },
  },
});

export { logger };
