import { ReactNode } from "react"

type BtnProps = {
    childen: (string | Element)[];

}

export function DefaultButton(props: BtnProps) {
    return <button
        className='bg-orange-400 text-orange-950 px-3 py-1.5 flex gap-1.5 items-center rounded-lg font-medium text-sm hover:bg-orange-500 transition:colors'
        type='submit'>
        props.children
    </button>
}