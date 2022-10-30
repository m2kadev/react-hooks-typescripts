import React, { useRef } from "react"

const UseRefComponent = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    
    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}

export default UseRefComponent