export const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client.
    tracksForHome: (_: any, __: any, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  // resolvers object called Track, indicating that it's for the Track
  // object in our schema.
  Track: {
    // author is the attribute our resolver will populate in our schema
    author: ({ authorId }, _: any, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

// resolver functions have specifc signatures with four params:
// parent, args, contextValue, info
// use underscores for unused parameters

// As best practice we keep resolvers and data sources as thin
// as possible to make APIs resilient to future changes.
