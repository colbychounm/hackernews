/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type BaseItem = {
  by: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
  type: ItemType;
};

export type Comment = BaseItem & {
  __typename?: 'Comment';
  by: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  kids?: Maybe<Array<Scalars['Int']['output']>>;
  parent: Scalars['Int']['output'];
  text?: Maybe<Scalars['String']['output']>;
  time: Scalars['Int']['output'];
  type: ItemType;
};

export type EdgeType = {
  __typename?: 'EdgeType';
  cursor: Scalars['Int']['output'];
  node: BaseItem;
};

export type ItemConnection = {
  __typename?: 'ItemConnection';
  edges: Array<EdgeType>;
  pageInfo: PageInfo;
};

export enum ItemType {
  Comment = 'comment',
  Job = 'job',
  Poll = 'poll',
  Pollopt = 'pollopt',
  Story = 'story'
}

export type Job = BaseItem & {
  __typename?: 'Job';
  by: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  score: Scalars['Int']['output'];
  text?: Maybe<Scalars['String']['output']>;
  time: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  type: ItemType;
  url?: Maybe<Scalars['String']['output']>;
};

export enum ListType {
  Askstories = 'askstories',
  Jobstories = 'jobstories',
  Newstories = 'newstories',
  Showstories = 'showstories',
  Topstories = 'topstories'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Int']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
};

export type Poll = BaseItem & {
  __typename?: 'Poll';
  by: Scalars['String']['output'];
  descendants: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  kids?: Maybe<Array<Scalars['Int']['output']>>;
  parts: Array<Scalars['Int']['output']>;
  score: Scalars['Int']['output'];
  text?: Maybe<Scalars['String']['output']>;
  time: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  type: ItemType;
};

export type PollOpt = BaseItem & {
  __typename?: 'PollOpt';
  by: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  poll: Scalars['Int']['output'];
  score: Scalars['Int']['output'];
  text?: Maybe<Scalars['String']['output']>;
  time: Scalars['Int']['output'];
  type: ItemType;
};

export type Query = {
  __typename?: 'Query';
  item?: Maybe<BaseItem>;
  items: ItemConnection;
  user?: Maybe<User>;
};


export type QueryItemArgs = {
  id: Scalars['Int']['input'];
};


export type QueryItemsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  type: ListType;
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type Story = BaseItem & {
  __typename?: 'Story';
  by: Scalars['String']['output'];
  descendants: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  kids?: Maybe<Array<Scalars['Int']['output']>>;
  score: Scalars['Int']['output'];
  text?: Maybe<Scalars['String']['output']>;
  time: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  type: ItemType;
  url?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  about?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  karma?: Maybe<Scalars['Int']['output']>;
  submitted?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type CommentFieldsFragment = { __typename?: 'Comment', text?: string | null, parent: number, kids?: Array<number> | null } & { ' $fragmentName'?: 'CommentFieldsFragment' };

export type JobFieldsFragment = { __typename?: 'Job', score: number, text?: string | null, title: string, url?: string | null } & { ' $fragmentName'?: 'JobFieldsFragment' };

export type PollFieldsFragment = { __typename?: 'Poll', descendants: number, kids?: Array<number> | null, parts: Array<number>, score: number, text?: string | null, title: string } & { ' $fragmentName'?: 'PollFieldsFragment' };

export type PollOptFieldsFragment = { __typename?: 'PollOpt', poll: number, score: number, text?: string | null } & { ' $fragmentName'?: 'PollOptFieldsFragment' };

export type StoryFieldsFragment = { __typename?: 'Story', text?: string | null, descendants: number, kids?: Array<number> | null, score: number, title: string, url?: string | null } & { ' $fragmentName'?: 'StoryFieldsFragment' };

export type ItemQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ItemQuery = { __typename?: 'Query', item?: (
    { __typename?: 'Comment', id: number, type: ItemType, by: string, time: number }
    & { ' $fragmentRefs'?: { 'CommentFieldsFragment': CommentFieldsFragment } }
  ) | (
    { __typename?: 'Job', id: number, type: ItemType, by: string, time: number }
    & { ' $fragmentRefs'?: { 'JobFieldsFragment': JobFieldsFragment } }
  ) | (
    { __typename?: 'Poll', id: number, type: ItemType, by: string, time: number }
    & { ' $fragmentRefs'?: { 'PollFieldsFragment': PollFieldsFragment } }
  ) | (
    { __typename?: 'PollOpt', id: number, type: ItemType, by: string, time: number }
    & { ' $fragmentRefs'?: { 'PollOptFieldsFragment': PollOptFieldsFragment } }
  ) | (
    { __typename?: 'Story', id: number, type: ItemType, by: string, time: number }
    & { ' $fragmentRefs'?: { 'StoryFieldsFragment': StoryFieldsFragment } }
  ) | null };

export type ItemsQueryVariables = Exact<{
  type: ListType;
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ItemsQuery = { __typename?: 'Query', items: { __typename?: 'ItemConnection', edges: Array<{ __typename?: 'EdgeType', cursor: number, node: (
        { __typename?: 'Comment', id: number, type: ItemType, by: string, time: number }
        & { ' $fragmentRefs'?: { 'CommentFieldsFragment': CommentFieldsFragment } }
      ) | (
        { __typename?: 'Job', id: number, type: ItemType, by: string, time: number }
        & { ' $fragmentRefs'?: { 'JobFieldsFragment': JobFieldsFragment } }
      ) | (
        { __typename?: 'Poll', id: number, type: ItemType, by: string, time: number }
        & { ' $fragmentRefs'?: { 'PollFieldsFragment': PollFieldsFragment } }
      ) | (
        { __typename?: 'PollOpt', id: number, type: ItemType, by: string, time: number }
        & { ' $fragmentRefs'?: { 'PollOptFieldsFragment': PollOptFieldsFragment } }
      ) | (
        { __typename?: 'Story', id: number, type: ItemType, by: string, time: number }
        & { ' $fragmentRefs'?: { 'StoryFieldsFragment': StoryFieldsFragment } }
      ) }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: number | null } } };

export type UserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, created?: number | null, karma?: number | null, about?: string | null, submitted?: Array<number | null> | null } | null };

export const CommentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}}]}}]} as unknown as DocumentNode<CommentFieldsFragment, unknown>;
export const JobFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"JobFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Job"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<JobFieldsFragment, unknown>;
export const PollFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PollFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Poll"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"descendants"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}},{"kind":"Field","name":{"kind":"Name","value":"parts"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<PollFieldsFragment, unknown>;
export const PollOptFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PollOptFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PollOpt"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poll"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<PollOptFieldsFragment, unknown>;
export const StoryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"descendants"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<StoryFieldsFragment, unknown>;
export const ItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Item"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"by"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Job"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"JobFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Poll"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PollFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PollOpt"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PollOptFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"descendants"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"JobFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Job"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PollFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Poll"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"descendants"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}},{"kind":"Field","name":{"kind":"Name","value":"parts"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PollOptFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PollOpt"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poll"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<ItemQuery, ItemQueryVariables>;
export const ItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Items"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"by"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Job"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"JobFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Poll"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PollFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PollOpt"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PollOptFields"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"descendants"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"JobFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Job"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PollFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Poll"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"descendants"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}},{"kind":"Field","name":{"kind":"Name","value":"parts"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PollOptFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PollOpt"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poll"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<ItemsQuery, ItemsQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"karma"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"submitted"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;