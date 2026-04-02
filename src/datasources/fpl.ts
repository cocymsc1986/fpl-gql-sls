import axios from "axios";
import https from "https";

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

const client = axios.create({
  httpsAgent: new https.Agent({ keepAlive: true }),
  headers: fplHeaders,
});

export const service = {
  getData: async (): Promise<GetDataResponse> =>
    await client.get(`${rootUrl}/bootstrap-static/`),
  getEventStatus: async (): Promise<GetEventStatusResponse> =>
    await client.get(`${rootUrl}/event-status/`),
  getFixtures: async (): Promise<GetFixturesResponse> =>
    await client.get(`${rootUrl}/fixtures/`),
  getFixturesForGameweek: async (
    gw: number
  ): Promise<GetFixturesForGameweekResponse> =>
    await client.get(`${rootUrl}/fixtures?event=${gw}`),
};
