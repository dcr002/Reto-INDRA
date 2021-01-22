import { http } from '../components';
import { transform } from '../helpers/filter.helper'
import { filmModel } from '../models'

const PATH = '/films';

export class filmService {

    constructor() {}

    static async findAll() {
        let response = await http.get(PATH);

        if(!response.data) {
            return [];
        }

        return response.data.results;
    }
}