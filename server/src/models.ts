// define track model to match actual db schema
export type TrackModel = {
  id: string;
  title: string;
  authorId: string;
  thumbnail: string;
  length: number;
  modulesCount: number;
};

// define author model to match actual db schema
export type AuthorModel = {
  id: string;
  name: string;
  photo: string;
};
