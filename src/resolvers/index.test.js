const { resolvers } = require("./");
const fplDataSource = require("../datasources/fpl");

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
      fplDataSource.service.getEventStatus.mockImplementationOnce(() => ({
        data: [
          {
            id: "1",
            status: "active",
          },
        ],
      }));
      const result = await resolvers.eventStatus();

      expect(fplDataSource.service.getEventStatus).toHaveBeenCalled();
      expect(result).toEqual([{ id: "1", status: "active" }]);
    });
  });
});
