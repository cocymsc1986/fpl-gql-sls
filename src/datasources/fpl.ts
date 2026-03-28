import axios from "axios";

import {
  GetDataResponse,
  GetEventStatusResponse,
  GetFixturesResponse,
  GetFixturesForGameweekResponse,
} from "./types";

const rootUrl = "https://fantasy.premierleague.com/api";

const fplHeaders = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "Referer": "https://fantasy.premierleague.com/",
  "Origin": "https://fantasy.premierleague.com",
};

export const service = {
  getData: async (): Promise<GetDataResponse> =>
    await axios.get(`${rootUrl}/bootstrap-static/`, {
      headers: fplHeaders,
    }),
  getEventStatus: async (): Promise<GetEventStatusResponse> =>
    await axios.get(`${rootUrl}/event-status/`, {
      headers: fplHeaders,
    }),
  getFixtures: async (): Promise<GetFixturesResponse> =>
    await axios.get(`${rootUrl}/fixtures/`, {
      headers: fplHeaders,
    }),
  getFixturesForGameweek: async (
    gw: number
  ): Promise<GetFixturesForGameweekResponse> =>
    await axios.get(`${rootUrl}/fixtures?event=${gw}`, {
      headers: fplHeaders,
    }),
};
