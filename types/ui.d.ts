import type {AsyncDataRequestStatus} from "#app/composables/asyncData";
import type {StrapiAuthenticationData, StrapiAuthenticationResponse, StrapiUser} from "@nuxtjs/strapi/dist/runtime/types";


declare global {
    interface IFormStatusWithData<T> {
        status?: AsyncDataRequestStatus
        error?: Error
        pending: boolean
        data?: T
    }

    type IMagicLinkPayload = {
        email: string
    };

    type IUser = StrapiUser

    type ISession = StrapiAuthenticationResponse & {
        jwt?: string
        user?: IUser | StrapiUser
    }

}
