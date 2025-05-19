import ky from "ky";

const api = ky.create({
  prefixUrl: `${process.env.WEB_APP_URL}/api`,
});

export { api };
