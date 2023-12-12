import {randomUUID} from "node:crypto";

type LoginReqParams = {
    identifier: string
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const runtimeConfig = useRuntimeConfig()
    const identifier = body.identifier

    let _session: IAuthSession = {}

    if (identifier == runtimeConfig.public.adminId) {
        console.log(`Admin is logging in...`)
        _session.token = "5fe7670d-08e4-48fb-80cc-80935d3d5008"
        _session.user = {id: "aa926827-71e0-49e4-b767-e8c721eebf96", role: "admin"}

        return _session
    } else if (identifier.endsWith("@sunnyday.software")) {
        console.log(`User is trying to access with identifier: ${identifier}`)
        _session.token = randomUUID();
        _session.user = {
            id: randomUUID(),
            role: "user"
        }
        return _session
    } else {
        console.log(`User with identifier: ${identifier} is NOT authorized.`)
        throw createError({
            statusCode: 401,
            statusMessage: 'Not Authorized'
        })
    }

})
