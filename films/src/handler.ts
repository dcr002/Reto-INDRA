import { APIGatewayProxyEvent } from "aws-lambda";
import { filmService } from './services';
import { filmRepository } from './repositories';

export const init = async (event: APIGatewayProxyEvent) => {

  let data;

  let response = {
    statusCode: 200,
    body: 'NotContent'
  };

  try {

    let data =  await filmRepository.findAll();

    response.body = JSON.stringify(data);

  } catch (error) {
    
    response.statusCode = 404;
    response.body = JSON.stringify(error.message)

    return response

  }

  return response;
}