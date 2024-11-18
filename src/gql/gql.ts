/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  fragment CommentFields on Comment {\n    id\n    by\n    time\n    type\n    text\n    parent\n    kids\n  }\n": types.CommentFieldsFragmentDoc,
    "\n  fragment JobFields on Job {\n    id\n    by\n    time\n    type\n    score\n    text\n    title\n    url\n  }\n": types.JobFieldsFragmentDoc,
    "\n  fragment PollFields on Poll {\n    id\n    by\n    time\n    type\n    descendants\n    kids\n    parts\n    score\n    text\n    title\n  }\n": types.PollFieldsFragmentDoc,
    "\n  fragment PollOptFields on PollOpt {\n    id\n    by\n    time\n    type\n    poll\n    score\n    text\n  }\n": types.PollOptFieldsFragmentDoc,
    "\n  fragment StoryFields on Story {\n    id\n    by\n    time\n    type\n    text\n    descendants\n    kids\n    score\n    title\n    url\n  }\n": types.StoryFieldsFragmentDoc,
    "\n  query Item($id: Int!) {\n    item(id: $id) {\n      __typename\n      ... on Comment {\n        ...CommentFields\n      }\n      ... on Story {\n        ...StoryFields\n      }\n      ... on Job {\n        ...JobFields\n      }\n      ... on Poll {\n        ...PollFields\n      }\n      ... on PollOpt {\n        ...PollOptFields\n      }\n    }\n  }\n  \n  \n  \n  \n  \n": types.ItemDocument,
    "\n  query Items($type: ListType!, $first: Int, $after: Int) {\n    items(type: $type, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          __typename\n          ... on Comment {\n            ...CommentFields\n          }\n          ... on Story {\n            ...StoryFields\n          }\n          ... on Job {\n            ...JobFields\n          }\n          ... on Poll {\n            ...PollFields\n          }\n          ... on PollOpt {\n            ...PollOptFields\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n  \n  \n  \n  \n  \n": types.ItemsDocument,
    "\n  query User($id: String!) {\n    user(id: $id) {\n      id\n      created\n      karma\n      about\n      submitted\n    }\n  }\n": types.UserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CommentFields on Comment {\n    id\n    by\n    time\n    type\n    text\n    parent\n    kids\n  }\n"): (typeof documents)["\n  fragment CommentFields on Comment {\n    id\n    by\n    time\n    type\n    text\n    parent\n    kids\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment JobFields on Job {\n    id\n    by\n    time\n    type\n    score\n    text\n    title\n    url\n  }\n"): (typeof documents)["\n  fragment JobFields on Job {\n    id\n    by\n    time\n    type\n    score\n    text\n    title\n    url\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PollFields on Poll {\n    id\n    by\n    time\n    type\n    descendants\n    kids\n    parts\n    score\n    text\n    title\n  }\n"): (typeof documents)["\n  fragment PollFields on Poll {\n    id\n    by\n    time\n    type\n    descendants\n    kids\n    parts\n    score\n    text\n    title\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PollOptFields on PollOpt {\n    id\n    by\n    time\n    type\n    poll\n    score\n    text\n  }\n"): (typeof documents)["\n  fragment PollOptFields on PollOpt {\n    id\n    by\n    time\n    type\n    poll\n    score\n    text\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment StoryFields on Story {\n    id\n    by\n    time\n    type\n    text\n    descendants\n    kids\n    score\n    title\n    url\n  }\n"): (typeof documents)["\n  fragment StoryFields on Story {\n    id\n    by\n    time\n    type\n    text\n    descendants\n    kids\n    score\n    title\n    url\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Item($id: Int!) {\n    item(id: $id) {\n      __typename\n      ... on Comment {\n        ...CommentFields\n      }\n      ... on Story {\n        ...StoryFields\n      }\n      ... on Job {\n        ...JobFields\n      }\n      ... on Poll {\n        ...PollFields\n      }\n      ... on PollOpt {\n        ...PollOptFields\n      }\n    }\n  }\n  \n  \n  \n  \n  \n"): (typeof documents)["\n  query Item($id: Int!) {\n    item(id: $id) {\n      __typename\n      ... on Comment {\n        ...CommentFields\n      }\n      ... on Story {\n        ...StoryFields\n      }\n      ... on Job {\n        ...JobFields\n      }\n      ... on Poll {\n        ...PollFields\n      }\n      ... on PollOpt {\n        ...PollOptFields\n      }\n    }\n  }\n  \n  \n  \n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Items($type: ListType!, $first: Int, $after: Int) {\n    items(type: $type, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          __typename\n          ... on Comment {\n            ...CommentFields\n          }\n          ... on Story {\n            ...StoryFields\n          }\n          ... on Job {\n            ...JobFields\n          }\n          ... on Poll {\n            ...PollFields\n          }\n          ... on PollOpt {\n            ...PollOptFields\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n  \n  \n  \n  \n  \n"): (typeof documents)["\n  query Items($type: ListType!, $first: Int, $after: Int) {\n    items(type: $type, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          __typename\n          ... on Comment {\n            ...CommentFields\n          }\n          ... on Story {\n            ...StoryFields\n          }\n          ... on Job {\n            ...JobFields\n          }\n          ... on Poll {\n            ...PollFields\n          }\n          ... on PollOpt {\n            ...PollOptFields\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n  \n  \n  \n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query User($id: String!) {\n    user(id: $id) {\n      id\n      created\n      karma\n      about\n      submitted\n    }\n  }\n"): (typeof documents)["\n  query User($id: String!) {\n    user(id: $id) {\n      id\n      created\n      karma\n      about\n      submitted\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;