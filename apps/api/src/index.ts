import { LINK_SCHEMA } from "./app/shared/entities/link";
import { LINK_VISIT_SCHEMA } from "./app/shared/entities/link-visit";
import { USER_SCHEMA } from "./app/shared/entities/user";
import { Auth, Session, User } from "./lib/auth";
import { OTP_LENGTH } from "./lib/constants";

export { LINK_SCHEMA, LINK_VISIT_SCHEMA, OTP_LENGTH, USER_SCHEMA, type Auth, type Session, type User };
