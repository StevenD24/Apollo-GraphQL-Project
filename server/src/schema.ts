import gql from "graphql-tag"

export const typeDefs = gql`
type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    track(id: ID!): Track
}

"A track is a group of Modules that teaches about a specific topic"
type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's main illustration to display on a card"
    thumbnail: String
    "the track's approximate length to complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
    "the track's complete description, can be in markdown format"
    description: String
    "the number of times a track has been viewed"
    numberOfViews: Int
    "the track's complete array of modules"
    modules: [Module!]!
}

type Module {
    id: ID!
    "the module's title"
    title: String!
    "the module's length in minutes"
    length: Int
}

"Author of a complete Track"
type Author {
    id: ID!
    "author's first and last name"
    name: String!
    "author's profile picture url"
    photo: String
}
`;