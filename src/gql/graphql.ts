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
  node: Item;
};

export type Item = Comment | Job | Poll | PollOpt | Story;

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
  item?: Maybe<Item>;
  items: ItemConnection;
};


export type QueryItemArgs = {
  id: Scalars['Int']['input'];
};


export type QueryItemsArgs = {
  after?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  type: ListType;
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
  id: Scalars['Int']['output'];
  karma?: Maybe<Scalars['Int']['output']>;
  submitted?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

type CoreItemFields_Comment_Fragment = { __typename?: 'Comment', id: number, by: string, time: number, type: ItemType } & { ' $fragmentName'?: 'CoreItemFields_Comment_Fragment' };

type CoreItemFields_Job_Fragment = { __typename?: 'Job', id: number, by: string, time: number, type: ItemType } & { ' $fragmentName'?: 'CoreItemFields_Job_Fragment' };

type CoreItemFields_Poll_Fragment = { __typename?: 'Poll', id: number, by: string, time: number, type: ItemType } & { ' $fragmentName'?: 'CoreItemFields_Poll_Fragment' };

type CoreItemFields_PollOpt_Fragment = { __typename?: 'PollOpt', id: number, by: string, time: number, type: ItemType } & { ' $fragmentName'?: 'CoreItemFields_PollOpt_Fragment' };

type CoreItemFields_Story_Fragment = { __typename?: 'Story', id: number, by: string, time: number, type: ItemType } & { ' $fragmentName'?: 'CoreItemFields_Story_Fragment' };

export type CoreItemFieldsFragment = CoreItemFields_Comment_Fragment | CoreItemFields_Job_Fragment | CoreItemFields_Poll_Fragment | CoreItemFields_PollOpt_Fragment | CoreItemFields_Story_Fragment;

export type CommentFieldsFragment = { __typename?: 'Comment', text?: string | null, parent: number, kids?: Array<number> | null } & { ' $fragmentName'?: 'CommentFieldsFragment' };

type ItemFields_Comment_Fragment = { __typename: 'Comment' } & { ' $fragmentName'?: 'ItemFields_Comment_Fragment' };

type ItemFields_Job_Fragment = { __typename: 'Job' } & { ' $fragmentName'?: 'ItemFields_Job_Fragment' };

type ItemFields_Poll_Fragment = { __typename: 'Poll' } & { ' $fragmentName'?: 'ItemFields_Poll_Fragment' };

type ItemFields_PollOpt_Fragment = { __typename: 'PollOpt' } & { ' $fragmentName'?: 'ItemFields_PollOpt_Fragment' };

type ItemFields_Story_Fragment = { __typename: 'Story' } & { ' $fragmentName'?: 'ItemFields_Story_Fragment' };

export type ItemFieldsFragment = ItemFields_Comment_Fragment | ItemFields_Job_Fragment | ItemFields_Poll_Fragment | ItemFields_PollOpt_Fragment | ItemFields_Story_Fragment;

export type JobFieldsFragment = { __typename?: 'Job', score: number, text?: string | null, title: string, url?: string | null } & { ' $fragmentName'?: 'JobFieldsFragment' };

export type PollFieldsFragment = { __typename?: 'Poll', descendants: number, kids?: Array<number> | null, parts: Array<number>, score: number, text?: string | null, title: string } & { ' $fragmentName'?: 'PollFieldsFragment' };

export type PollOptFieldsFragment = { __typename?: 'PollOpt', poll: number, score: number, text?: string | null } & { ' $fragmentName'?: 'PollOptFieldsFragment' };

export type StoryFieldsFragment = { __typename?: 'Story', text?: string | null, descendants: number, kids?: Array<number> | null, score: number, title: string, url?: string | null } & { ' $fragmentName'?: 'StoryFieldsFragment' };

export type ItemQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ItemQuery = { __typename?: 'Query', item?: (
    { __typename: 'Comment' }
    & { ' $fragmentRefs'?: { 'CoreItemFields_Comment_Fragment': CoreItemFields_Comment_Fragment;'CommentFieldsFragment': CommentFieldsFragment } }
  ) | (
    { __typename: 'Job' }
    & { ' $fragmentRefs'?: { 'CoreItemFields_Job_Fragment': CoreItemFields_Job_Fragment;'JobFieldsFragment': JobFieldsFragment } }
  ) | (
    { __typename: 'Poll' }
    & { ' $fragmentRefs'?: { 'CoreItemFields_Poll_Fragment': CoreItemFields_Poll_Fragment;'PollFieldsFragment': PollFieldsFragment } }
  ) | (
    { __typename: 'PollOpt' }
    & { ' $fragmentRefs'?: { 'CoreItemFields_PollOpt_Fragment': CoreItemFields_PollOpt_Fragment;'PollOptFieldsFragment': PollOptFieldsFragment } }
  ) | (
    { __typename: 'Story' }
    & { ' $fragmentRefs'?: { 'CoreItemFields_Story_Fragment': CoreItemFields_Story_Fragment;'StoryFieldsFragment': StoryFieldsFragment } }
  ) | null };

export type ItemsQueryVariables = Exact<{
  type: ListType;
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ItemsQuery = { __typename?: 'Query', items: { __typename?: 'ItemConnection', edges: Array<{ __typename?: 'EdgeType', cursor: number, node: (
        { __typename: 'Comment' }
        & { ' $fragmentRefs'?: { 'CoreItemFields_Comment_Fragment': CoreItemFields_Comment_Fragment;'CommentFieldsFragment': CommentFieldsFragment } }
      ) | (
        { __typename: 'Job' }
        & { ' $fragmentRefs'?: { 'CoreItemFields_Job_Fragment': CoreItemFields_Job_Fragment;'JobFieldsFragment': JobFieldsFragment } }
      ) | (
        { __typename: 'Poll' }
        & { ' $fragmentRefs'?: { 'CoreItemFields_Poll_Fragment': CoreItemFields_Poll_Fragment;'PollFieldsFragment': PollFieldsFragment } }
      ) | (
        { __typename: 'PollOpt' }
        & { ' $fragmentRefs'?: { 'CoreItemFields_PollOpt_Fragment': CoreItemFields_PollOpt_Fragment;'PollOptFieldsFragment': PollOptFieldsFragment } }
      ) | (
        { __typename: 'Story' }
        & { ' $fragmentRefs'?: { 'CoreItemFields_Story_Fragment': CoreItemFields_Story_Fragment;'StoryFieldsFragment': StoryFieldsFragment } }
      ) }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: number | null } } };

export const CoreItemFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"by"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<CoreItemFieldsFragment, unknown>;
export const CommentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}}]}}]} as unknown as DocumentNode<CommentFieldsFragment, unknown>;
export const ItemFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<ItemFieldsFragment, unknown>;
export const JobFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"JobFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Job"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<JobFieldsFragment, unknown>;
export const PollFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PollFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Poll"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"descendants"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}},{"kind":"Field","name":{"kind":"Name","value":"parts"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<PollFieldsFragment, unknown>;
export const PollOptFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PollOptFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PollOpt"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poll"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<PollOptFieldsFragment, unknown>;
export const StoryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"descendants"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<StoryFieldsFragment, unknown>;
export const ItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Item"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreItemFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Job"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"JobFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Poll"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PollFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PollOpt"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PollOptFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"by"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"descendants"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"JobFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Job"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PollFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Poll"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"descendants"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}},{"kind":"Field","name":{"kind":"Name","value":"parts"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PollOptFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PollOpt"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poll"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<ItemQuery, ItemQueryVariables>;
export const ItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Items"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreItemFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Job"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"JobFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Poll"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PollFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PollOpt"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PollOptFields"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BaseItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"by"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Story"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"descendants"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"JobFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Job"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PollFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Poll"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"descendants"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}},{"kind":"Field","name":{"kind":"Name","value":"parts"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PollOptFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PollOpt"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poll"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<ItemsQuery, ItemsQueryVariables>;