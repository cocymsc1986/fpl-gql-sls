import { GraphQLResolveInfo } from 'graphql';
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

export type AllTeams = {
  __typename?: 'AllTeams';
  teams?: Maybe<Array<Maybe<Team>>>;
};

export type EventStatus = {
  __typename?: 'EventStatus';
  leagues: Scalars['String']['output'];
  status?: Maybe<Array<Maybe<GameweekStatus>>>;
};

export type Fixture = {
  __typename?: 'Fixture';
  finished: Scalars['Boolean']['output'];
  kickoff_time: Scalars['String']['output'];
  started: Scalars['Boolean']['output'];
  team_a: Scalars['Int']['output'];
  team_a_difficulty?: Maybe<Scalars['Int']['output']>;
  team_a_score?: Maybe<Scalars['Int']['output']>;
  team_h: Scalars['Int']['output'];
  team_h_difficulty?: Maybe<Scalars['Int']['output']>;
  team_h_score?: Maybe<Scalars['Int']['output']>;
};

export type Fixtures = {
  __typename?: 'Fixtures';
  fixtures?: Maybe<Array<Maybe<Fixture>>>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type GameweekStatus = {
  __typename?: 'GameweekStatus';
  bonus_added: Scalars['Boolean']['output'];
  date: Scalars['String']['output'];
  event: Scalars['Int']['output'];
  points: Scalars['String']['output'];
};

export type GetAllTeamsFixtures = {
  __typename?: 'GetAllTeamsFixtures';
  fixtures?: Maybe<Array<Maybe<Array<Maybe<Fixture>>>>>;
};

export type GetTeamsFixtures = {
  __typename?: 'GetTeamsFixtures';
  fixtures?: Maybe<Array<Maybe<Fixture>>>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Player = {
  __typename?: 'Player';
  assists?: Maybe<Scalars['Int']['output']>;
  bps?: Maybe<Scalars['Int']['output']>;
  chance_of_playing_next_round?: Maybe<Scalars['Int']['output']>;
  chance_of_playing_this_round?: Maybe<Scalars['Int']['output']>;
  clean_sheets?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Scalars['Int']['output']>;
  creativity?: Maybe<Scalars['String']['output']>;
  element_type: Scalars['Int']['output'];
  event_points: Scalars['Int']['output'];
  first_name: Scalars['String']['output'];
  form: Scalars['String']['output'];
  goals_conceded?: Maybe<Scalars['Int']['output']>;
  goals_scored?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  in_dreamteam: Scalars['Boolean']['output'];
  influence?: Maybe<Scalars['String']['output']>;
  news: Scalars['String']['output'];
  now_cost: Scalars['Int']['output'];
  own_goals?: Maybe<Scalars['Int']['output']>;
  penalties_missed?: Maybe<Scalars['Int']['output']>;
  penalties_saved?: Maybe<Scalars['Int']['output']>;
  points_per_game?: Maybe<Scalars['String']['output']>;
  red_cards?: Maybe<Scalars['Int']['output']>;
  saves?: Maybe<Scalars['Int']['output']>;
  second_name: Scalars['String']['output'];
  selected_by_percent: Scalars['String']['output'];
  squad_number?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  team: Scalars['Int']['output'];
  team_code?: Maybe<Scalars['Int']['output']>;
  threat?: Maybe<Scalars['String']['output']>;
  total_points: Scalars['Int']['output'];
  transfers_in_event: Scalars['Int']['output'];
  transfers_out_event: Scalars['Int']['output'];
  value_form: Scalars['String']['output'];
  web_name: Scalars['String']['output'];
  yellow_cards?: Maybe<Scalars['Int']['output']>;
};

export type PlayerWithHighestProp = {
  __typename?: 'PlayerWithHighestProp';
  player?: Maybe<Player>;
};

export type PlayerWithLowestProp = {
  __typename?: 'PlayerWithLowestProp';
  player?: Maybe<Player>;
};

export type PlayersByProp = {
  __typename?: 'PlayersByProp';
  players?: Maybe<Array<Maybe<Player>>>;
};

export type PlayersByPropAndPos = {
  __typename?: 'PlayersByPropAndPos';
  players?: Maybe<Array<Maybe<Player>>>;
};

export type PlayersByTeam = {
  __typename?: 'PlayersByTeam';
  players?: Maybe<Array<Maybe<Player>>>;
};

export type PlayersSearch = {
  __typename?: 'PlayersSearch';
  players?: Maybe<Array<Maybe<Player>>>;
};

export type Query = {
  __typename?: 'Query';
  allTeams?: Maybe<AllTeams>;
  eventStatus?: Maybe<EventStatus>;
  fixtures?: Maybe<Fixtures>;
  getAllTeamsFixtures?: Maybe<GetAllTeamsFixtures>;
  getTeamsFixtures?: Maybe<GetTeamsFixtures>;
  player?: Maybe<Player>;
  playerWithHighestProp?: Maybe<PlayerWithHighestProp>;
  playerWithLowestProp?: Maybe<PlayerWithLowestProp>;
  playersByProp?: Maybe<PlayersByProp>;
  playersByPropAndPos?: Maybe<PlayersByPropAndPos>;
  playersByTeam?: Maybe<PlayersByTeam>;
  playersSearch?: Maybe<PlayersSearch>;
  team?: Maybe<Team>;
};


export type QueryFixturesArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTeamsFixturesArgs = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPlayerArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPlayerWithHighestPropArgs = {
  prop?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPlayerWithLowestPropArgs = {
  prop?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPlayersByPropArgs = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  prop?: InputMaybe<Scalars['String']['input']>;
  reverseOrder?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPlayersByPropAndPosArgs = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  prop?: InputMaybe<Scalars['String']['input']>;
  reverseOrder?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPlayersByTeamArgs = {
  team?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPlayersSearchArgs = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTeamArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Team = {
  __typename?: 'Team';
  code: Scalars['Int']['output'];
  current_event_fixture?: Maybe<Array<Maybe<TeamFixture>>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  next_event_fixture?: Maybe<Array<Maybe<TeamFixture>>>;
  short_name: Scalars['String']['output'];
};

export type TeamFixture = {
  __typename?: 'TeamFixture';
  day: Scalars['Int']['output'];
  is_home: Scalars['Boolean']['output'];
  month: Scalars['Int']['output'];
  opponent: Scalars['Int']['output'];
};



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



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AllTeams: ResolverTypeWrapper<AllTeams>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  EventStatus: ResolverTypeWrapper<EventStatus>;
  Fixture: ResolverTypeWrapper<Fixture>;
  Fixtures: ResolverTypeWrapper<Fixtures>;
  GameweekStatus: ResolverTypeWrapper<GameweekStatus>;
  GetAllTeamsFixtures: ResolverTypeWrapper<GetAllTeamsFixtures>;
  GetTeamsFixtures: ResolverTypeWrapper<GetTeamsFixtures>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Player: ResolverTypeWrapper<Player>;
  PlayerWithHighestProp: ResolverTypeWrapper<PlayerWithHighestProp>;
  PlayerWithLowestProp: ResolverTypeWrapper<PlayerWithLowestProp>;
  PlayersByProp: ResolverTypeWrapper<PlayersByProp>;
  PlayersByPropAndPos: ResolverTypeWrapper<PlayersByPropAndPos>;
  PlayersByTeam: ResolverTypeWrapper<PlayersByTeam>;
  PlayersSearch: ResolverTypeWrapper<PlayersSearch>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Team: ResolverTypeWrapper<Team>;
  TeamFixture: ResolverTypeWrapper<TeamFixture>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AllTeams: AllTeams;
  Boolean: Scalars['Boolean']['output'];
  EventStatus: EventStatus;
  Fixture: Fixture;
  Fixtures: Fixtures;
  GameweekStatus: GameweekStatus;
  GetAllTeamsFixtures: GetAllTeamsFixtures;
  GetTeamsFixtures: GetTeamsFixtures;
  Int: Scalars['Int']['output'];
  Player: Player;
  PlayerWithHighestProp: PlayerWithHighestProp;
  PlayerWithLowestProp: PlayerWithLowestProp;
  PlayersByProp: PlayersByProp;
  PlayersByPropAndPos: PlayersByPropAndPos;
  PlayersByTeam: PlayersByTeam;
  PlayersSearch: PlayersSearch;
  Query: {};
  String: Scalars['String']['output'];
  Team: Team;
  TeamFixture: TeamFixture;
};

export type AllTeamsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AllTeams'] = ResolversParentTypes['AllTeams']> = {
  teams?: Resolver<Maybe<Array<Maybe<ResolversTypes['Team']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventStatus'] = ResolversParentTypes['EventStatus']> = {
  leagues?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['GameweekStatus']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FixtureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Fixture'] = ResolversParentTypes['Fixture']> = {
  finished?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kickoff_time?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  started?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  team_a?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  team_a_difficulty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  team_a_score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  team_h?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  team_h_difficulty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  team_h_score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FixturesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Fixtures'] = ResolversParentTypes['Fixtures']> = {
  fixtures?: Resolver<Maybe<Array<Maybe<ResolversTypes['Fixture']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GameweekStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['GameweekStatus'] = ResolversParentTypes['GameweekStatus']> = {
  bonus_added?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  event?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  points?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetAllTeamsFixturesResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetAllTeamsFixtures'] = ResolversParentTypes['GetAllTeamsFixtures']> = {
  fixtures?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Fixture']>>>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetTeamsFixturesResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetTeamsFixtures'] = ResolversParentTypes['GetTeamsFixtures']> = {
  fixtures?: Resolver<Maybe<Array<Maybe<ResolversTypes['Fixture']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = {
  assists?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bps?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  chance_of_playing_next_round?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  chance_of_playing_this_round?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  clean_sheets?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creativity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  element_type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  event_points?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  first_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  form?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  goals_conceded?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  goals_scored?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  in_dreamteam?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  influence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  news?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  now_cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  own_goals?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  penalties_missed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  penalties_saved?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  points_per_game?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  red_cards?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  saves?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  selected_by_percent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  squad_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  team_code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  threat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total_points?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transfers_in_event?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transfers_out_event?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value_form?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  web_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  yellow_cards?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerWithHighestPropResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerWithHighestProp'] = ResolversParentTypes['PlayerWithHighestProp']> = {
  player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerWithLowestPropResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerWithLowestProp'] = ResolversParentTypes['PlayerWithLowestProp']> = {
  player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayersByPropResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayersByProp'] = ResolversParentTypes['PlayersByProp']> = {
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['Player']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayersByPropAndPosResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayersByPropAndPos'] = ResolversParentTypes['PlayersByPropAndPos']> = {
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['Player']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayersByTeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayersByTeam'] = ResolversParentTypes['PlayersByTeam']> = {
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['Player']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayersSearchResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayersSearch'] = ResolversParentTypes['PlayersSearch']> = {
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['Player']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allTeams?: Resolver<Maybe<ResolversTypes['AllTeams']>, ParentType, ContextType>;
  eventStatus?: Resolver<Maybe<ResolversTypes['EventStatus']>, ParentType, ContextType>;
  fixtures?: Resolver<Maybe<ResolversTypes['Fixtures']>, ParentType, ContextType, Partial<QueryFixturesArgs>>;
  getAllTeamsFixtures?: Resolver<Maybe<ResolversTypes['GetAllTeamsFixtures']>, ParentType, ContextType>;
  getTeamsFixtures?: Resolver<Maybe<ResolversTypes['GetTeamsFixtures']>, ParentType, ContextType, Partial<QueryGetTeamsFixturesArgs>>;
  player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType, Partial<QueryPlayerArgs>>;
  playerWithHighestProp?: Resolver<Maybe<ResolversTypes['PlayerWithHighestProp']>, ParentType, ContextType, Partial<QueryPlayerWithHighestPropArgs>>;
  playerWithLowestProp?: Resolver<Maybe<ResolversTypes['PlayerWithLowestProp']>, ParentType, ContextType, Partial<QueryPlayerWithLowestPropArgs>>;
  playersByProp?: Resolver<Maybe<ResolversTypes['PlayersByProp']>, ParentType, ContextType, Partial<QueryPlayersByPropArgs>>;
  playersByPropAndPos?: Resolver<Maybe<ResolversTypes['PlayersByPropAndPos']>, ParentType, ContextType, Partial<QueryPlayersByPropAndPosArgs>>;
  playersByTeam?: Resolver<Maybe<ResolversTypes['PlayersByTeam']>, ParentType, ContextType, Partial<QueryPlayersByTeamArgs>>;
  playersSearch?: Resolver<Maybe<ResolversTypes['PlayersSearch']>, ParentType, ContextType, Partial<QueryPlayersSearchArgs>>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, Partial<QueryTeamArgs>>;
};

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  current_event_fixture?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamFixture']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  next_event_fixture?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamFixture']>>>, ParentType, ContextType>;
  short_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamFixtureResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamFixture'] = ResolversParentTypes['TeamFixture']> = {
  day?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_home?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  month?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  opponent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AllTeams?: AllTeamsResolvers<ContextType>;
  EventStatus?: EventStatusResolvers<ContextType>;
  Fixture?: FixtureResolvers<ContextType>;
  Fixtures?: FixturesResolvers<ContextType>;
  GameweekStatus?: GameweekStatusResolvers<ContextType>;
  GetAllTeamsFixtures?: GetAllTeamsFixturesResolvers<ContextType>;
  GetTeamsFixtures?: GetTeamsFixturesResolvers<ContextType>;
  Player?: PlayerResolvers<ContextType>;
  PlayerWithHighestProp?: PlayerWithHighestPropResolvers<ContextType>;
  PlayerWithLowestProp?: PlayerWithLowestPropResolvers<ContextType>;
  PlayersByProp?: PlayersByPropResolvers<ContextType>;
  PlayersByPropAndPos?: PlayersByPropAndPosResolvers<ContextType>;
  PlayersByTeam?: PlayersByTeamResolvers<ContextType>;
  PlayersSearch?: PlayersSearchResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  TeamFixture?: TeamFixtureResolvers<ContextType>;
};

