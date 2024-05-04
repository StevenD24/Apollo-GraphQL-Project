import { TrackAPI } from "./datasources/track-api";

// define type for dataSources
export type DataSourceContext = {
  dataSources: {
    trackAPI: TrackAPI;
  };
};