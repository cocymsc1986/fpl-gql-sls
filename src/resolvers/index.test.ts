import {
  eventStatus,
  player,
  playersByTeam,
  playerWithHighestProp,
  playerWithLowestProp,
  playersByProp,
  playersSearch,
  playersByPropAndPos,
  team,
  allTeams,
  fixtures,
  getTeamsFixtures,
  getAllTeamsFixtures,
} from "./";
import { service as fplService } from "../datasources/fpl";
import { player1, player2, player3 } from "../../mocks/players";
import { team1, team2 } from "../../mocks/teams";
import { fixture1, fixture2, fixture3, fixture4 } from "../../mocks/fixtures";

jest.mock("../datasources/fpl", () => ({
  service: {
    getData: jest.fn(() => []),
    getEventStatus: jest.fn(() => []),
    getFixtures: jest.fn(() => []),
    getFixturesForGameweek: jest.fn(() => []),
  },
}));

describe("resolvers", () => {
  describe("eventStatus", () => {
    it("should call service for eventStatus and return data", async () => {
      jest.mocked(fplService.getEventStatus).mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            resolve({
              data: {
                leagues: "test",
                status: ["active"],
              },
            })
          )
      );
      const result = await eventStatus();

      expect(fplService.getEventStatus).toHaveBeenCalled();
      expect(result).toEqual({ leagues: "test", status: ["active"] });
    });
  });

  describe("player", () => {
    it("should call service for getData and return match for player id", async () => {
      jest.mocked(fplService.getData).mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            resolve({
              data: {
                events: [],
                game_settings: {},
                phases: [],
                teams: [],
                elements: [player1, player2],
                total_players: 10,
                element_stats: [],
                element_types: [],
              },
            })
          )
      );
      const result = await player({ id: 6 });

      expect(fplService.getData).toHaveBeenCalled();
      expect(result).toEqual(player1);
    });
  });

  describe("playersByTeam", () => {
    it("should call service for getData and and return players from passed in team id", async () => {
      jest.mocked(fplService.getData).mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            resolve({
              data: {
                events: [],
                game_settings: {},
                phases: [],
                teams: [],
                elements: [player1, player2, player3],
                total_players: 10,
                element_stats: [],
                element_types: [],
              },
            })
          )
      );
      const result = await playersByTeam({ team: 2 });

      expect(fplService.getData).toHaveBeenCalled();
      expect(result).toEqual({ players: [player3] });
    });
  });

  describe("playerWithHighestProp", () => {
    it("should call service for getData and and return player with highest value for passed in property", async () => {
      jest.mocked(fplService.getData).mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            resolve({
              data: {
                events: [],
                game_settings: {},
                phases: [],
                teams: [],
                elements: [player1, player2, player3],
                total_players: 10,
                element_stats: [],
                element_types: [],
              },
            })
          )
      );
      const result = await playerWithHighestProp({ prop: "bps" });

      expect(fplService.getData).toHaveBeenCalled();
      expect(result).toEqual({ player: { ...player1 } });
    });
  });

  describe("playerWithLowestProp", () => {
    it("should call service for getData and and return player with lowest value for passed in property", async () => {
      jest.mocked(fplService.getData).mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            resolve({
              data: {
                events: [],
                game_settings: {},
                phases: [],
                teams: [],
                elements: [player1, player2, player3],
                total_players: 10,
                element_stats: [],
                element_types: [],
              },
            })
          )
      );

      const result = await playerWithLowestProp({ prop: "bps" });

      expect(fplService.getData).toHaveBeenCalled();
      expect(result).toEqual({ player: { ...player2 } });
    });
  });

  describe("playersByProp", () => {
    it("should call service for getData and return data sorted by passed in property", async () => {
      jest.mocked(fplService.getData).mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            resolve({
              data: {
                events: [],
                game_settings: {},
                phases: [],
                teams: [],
                elements: [player1, player2, player3],
                total_players: 10,
                element_stats: [],
                element_types: [],
              },
            })
          )
      );

      const result = await playersByProp({ prop: "bps", amount: 99 });

      expect(fplService.getData).toHaveBeenCalled();
      expect(result).toEqual({ players: [player1, player3, player2] });
    });

    it("should call service for getData and return data sorted by passed in property in reverse order when reverse param passed in", async () => {
      jest.mocked(fplService.getData).mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            resolve({
              data: {
                events: [],
                game_settings: {},
                phases: [],
                teams: [],
                elements: [player1, player2, player3],
                total_players: 10,
                element_stats: [],
                element_types: [],
              },
            })
          )
      );

      const result = await playersByProp({
        prop: "bps",
        amount: 99,
        reverseOrder: true,
      });

      expect(fplService.getData).toHaveBeenCalled();
      expect(result).toEqual({ players: [player2, player3, player1] });
    });

    it("should call service for getData and return data sorted by passed in property and cut the response to amount requested", async () => {
      jest.mocked(fplService.getData).mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            resolve({
              data: {
                events: [],
                game_settings: {},
                phases: [],
                teams: [],
                elements: [player1, player2, player3],
                total_players: 10,
                element_stats: [],
                element_types: [],
              },
            })
          )
      );

      const result = await playersByProp({
        prop: "bps",
        amount: 2,
      });

      expect(fplService.getData).toHaveBeenCalled();
      expect(result).toEqual({ players: [player1, player3] });
    });
  });

  describe("playersSearch", () => {
    it("should call service for getData and filter data based on search term", async () => {
      jest.mocked(fplService.getData).mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            resolve({
              data: {
                events: [],
                game_settings: {},
                phases: [],
                teams: [],
                elements: [player1, player2, player3],
                total_players: 10,
                element_stats: [],
                element_types: [],
              },
            })
          )
      );

      const result = await playersSearch({
        term: "Rob",
        amount: 5,
      });

      expect(fplService.getData).toHaveBeenCalled();
      expect(result).toEqual({ players: [player2] });
    });
  });

  describe("playersByPropAndPos", () => {
    it("should call service for getData and return data for property and position passed in", async () => {
      jest.mocked(fplService.getData).mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            resolve({
              data: {
                events: [],
                game_settings: {},
                phases: [],
                teams: [],
                elements: [player1, player2, player3],
                total_players: 10,
                element_stats: [],
                element_types: [],
              },
            })
          )
      );
      const result = await playersByPropAndPos({
        prop: "bps",
        position: "defender",
      });

      expect(fplService.getData).toHaveBeenCalled();
      expect(result).toEqual({ players: [player3, player2] });
    });
  });

  describe("team", () => {
    it("should call service for getData and return team data", async () => {
      jest.mocked(fplService.getData).mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            resolve({
              data: {
                events: [],
                game_settings: {},
                phases: [],
                teams: [team1, team2],
                elements: [],
                total_players: 10,
                element_stats: [],
                element_types: [],
              },
            })
          )
      );
      const result = await team({ id: 1 });

      expect(fplService.getData).toHaveBeenCalled();
      expect(result).toEqual(team1);
    });
  });

  describe("allTeams", () => {
    it("should call service for eventStatus and return data", async () => {
      jest.mocked(fplService.getData).mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            resolve({
              data: {
                events: [],
                game_settings: {},
                phases: [],
                teams: [team1, team2],
                elements: [],
                total_players: 10,
                element_stats: [],
                element_types: [],
              },
            })
          )
      );
      const result = await allTeams();

      expect(fplService.getData).toHaveBeenCalled();
      expect(result).toEqual({ teams: [team1, team2] });
    });
  });

  describe("fixtures", () => {
    it("should call service for getFixturesForGameweek and return fixture data", async () => {
      jest.mocked(fplService.getFixturesForGameweek).mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            resolve({
              data: [fixture1, fixture2],
            })
          )
      );
      const result = await fixtures({ id: 1 });

      expect(fplService.getFixturesForGameweek).toHaveBeenCalled();
      expect(result).toEqual({ fixtures: [fixture1, fixture2], id: 1 });
    });
  });

  describe("getTeamsFixtures", () => {
    it("should call service for getFixtures and return data form team", async () => {
      jest.mocked(fplService.getFixtures).mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            resolve({
              data: [fixture1, fixture2, fixture3, fixture4],
            })
          )
      );
      const result = await getTeamsFixtures({ id: 19, amount: 2 });

      expect(fplService.getFixtures).toHaveBeenCalled();
      expect(result).toEqual({ fixtures: [fixture2, fixture3], id: 19 });
    });
  });

  describe("getAllTeamsFixtures", () => {
    it("should call service for getFixtures and return fixture data sorted by team", async () => {
      jest.mocked(fplService.getFixtures).mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            resolve({
              data: [fixture1, fixture2, fixture3, fixture4],
            })
          )
      );
      jest.mocked(fplService.getData).mockImplementationOnce(
        () =>
          new Promise((resolve) =>
            resolve({
              data: {
                events: [],
                game_settings: {},
                phases: [],
                teams: [team1, team2],
                elements: [],
                total_players: 10,
                element_stats: [],
                element_types: [],
              },
            })
          )
      );

      const result = await getAllTeamsFixtures();

      expect(fplService.getFixtures).toHaveBeenCalled();
      expect(result).toEqual({ fixtures: [[fixture1, fixture4], [fixture3]] });
    });
  });
});
