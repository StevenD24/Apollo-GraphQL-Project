import { RESTDataSource } from "@apollo/datasource-rest";

export class TrackAPI extends RESTDataSource {
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

    getTracksForHome() {
        // make a get req. to the tracks endpoint
        return this.get('tracks');
    }

    getAuthor(authorId: string) {
        return this.get(`author/${authorId}`);
    }
}