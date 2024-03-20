import type {Database} from '~~/types/database.types'
import {serverSupabaseClient} from '#supabase/server'
import {AuthError} from "@supabase/gotrue-js";

export default defineEventHandler(async (event) => {

    let _e: AuthError| undefined;

    const client = await serverSupabaseClient<Database>(event)
    const {error} = await client.auth.signOut();

    if (error){
        _e = error
    }

    return {error: _e}

})

