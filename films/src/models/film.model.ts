import { model } from './model';

const SCHEMA = {
    title: "Título",
    episode_id: "Episodio",
    director: "Director",
    producer: "Productor",
    release_date: "Estreno",
    characters: "Actores"
};

export class filmModel extends model{

    constructor(){
        super();

        this.schema = SCHEMA;
    }
}