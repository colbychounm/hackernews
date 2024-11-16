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
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
