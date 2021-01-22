import { APIGatewayProxyEvent } from 'aws-lambda';
import { response as Iresponse } from '../interfaces/response.interface';
import { HTTP_CODES } from '../interfaces/httpCodes.enum'

export class response implements Iresponse {
    
    public statusCode: number = HTTP_CODES.OK;
    public body: Array<any> | Object | string = '';
    public error: Boolean = false;
    public request?: APIGatewayProxyEvent | undefined;

    constructor(
        body?: Array<any> | Object | string,
        statusCode?: number,
        error?: Boolean
    ) {

        if(statusCode != undefined || statusCode != null) {
            this.statusCode = statusCode
        }

        if(error != undefined || error != null) {
            this.error = error;
        }

        if(body != undefined) {
            this.body = body;
        }
    }

    static data(data: any): Iresponse {
        return new response(data)
    }

    static saved(
        ex: any,
        statusCode?: number
    ): Iresponse {

        let code =  HTTP_CODES.CREATED

        if(statusCode != undefined) {
            code = statusCode
        }

        return new response(ex, code);

    }

    static catch(
        ex: any,
        statusCode?: number
    ): Iresponse {

        let code =  HTTP_CODES.BAD_REQUEST

        if(statusCode != undefined) {
            code = statusCode
        }

        return new response(ex, code, true);

    }

}