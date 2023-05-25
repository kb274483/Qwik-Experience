import { Slot, component$ } from '@builder.io/qwik';

export interface PropsData {
    msg : string
    color : string
}

export const ShowText = component$((prop : PropsData)=>{
    return <div class={'text-4xl text-amber-300 font-bold'}>
        <Slot />
        <span class={prop.color}>
            {prop.msg}
        </span>
    </div>
})