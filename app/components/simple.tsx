import type { ComponentProps } from "../interfaces/ComProps";

export default function SimpleComponent1(props: ComponentProps) {
    return (
        <div>
            <h1>
                Simple Component 1 received {props?.name} shape {props?.shape}
            </h1>
        </div>
    )
}