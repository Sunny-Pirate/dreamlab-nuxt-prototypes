import {useStrapiUrl} from "~/.nuxt/imports";

export default defineEventHandler(async (event) => {

    const {identifier, password} = await readBody<{ identifier: string, password: string }>(event);
    return {
        id: "1c0b5672-ef80-4253-a3a2-7fe741aa90e4"
    }
})
