import axios from "axios";

const baseURL = "https://www.themealdb.com/api/json/v1/1";

const headers = {
  "Content-Type": "application/json",
};

const mockApi = "https://680a3ec61f1a52874cdfc6f9.mockapi.io/henryeff/api";
const apiGateway =
  "https://usgedvmwe0.execute-api.ap-southeast-1.amazonaws.com";

const api = axios.create({ baseURL, headers });
const myRecipeApi = axios.create({ baseURL: apiGateway, headers });

export { api, myRecipeApi };
