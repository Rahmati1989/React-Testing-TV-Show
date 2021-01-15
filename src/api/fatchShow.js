import axios from "axios";

export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things"
    )
    .then((response) => {
      return response.data;
    })
    
    .catch((error) => {
      return error;
    });
};