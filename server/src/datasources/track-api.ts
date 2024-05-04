import { RESTDataSource } from "@apollo/datasource-rest";
import { TrackModel, AuthorModel } from "../models";

export class TrackAPI extends RESTDataSource {
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

    getTracksForHome() {
        // make a get req. to the tracks endpoint
        return this.get<TrackModel[]>('tracks');
    }

    getAuthor(authorId: string) {
        return this.get<AuthorModel>(`author/${authorId}`);
    }
}