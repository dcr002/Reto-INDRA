import { APIGatewayEvent } from 'aws-lambda'

export interface response {
    statusCode: number;
    body: Array<any> | Object | string;
    error: Boolean;
    request?: APIGatewayEvent;
}