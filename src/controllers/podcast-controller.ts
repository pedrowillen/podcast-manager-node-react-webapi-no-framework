import { IncomingMessage, ServerResponse } from "http";
import { ListServiceEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { StatusCode } from "../utils/status-code";

export const getListEpisodes = async (
    require: IncomingMessage,
    response: ServerResponse
) => {

    const content = await ListServiceEpisodes();

    response.writeHead(StatusCode.OK, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(content));
}

export const getFilterEpisodes = async (
    require: IncomingMessage,
    response: ServerResponse
) => {

    const content = await serviceFilterEpisodes(require.url);

    response.writeHead(content.statusCode, { "Content-Type": "application/json" });
    response.end(JSON.stringify(content));

}