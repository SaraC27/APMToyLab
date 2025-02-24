import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { getBody, getResponse } from '../../helpers/lambda.helper';
import { getToken } from '../../helpers/token.helper';
import { RealTime } from '../../entities/RealTime';

export const handler: APIGatewayProxyHandler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>
    new Promise(async (resolve) => {
        const token = await getToken(event)
        const body = getBody(event)

        if (!token.valid || token.email !== 'jbarreraro@unal.edu.co') {
            resolve(getResponse({
                statusCode: 401,
                message: token.error
            }))
            return
        }

        new RealTime(body)
            .updateDB()
            .then(r => resolve(getResponse({ statusCode: 200 })))
            .catch(e => resolve(getResponse({ e })))
    })
