import { Handler } from "aws-lambda";
import { resolvers } from "./resolvers";

export const graphql: Handler = async (event) => {
  try {
    console.info(`Getting data for field ${event.field}`);
    const data = resolvers[event.field](event.arguments);

    return data;
  } catch (e) {
    console.error("Error getting data", e);
    throw new Error(e);
  }
};
