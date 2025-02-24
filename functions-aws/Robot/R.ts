import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { getResponse } from '../../helpers/lambda.helper';
import { getToken } from '../../helpers/token.helper';
import { RealTime } from '../../entities/RealTime';

export const handler: APIGatewayProxyHandler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>
    new Promise(async (resolve) => {
        const token = await getToken(event)

        if (!token.valid || token.email !== 'mcarranza@unal.edu.co') {
            resolve(getResponse({
                statusCode: 401,
                message: token.error
            }))
            return
        }

        RealTime
            .getDB()
            .then(r => resolve(getResponse({ statusCode: 200, body: r })))
            .catch(e => resolve(getResponse({ e })))
    })
