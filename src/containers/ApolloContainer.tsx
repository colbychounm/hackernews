"use client";

import { makeClient } from "@/lib/apollo-client";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support";
import { PropsWithChildren } from "react";

export default function ApolloContainer({ children }: PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
