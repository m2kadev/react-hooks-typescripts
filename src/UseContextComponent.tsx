import React, { useContext, useState } from "react"
import UserContext, { UserState } from "./store"

const ConsumerComponent = () => {
    const user = useContext<UserState>(UserContext)
    return (
        <div>
            <div>First: {user.first}</div>
            <div>Last: {user.last}</div>
        </div>
    )
}

const UseContextComponent = () => {

    const [user, setUser] = useState<UserState>({
        first: 'Romeo',
        last: 'Juliet'
    })

    return (
        <UserContext.Provider value={user}>
            <ConsumerComponent />
        </UserContext.Provider>
    )
}

export default UseContextComponent