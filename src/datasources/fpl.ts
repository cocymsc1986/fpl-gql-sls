import axios from "axios";

import {
  GetDataResponse,
  GetEventStatusResponse,
  GetFixturesResponse,
  GetFixturesForGameweekResponse,
} from "./types";

const rootUrl = "https://fantasy.premierleague.com/api";

export const service = {
  getData: async (): Promise<GetDataResponse> =>
    await axios.get(`${rootUrl}/bootstrap-static/`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
      },
    }),
  getEventStatus: async (): Promise<GetEventStatusResponse> =>
    await axios.get(`${rootUrl}/event-status/`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
      },
    }),
  getFixtures: async (): Promise<GetFixturesResponse> =>
    await axios.get(`${rootUrl}/fixtures/`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
      },
    }),
  getFixturesForGameweek: async (
    gw: number
  ): Promise<GetFixturesForGameweekResponse> =>
    await axios.get(`${rootUrl}/fixtures?event=${gw}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
      },
    }),
};
