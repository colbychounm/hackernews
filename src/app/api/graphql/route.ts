import context from "@/graphql/context";
import server from "@/graphql/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const handler = startServerAndCreateNextHandler(server, { context });

export { handler as GET, handler as POST };
