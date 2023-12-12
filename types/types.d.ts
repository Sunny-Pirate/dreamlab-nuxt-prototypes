type IUser = {
    id: string
    role: "user" | "kitter" | "simdriver" | "manager " | "admin"
}

type IAuthSession = {
    token?: string
    user?: IUser
    errors?: Record<number, string>
}
