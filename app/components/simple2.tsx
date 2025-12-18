import type { ComponentProps } from "../interfaces/ComProps";

export default function SimpleComponent2({name, data}: ComponentProps) {
    return (
        <div>
            <h1>
                Simple Component 2 received {name} <br/>
                Object received {data?.weight}
            </h1>
        </div>
    )
}