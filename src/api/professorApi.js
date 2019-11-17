import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/professors/";

export function getProfessors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
