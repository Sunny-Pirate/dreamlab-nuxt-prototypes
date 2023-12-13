import type {AsyncDataRequestStatus} from "#app/composables/asyncData";

declare global {
    interface IFormStatus<T> {
        status?: AsyncDataRequestStatus
        error?: Error
        pending: boolean
        data?: T
    }

    type IMagicLinkPayload = {
        email: string
    };

    interface IUser {
        id: string
        fullName: string
        role: "user" | "kitter" | "simdriver" | "manager " | "admin"
    }

    interface IAuthSession {
        token?: string
        user?: IUser
    }
}
