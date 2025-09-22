import { LoginPayload } from "../auth/dtos/loginPayload.dto";

export function stringAuthorizationToLoginPayload(authorization: string): LoginPayload | undefined {
    const authorizationSplited = authorization.split('.')[1];

    if (authorizationSplited.length < 3 || !authorizationSplited[1]) {
       return undefined;
    }

    return JSON.parse(Buffer.from(authorizationSplited, 'base64').toString()) as LoginPayload;
}