import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoriesPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const ListServiceEpisodes = async () => {
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    };

    const data = await repositoriesPodcast();

    if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NoContent;
    }

    responseFormat.body = data;

    return responseFormat;
}