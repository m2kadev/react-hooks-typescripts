import React, { useState, useEffect } from "react"

export interface Beverage {
    name: string
    producerName: string
    beverageName: string
    beverageColor: string
    beverageStyle: string
    producerLocation: string
    abv: number
    ibu: number
    logo: string
    level: number
}

function useFetchData<Payload> (url: string): {
    data: Payload | null
    done: boolean
} {
    const [data, setData] = useState<Payload | null>(null)
    const [done, setDone] = useState(false)


    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then((d: Payload) => setData(d))
        .finally(() => setDone(true))
    }, [url])


    return { data, done }
}

const CustomHookComponent = () => {
    const { data, done } = useFetchData<Beverage[]>('/hv-taplist.json')

    return (
        <div>
            { done && <img
                alt="Beverage"
                src={data![0].logo}
            />}
        </div>
    )
}

export default CustomHookComponent