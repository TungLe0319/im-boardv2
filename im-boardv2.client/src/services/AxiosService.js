import Axios from "axios";
import { baseURL } from "../env";
export const api = Axios.create({
  baseURL,
  timeout: 8000,
});

export const atlasApi = Axios.create({
  baseURL: "https://api.boardgameatlas.com",
  timeout: 8000,
});
