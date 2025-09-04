import { contracts } from "../../contracts";
import { customerLinkVisitsGetRoute } from "./link-visits/get";
import { customerLinksIdDeleteRoute } from "./links/[id]/delete";
import { customerLinksIdGetRoute } from "./links/[id]/get";
import { customerLinksIdPutRoute } from "./links/[id]/put";
import { customerLinksIdStatsLanguagesGetRoute } from "./links/[id]/stats/languages/get";
import { customerLinksIdStatsVisitsGetRoute } from "./links/[id]/stats/visits/get";
import { customerLinksIdStatusPostRoute } from "./links/[id]/status/post";
import { customerLinksTokenVisitGetRoute } from "./links/[token]/visit/get";
import { customerLinksGetRoute } from "./links/get";
import { customerLinksPostRoute } from "./links/post";
import { customerStatsGlobalGetRoute } from "./stats/global/get";

const customerRouter = contracts.serveApi();

customerRouter.route("/link-visits", customerLinkVisitsGetRoute);

customerRouter.route("/links", customerLinksGetRoute);
customerRouter.route("/links", customerLinksPostRoute);
customerRouter.route("/links", customerLinksIdGetRoute);
customerRouter.route("/links", customerLinksIdPutRoute);
customerRouter.route("/links", customerLinksIdStatusPostRoute);
customerRouter.route("/links", customerLinksIdDeleteRoute);
customerRouter.route("/links", customerLinksIdStatsVisitsGetRoute);
customerRouter.route("/links", customerLinksIdStatsLanguagesGetRoute);
customerRouter.route("/links", customerLinksTokenVisitGetRoute);

customerRouter.route("/stats", customerStatsGlobalGetRoute);

export { customerRouter };
