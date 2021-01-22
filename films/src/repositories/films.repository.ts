import { dynamodb } from '../components'
import { film as Ifilm } from '../interfaces';
import { filmService } from '../services'
import { transform } from '../helpers/filter.helper'
import { FILM_SCHEMA } from '../schemas'

const ENV = process.env.STAGE;
const TABLE = `filmsTable-${ENV}`;

export class filmRepository {

    constructor() {}

    static async findAll() {

        let { Items, Count, ScannedCount } = await dynamodb.scan({TableName: TABLE}).promise();

        if(Count == 0) {
            Items = await filmService.findAll();

            await this.save(Items);

        }

        let trans = transform(FILM_SCHEMA);

        trans.filter(Items);

        trans.i18n();

        return trans.get();

    }

    static async save(films: Array<Ifilm> | Ifilm) {

        let waitFor = [];

        if(Array.isArray(films)){
            for(let film of films) {
                waitFor.push(
                    dynamodb.put(
                        {
                            TableName: TABLE,
                            Item: film
                        }
                    ).promise()   
                );
            }

            return Promise.all(waitFor);
        }

        return dynamodb.put(
            {
                TableName: TABLE,
                Item: films
            }
        ).promise();

    }

}