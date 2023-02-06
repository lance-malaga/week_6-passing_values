import { useState } from "react"
// pages
import Start from "./Start"

export default function Survey () {

    const [name, setName] = useState("");
    const [isActiveOne, setIsActiveOne] = useState(true);
    const [isActiveTwo, setIsActiveTwo] = useState(false);

    const passName = (event) => {
        if (event.key == "Enter") {
            console.log("Enter")
            setIsActiveOne(false);
            setIsActiveTwo(true);
        }
    }

    return (
        <div>
            <div style={{display: isActiveOne ? 'block' : 'none'}}>
                <h1>What is you name?</h1>
                <input
                    value={name}
                    onChange={event => setName(event.target.value)}
                    onKeyDown={passName}
                    placeholder='Enter name'
                    type='text'
                />
            </div>
            <div style={{display: isActiveTwo ? 'block' : 'none' }}>
                <Start passName={name} />
            </div>
        </div>
    )
}