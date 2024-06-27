import * as http from "http";
import { getListEpisodes, getFilterEpisodes } from "./controllers/podcast-controller"; 
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    //queryString
    //http://localhost:3333/api/episode?p=flow
    const [baseUrl, queryString] = request.url?.split('?') ?? ['', ''];

    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }
}