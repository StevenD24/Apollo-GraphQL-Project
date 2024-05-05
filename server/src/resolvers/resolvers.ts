import { Resolvers } from "../types";

export const resolvers: Resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client.
    tracksForHome: (_: any, __: any, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    // get a single track by ID, for the track page
    track: (_: any, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },

  Mutation: {
    incrementTrackViews: async (_: any, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);

        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track: track,
        }
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null
        }
      }
    }
  },

  // resolvers object called Track, indicating that it's for the Track
  // object in our schema.
  Track: {
    // author is the attribute our resolver will populate in our schema
    author: ({ authorId }, _: any, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _: any, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

// resolver functions have specifc signatures with four params:
// parent, args, contextValue, info
// use underscores for unused parameters

// As best practice we keep resolvers and data sources as thin
// as possible to make APIs resilient to future changes.
