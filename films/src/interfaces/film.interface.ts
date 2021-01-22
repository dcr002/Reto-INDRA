import { people } from './people.interface';

export interface film {
    episode_id: number
    title: string,
    director: string,
    producer: string,
    release_date: Date,
    characters: Array<people>
}
