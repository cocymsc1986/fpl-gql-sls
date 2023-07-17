import {
  Event,
  Phase,
  Team,
  Player,
  ElementStat,
  ElementType,
  Fixture,
} from "../types";

export type GetDataResponse = {
  data: allData;
};

export type GetEventStatusResponse = {
  data: {
    status: any[];
    leagues: string;
  };
};

export type GetFixturesResponse = {
  data: Fixture[];
};

export type GetFixturesForGameweekResponse = {
  data: Fixture[];
};

export type allData = {
  events: Event[];
  game_settings: Record<string, any>;
  phases: Phase[];
  teams: Team[];
  total_players: number;
  elements: Player[];
  element_stats: ElementStat[];
  element_types: ElementType[];
};
