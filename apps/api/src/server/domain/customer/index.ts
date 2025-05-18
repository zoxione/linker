import { contracts } from "../../contracts";
import { customerLinksIdDeleteRoute } from "./links/[id]/delete";
import { customerLinksIdGetRoute } from "./links/[id]/get";
import { customerLinksIdPutRoute } from "./links/[id]/put";
import { customerLinksIdStatusPostRoute } from "./links/[id]/status/post";
import { customerLinksGetRoute } from "./links/get";
import { customerLinksPostRoute } from "./links/post";

const customerRouter = contracts.serveApi();

customerRouter.route("/links", customerLinksGetRoute);
customerRouter.route("/links", customerLinksPostRoute);
customerRouter.route("/links", customerLinksIdGetRoute);
customerRouter.route("/links", customerLinksIdPutRoute);
customerRouter.route("/links", customerLinksIdStatusPostRoute);
customerRouter.route("/links", customerLinksIdDeleteRoute);

export { customerRouter };
