// define track model to match actual db schema
export type TrackModel = {
  id: string;
  title: string;
  authorId: string;
  thumbnail: string;
  length: number;
  modulesCount: number;
  description: string;
  numberOfViews: number;
};

// define author model to match actual db schema
export type AuthorModel = {
  id: string;
  name: string;
  photo: string;
};

// define the module model to match the db schema
export type ModuleModel = {
    id: string;
    title: string;
    length: number;
}
