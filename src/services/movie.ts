import * as api from "../utils/axios";
import * as endpoints from "./endpoints";

export const getMoviesBySearch = (query: string) =>
  api.sendGet(endpoints.MOVIE_URL.replace("{query}", query), {
    headers: { "Content-Type": "application/json", accept: "application/json" }
  });


  export const detailMovie = (query: string) =>
  api.sendGet(endpoints.MOVIE_URL.replace("{query}", query), {
    headers: { "Content-Type": "application/json", accept: "application/json" }
  });