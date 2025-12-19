import { useState } from "react";
import type { ComponentProps } from "../interfaces/ComProps";

export default function SimpleComponent2({name, data}: ComponentProps) {
     const [count, setCount] = useState<number>(0)

    return (
        <div>
            <h1>
                Simple Component 2 received {name} <br/>
                Object received {data?.weight}
            </h1>

              <h1> {count} </h1>
            <button onClick={ 
                ()=> setCount(count-1)
             }>
                Set Kiram
            </button>
            <br/>
               <button onClick={
                ()=> setCount(count+1)
               }
               >
                Set Mounika
            </button>


        </div>
    )
}