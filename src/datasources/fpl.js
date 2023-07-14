const axios = require("axios");

const rootUrl = "https://fantasy.premierleague.com/api";

module.exports.service = {
  getData: async () =>
    await axios.get(`${rootUrl}/bootstrap-static/`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
      },
    }),
  getEventStatus: async () =>
    await axios.get(`${rootUrl}/event-status/`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
      },
    }),
  getFixtures: async () =>
    await axios.get(`${rootUrl}/fixtures/`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
      },
    }),
  getFixturesForGameweek: async (gw) =>
    await axios.get(`${rootUrl}/fixtures?event=${gw}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36",
      },
    }),
};
