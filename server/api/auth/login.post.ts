import {randomUUID} from "node:crypto";

type LoginReqParams = {
    identifier: string
}

const createSession = (user: IUser, event: any) => {
    const sessionToken = randomUUID();
    setCookie(event, "token", sessionToken, {
        httpOnly: true,
        maxAge: 86400,
        sameSite: "strict",
    })
    console.debug("Session token: ", sessionToken)
    return {
        token: sessionToken,
        user: user,
    };
}

const isAdminUser = (identifier: string, adminId: string) => {
    return identifier == adminId;
}

const isDomainUser = (identifier: string, domain: string) => {
    return identifier.endsWith(domain);
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const runtimeConfig = useRuntimeConfig()
    const identifier = body.identifier
    const domain = "@sunnyday.software";

    console.log('Admin ID: ', runtimeConfig.adminId)

    if (isAdminUser(identifier, runtimeConfig.adminId)) {
        const user: IUser = {id: "aa926827-71e0-49e4-b767-e8c721eebf96", role: "admin", fullName: "Super@Administrator"}
        return createSession(user, event);
    } else if (isDomainUser(identifier, domain)) {
        console.log(`User is trying to access with identifier: ${identifier}`)
        const user: IUser = {
            id: randomUUID(),
            fullName: identifier,
            role: "user"
        }
        console.log("login.post.ts domainUserId: ", user.id)
        return createSession(user, event);
    } else {
        console.log(`User with identifier: ${identifier} is NOT authorized.`)
        throw createError({
            statusCode: 401,
            statusMessage: 'Not Authorized'
        })
    }
})
