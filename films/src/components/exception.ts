import { HTTP_CODES } from '../interfaces/httpCodes.enum';

export class exception extends Error{
    
    public statusCode: number = HTTP_CODES.BAD_REQUEST;

    constructor(message: any, statusCode: number){
        super();
    }
}