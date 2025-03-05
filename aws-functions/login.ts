import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { getBody, getResponse } from '../helpers/lambda.helper';
import { signInUser } from '../helpers/cognito.helper';

export const handler: APIGatewayProxyHandler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>
    new Promise(async (resolve) => {
        const { email, password } = getBody(event)
        if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
            resolve(getResponse({
                statusCode: 400,
                message: 'Ingrese email y contraseña',
            }))
            return;
        }

        signInUser(email, password)
            .then(r => resolve(getResponse({
                statusCode: 200,
                body: r.idToken,
            })))
            .catch(e => resolve(getResponse({ e })))
    })
