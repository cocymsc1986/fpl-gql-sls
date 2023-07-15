const { fpl } = require("../datasources");

const { service } = fpl;

module.exports.resolvers = {
  eventStatus: async () => {
    console.info(`Getting data for eventStatus`);

    try {
      const { data } = await service.getEventStatus();

      console.info(`Got data for eventStatus`);

      return data;
    } catch (err) {
      console.error("Error getting event status: ", err);
    }
  },

  player: async ({ id }) => {
    console.info(`Getting data for player: ${id}`);

    try {
      const {
        data: { elements },
      } = await service.getData();
      const player = elements.find((el) => el.id == id);

      console.info(`Got data for player: ${id}`, player);

      console.info(`All data`, elements);

      return player;
    } catch (err) {
      console.error("Error getting player data: ", err);
    }
  },

  playersByTeam: async ({ team }) => {
    console.info(`Getting data for playersByTeam: ${team}`);

    try {
      const {
        data: { elements },
      } = await service.getData();
      const players = elements.filter((player) => player.team === team);

      console.info(`Got data for playersByTeam: ${team}`);

      return { players };
    } catch (err) {
      console.error("Error getting player data: ", err);
    }
  },

  playerWithHighestProp: async ({ prop }) => {
    console.info(`Getting data for playerWithHighestProp: ${prop}`);

    try {
      const {
        data: { elements },
      } = await service.getData();
      const player = elements.reduce((a, b) => {
        if (typeof a[prop] !== Number) {
          return parseFloat(a[prop]) > parseFloat(b[prop]) ? a : b;
        }
        return a[prop] > b[prop] ? a : b;
      });

      console.info(`Got data for playerWithHighestProp: ${prop}`);

      return { player };
    } catch (err) {
      console.error("Error getting player data: ", err);
    }
  },

  playerWithLowestProp: async ({ prop }) => {
    console.info(`Getting data for playerWithLowestProp: ${prop}`);

    try {
      const {
        data: { elements },
      } = await service.getData();
      const player = elements.reduce((a, b) => (a[prop] < b[prop] ? a : b));

      console.info(`Got data for playerWithLowestProp: ${prop}`);

      return { player };
    } catch (err) {
      console.error("Error getting player data: ", err);
    }
  },

  playersByProp: async ({ prop, amount, reverseOrder = false }) => {
    console.info(`Getting data for playerByProp: ${prop}`);

    try {
      const {
        data: { elements },
      } = await service.getData();
      const players = elements
        .sort((a, b) => (reverseOrder ? a[prop] - b[prop] : b[prop] - a[prop]))
        .slice(0, amount);

      console.info(`Got data for playerByProp: ${prop}`);

      return { players };
    } catch (err) {
      console.error("Error getting player data: ", err);
    }
  },

  playersSearch: async ({ term, amount = 8 }) => {
    console.info(`Getting data player search: ${term}`);

    try {
      const {
        data: { elements },
      } = await service.getData();

      const players = elements
        .filter(({ first_name, second_name }) => {
          const fullName = `${first_name} ${second_name}`;
          return fullName.toLowerCase().includes(term.toLowerCase());
        })
        .slice(0, amount);

      console.info(`Got search data for term: ${term}`);

      return { players };
    } catch (err) {
      console.error("Error getting player data: ", err);
    }
  },

  playersByPropAndPos: async ({
    prop,
    position,
    amount,
    reverseOrder = false,
  }) => {
    console.info(
      `Getting data for playersByPropAndPos: prop - ${prop}, position - ${position}`
    );

    try {
      const {
        data: { elements },
      } = await service.getData();

      const positionMap = {
        goalkeeper: 1,
        defender: 2,
        midfielder: 3,
        forward: 4,
      };

      const players = elements
        .filter((player) => player.element_type === positionMap[position])
        .sort((a, b) => (reverseOrder ? a[prop] - b[prop] : b[prop] - a[prop]))
        .slice(0, amount);

      console.info(
        `Got data for playersByPropAndPos: prop - ${prop}, position - ${position}`
      );

      return { players };
    } catch (err) {
      console.error("Error getting player data: ", err);
    }
  },

  team: async ({ id }) => {
    console.info(`Getting data for team id: ${id}`);

    try {
      const {
        data: { teams },
      } = await service.getData();

      const team = teams.find((el) => el.id == id);

      console.info(`Got data for team id: ${id}`);
      console.info("team: ", team);

      return team;
    } catch (err) {
      console.error("Error getting team data: ", err);
    }
  },

  allTeams: async () => {
    console.info("Getting data for all teams");

    try {
      const {
        data: { teams },
      } = await service.getData();

      console.info("Got data for all teams");

      return { teams };
    } catch (err) {
      console.error("Error getting team data: ", err);
    }
  },

  fixtures: async ({ id }) => {
    console.info(`Getting data for fixtures: ${id}`);

    try {
      const gw = id ? id : 1;

      const { data: fixtures } = await service.getFixturesForGameweek(gw);

      console.info(`Got data for fixtures: ${id}`);

      return { fixtures, id: gw };
    } catch (err) {
      console.error("Error getting fixture data: ", err);
    }
  },

  getTeamsFixtures: async ({ id, amount }) => {
    console.info(`Getting data for team fixtures: ${id}`);

    try {
      const { data: fixtureData } = await service.getFixtures();
      const fixtures = fixtureData
        .filter(
          (week) =>
            week.started === false && (week.team_a === id || week.team_h === id)
        )
        .slice(0, amount);

      console.info(`Got data for team fixtures: ${id}`);

      return { fixtures, id };
    } catch (err) {
      console.error("Error getting teams fixtures: ", err);
    }
  },

  getAllTeamsFixtures: async () => {
    console.info(`Getting data for getAllTeamsFixtures`);

    try {
      const { data: fixtureData } = await service.getFixtures();
      const fixtures = fixtureData.filter((week) => week.started === false);

      const {
        data: { teams },
      } = await service.getData();
      const teamSortedFixtures = teams.map((team) =>
        fixtures.filter(
          (fixture) => fixture.team_h === team.id || fixture.team_a === team.id
        )
      );

      console.info(`Got data for getAllTeamsFixtures`);

      return { fixtures: teamSortedFixtures };
    } catch (err) {
      console.error("Error getting teams fixtures: ", err);
    }
  },
};
