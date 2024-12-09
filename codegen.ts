import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/graphql/type-defs.ts",
  documents: ["src/documents/**/*.ts"],
  generates: {
    "src/gql/": {
      preset: "client",
    },
    "src/graphql/types/resolvers.ts": {
      config: {
        useIndexSignature: true,
        mappers: {
          BaseItem: "../data-sources/hackernews-api#ItemDataSource",
          Comment: "../data-sources/hackernews-api#ItemDataSource",
        },
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
