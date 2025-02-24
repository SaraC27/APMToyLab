import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { getBody, getResponse } from '../../helpers/lambda.helper';
import { getToken } from '../../helpers/token.helper';
import { Info } from '../../entities/Historico';
import { RealTime } from '../../entities/RealTime';

export const handler: APIGatewayProxyHandler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>
    new Promise(async (resolve) => {
        const token = await getToken(event)

        if (!token.valid) {
            resolve(getResponse({
                statusCode: 401,
                message: token.error
            }))
            return
        }

        RealTime.getDB()
            .then(info => new Info(info).saveDynamo())
            .then(r => resolve(getResponse({ statusCode: 200 })))
            .catch(e => resolve(getResponse({ e })))
    })
