
import { repositoriesPodcast } from "../repositories/podcasts-repository"
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined) => {

    //define a interface de retorno
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    };

    //busca os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoriesPodcast(queryString);

    //verifica conteudo
    if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NoContent;
    }

    responseFormat.body = data;

    return responseFormat;
}