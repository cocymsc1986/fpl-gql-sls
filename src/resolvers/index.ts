import { service as fplService } from "../datasources";
import {
  AllTeams,
  EventStatus,
  Fixtures,
  GetAllTeamsFixtures,
  GetTeamsFixtures,
  Player,
  PlayersByProp,
  PlayersByPropAndPos,
  PlayersByTeam,
  PlayersSearch,
  PlayerWithHighestProp,
  PlayerWithLowestProp,
  Team,
} from "../../resolvers";

export const eventStatus = async (): Promise<EventStatus> => {
  console.info(`Getting data for eventStatus`);

  try {
    const { data } = await fplService.getEventStatus();

    console.info(`Got data for eventStatus`);

    return data;
  } catch (err) {
    console.error("Error getting event status: ", err);
  }
};

export const player = async ({ id }: { id: number }): Promise<Player> => {
  console.info(`Getting data for player: ${id}`);

  try {
    const {
      data: { elements },
    } = await fplService.getData();
    const player = elements.find((el) => el.id == id);

    console.info(`Got data for player: ${id}`);

    return player;
  } catch (err) {
    console.error("Error getting player data: ", err);
  }
};

export const playersByTeam = async ({
  team,
}: {
  team: number;
}): Promise<PlayersByTeam> => {
  console.info(`Getting data for playersByTeam: ${team}`);

  try {
    const {
      data: { elements },
    } = await fplService.getData();
    const players = elements.filter((player) => player.team === team);

    console.info(`Got data for playersByTeam: ${team}`);

    return { players };
  } catch (err) {
    console.error("Error getting player data: ", err);
  }
};

export const playerWithHighestProp = async ({
  prop,
}: {
  prop: keyof Player;
}): Promise<PlayerWithHighestProp> => {
  console.info(`Getting data for playerWithHighestProp: ${prop}`);

  try {
    const {
      data: { elements },
    } = await fplService.getData();
    const player = elements.reduce((a, b) => {
      if (typeof a[prop] !== "number") {
        return parseFloat(a[prop]) > parseFloat(b[prop]) ? a : b;
      }
      return a[prop] > b[prop] ? a : b;
    });

    console.info(`Got data for playerWithHighestProp: ${prop}`);

    return { player };
  } catch (err) {
    console.error("Error getting player data: ", err);
  }
};

export const playerWithLowestProp = async ({
  prop,
}: {
  prop: keyof Player;
}): Promise<PlayerWithLowestProp> => {
  console.info(`Getting data for playerWithLowestProp: ${prop}`);

  try {
    const {
      data: { elements },
    } = await fplService.getData();
    const player = elements.reduce((a, b) => (a[prop] < b[prop] ? a : b));

    console.info(`Got data for playerWithLowestProp: ${prop}`);

    return { player };
  } catch (err) {
    console.error("Error getting player data: ", err);
  }
};

export const playersByProp = async ({
  prop,
  amount,
  reverseOrder = false,
}: {
  prop: keyof Player;
  amount: number;
  reverseOrder?: boolean;
}): Promise<PlayersByProp> => {
  console.info(`Getting data for playerByProp: ${prop}`);

  try {
    const {
      data: { elements },
    } = await fplService.getData();
    const players = elements
      .sort((a, b) => (reverseOrder ? a[prop] - b[prop] : b[prop] - a[prop]))
      .slice(0, amount);

    console.info(`Got data for playerByProp: ${prop}`);

    return { players };
  } catch (err) {
    console.error("Error getting player data: ", err);
  }
};

export const playersSearch = async ({
  term,
  amount = 8,
}: {
  term: string;
  amount: number;
}): Promise<PlayersSearch> => {
  console.info(`Getting data player search: ${term}`);

  try {
    const {
      data: { elements },
    } = await fplService.getData();

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
};

export const playersByPropAndPos = async ({
  prop,
  position,
  amount = 10,
  reverseOrder = false,
}: {
  prop: keyof Player;
  position: string;
  amount?: number;
  reverseOrder?: boolean;
}): Promise<PlayersByPropAndPos> => {
  console.info(
    `Getting data for playersByPropAndPos: prop - ${prop}, position - ${position}`
  );

  try {
    const {
      data: { elements },
    } = await fplService.getData();

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
};

export const team = async ({ id }: { id: number }): Promise<Team> => {
  console.info(`Getting data for team id: ${id}`);

  try {
    const {
      data: { teams },
    } = await fplService.getData();

    const team = teams.find((el) => el.id == id);

    console.info(`Got data for team id: ${id}`);

    return team;
  } catch (err) {
    console.error("Error getting team data: ", err);
  }
};

export const allTeams = async (): Promise<AllTeams> => {
  console.info("Getting data for all teams");

  try {
    const {
      data: { teams },
    } = await fplService.getData();

    console.info("Got data for all teams");

    return { teams };
  } catch (err) {
    console.error("Error getting team data: ", err);
  }
};

export const fixtures = async ({ id }: { id?: number }): Promise<Fixtures> => {
  console.info(`Getting data for fixtures: ${id}`);

  try {
    const gw = id ? id : 1;

    const { data: fixtures } = await fplService.getFixturesForGameweek(gw);

    console.info(`Got data for fixtures: ${id}`);

    return { fixtures, id: gw };
  } catch (err) {
    console.error("Error getting fixture data: ", err);
  }
};

export const getTeamsFixtures = async ({
  id,
  amount,
}: {
  id: number;
  amount: number;
}): Promise<GetTeamsFixtures> => {
  console.info(`Getting data for team fixtures: ${id}`);

  try {
    const { data: fixtureData } = await fplService.getFixtures();
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
};

export const getAllTeamsFixtures = async (): Promise<GetAllTeamsFixtures> => {
  console.info(`Getting data for getAllTeamsFixtures`);

  try {
    const { data: fixtureData } = await fplService.getFixtures();
    const fixtures = fixtureData.filter((week) => week.started === false);

    const {
      data: { teams },
    } = await fplService.getData();
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
};

export const resolvers = {
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
};
