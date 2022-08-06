import { Category, MovieType, TvType } from "../models/screenplay";

export const screenplayApiCalls = {
  getMovies: (type, params) => {
    const url = "movie/" + type;

    return { url, params };
  },

  getTvShows: (type, params) => {
    const url = "tv/" + type;

    return { url, params };
  },

  getDetails: (category, id, params) => {
    const url = category + "/" + id;

    return { url, params };
  },

  getSimilar: (category, type, id, params) => {
    const url = category + "/" + id + "/" + type;

    return { url, params };
  },

  getCredits: (category, id, params) => {
    const url = category + "/" + id + "/credits";

    return { url, params };
  },

  getImages: (category, id, params) => {
    const url = category + "/" + id + "/images";

    return { url, params };
  },

  getVideos: (category, id, params) => {
    const url = category + "/" + id + "/videos";

    return { url, params };
  },

  getSearch: (category, params) => {
    const url = "search/" + category;

    return { url, params };
  },

  getDiscover: (category, params) => {
    const url = "discover/" + category;

    return { url, params };
  },
};
