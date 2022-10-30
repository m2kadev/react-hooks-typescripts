import React, { useState } from 'react'

const UseStateComponent: React.FC = () => {
    const [arr, setArr] = useState<number[]>([])
    const [name, setName] = useState<string | null>(null)

    return (
        <div>
            <div>
                <button onClick={() => setArr([...arr, arr.length + 1])}>Add to array</button>
                {JSON.stringify(arr)}
                <button onClick={() => setName('Myat')}>Set Name</button>
                {JSON.stringify(name)}
            </div>
        </div>
    )
}

export default UseStateComponent