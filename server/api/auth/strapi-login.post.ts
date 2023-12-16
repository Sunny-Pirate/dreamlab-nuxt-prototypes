import {useStrapiAuth} from "~/.nuxt/imports";

export default defineEventHandler(async (event) => {

    const {identifier, password} = await readBody<{ identifier: string, password: string }>(event);
    const {login} = useStrapiAuth()

    const authenticationResponse = await login({
        identifier, password
    });

    if (authenticationResponse) {
        return authenticationResponse;
    } else {
        // Creating an error indicating user not authorized
        throw createError({statusCode: 401, statusMessage: "User not authorized"});
    }

});
