import { createContext } from "react"

const initialState = {
    first: "myat",
    last: "ko"
}

export type UserState = typeof initialState

const UserContext = createContext<typeof initialState>(initialState)

export default UserContext