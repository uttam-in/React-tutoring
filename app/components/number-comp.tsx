import { useState } from "react";
import type { ComponentProps } from "../interfaces/ComProps";

export default function NumberComponent(props: ComponentProps) {


    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>
                Simple Component 1 received {props?.name} shape {props?.shape}
            </h1>
            <h1> {count} </h1>
            <button onClick={ 
                ()=> setCount(count + 1) // count value + 1 -> count
             }>
                Increment
            </button>
            <br/>
               <button onClick={
                ()=> setCount(count - 1) // count value - 1 -> count
               }
               >
                Decrement
            </button>
        </div>
    )
}