import { DocumentClient } from 'aws-sdk/clients/dynamodb';
const AWS = require('aws-sdk');

const STAGE = process.env.STAGE;

AWS.config.update({
  region: process.env.AWS_REGION,
  endpoint: "https://dynamodb.us-east-1.amazonaws.com"
  //endpoint: "http://localhost:8000"
});

export const dynamodb = new AWS.DynamoDB.DocumentClient();
