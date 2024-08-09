import { ArrowUp } from "lucide-react";
import { useState } from "react";

interface MessageProps {
    text: String 
    amountOfRaections: number
    awnsered?: boolean
}

export function Message({text, amountOfRaections, awnsered = false} : MessageProps) {

    const [hasReacted, setHasreacted] = useState(false)

    function handleReactToMessage() {
        setHasreacted(!hasReacted)
    }

    return (
        <li data-awnsered={awnsered} className="ml-4 leading-relaxed text-zinc-100 data-[awnsered=true]:opacity-50 data-[awnsered=true]:pointer-events-none ">
            {text}
            {
                hasReacted ? (<button onClick={handleReactToMessage} type="button" className="mt-3 flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-orange-500">
                    Curtir pergunta ({amountOfRaections})
                    <ArrowUp className="size-4" />
                </button>) : (
                    <button onClick={handleReactToMessage} type="button" className="mt-3 flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-zinc-300">
                        Curtir pergunta ({amountOfRaections})
                        <ArrowUp className="size-4" />
                    </button>
                )
            }


        </li>
    )
}