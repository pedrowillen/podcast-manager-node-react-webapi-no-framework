import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";


const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoriesPodcast = async (podcastName?: string):Promise<PodcastModel[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawData);

    if(podcastName) {
        jsonFile = jsonFile.filter((podcast: PodcastModel) => {
            return podcast.podcastName === podcastName;
        });
    }

    return jsonFile;
}