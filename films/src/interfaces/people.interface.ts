import { film } from './film.interface';

export interface people {
    name: string,
    gender: string,
    eye_color: string,
    birth_year: string,
    films: Array<film>
}