import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = ResolversObject<{
  BaseItem: ( Comment ) | ( Job ) | ( Poll ) | ( PollOpt ) | ( Story );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BaseItem: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseItem']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  EdgeType: ResolverTypeWrapper<Omit<EdgeType, 'node'> & { node: ResolversTypes['BaseItem'] }>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  ItemConnection: ResolverTypeWrapper<Omit<ItemConnection, 'edges'> & { edges: Array<ResolversTypes['EdgeType']> }>;
  ItemType: ItemType;
  Job: ResolverTypeWrapper<Job>;
  ListType: ListType;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Poll: ResolverTypeWrapper<Poll>;
  PollOpt: ResolverTypeWrapper<PollOpt>;
  Query: ResolverTypeWrapper<{}>;
  Story: ResolverTypeWrapper<Story>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BaseItem: ResolversInterfaceTypes<ResolversParentTypes>['BaseItem'];
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  EdgeType: Omit<EdgeType, 'node'> & { node: ResolversParentTypes['BaseItem'] };
  Int: Scalars['Int']['output'];
  ItemConnection: Omit<ItemConnection, 'edges'> & { edges: Array<ResolversParentTypes['EdgeType']> };
  Job: Job;
  PageInfo: PageInfo;
  Poll: Poll;
  PollOpt: PollOpt;
  Query: {};
  Story: Story;
  String: Scalars['String']['output'];
  User: User;
}>;

export type BaseItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseItem'] = ResolversParentTypes['BaseItem']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Comment' | 'Job' | 'Poll' | 'PollOpt' | 'Story', ParentType, ContextType>;
  by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
}>;

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = ResolversObject<{
  by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  kids?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  parent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EdgeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EdgeType'] = ResolversParentTypes['EdgeType']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['BaseItem'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemConnection'] = ResolversParentTypes['ItemConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['EdgeType']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type JobResolvers<ContextType = any, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = ResolversObject<{
  by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  endCursor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PollResolvers<ContextType = any, ParentType extends ResolversParentTypes['Poll'] = ResolversParentTypes['Poll']> = ResolversObject<{
  by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  descendants?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  kids?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  parts?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PollOptResolvers<ContextType = any, ParentType extends ResolversParentTypes['PollOpt'] = ResolversParentTypes['PollOpt']> = ResolversObject<{
  by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  poll?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  item?: Resolver<Maybe<ResolversTypes['BaseItem']>, ParentType, ContextType, RequireFields<QueryItemArgs, 'id'>>;
  items?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<QueryItemsArgs, 'type'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
}>;

export type StoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Story'] = ResolversParentTypes['Story']> = ResolversObject<{
  by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  descendants?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  kids?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  about?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  karma?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  submitted?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  BaseItem?: BaseItemResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  EdgeType?: EdgeTypeResolvers<ContextType>;
  ItemConnection?: ItemConnectionResolvers<ContextType>;
  Job?: JobResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Poll?: PollResolvers<ContextType>;
  PollOpt?: PollOptResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Story?: StoryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

