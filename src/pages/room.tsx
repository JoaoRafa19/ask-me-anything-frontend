import { useParams } from "react-router-dom"
import amaLogo from '../assets/ama-logo.svg'
import { ArrowRight, Share2 } from "lucide-react"
import { toast } from "sonner"
import { Message } from "../components/message"

export function Room() {
    const { room_id } = useParams()

    function handleShareRoom() {
        const url = window.location.href.toString()

        if(navigator.share != undefined && navigator.canShare()){
            navigator.share({url})
        }else{
            navigator.clipboard.writeText(url)
            toast.info('LINK na área de transferência')
        }
    }

    return (
        <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
            <div className="flex items-center gap-3 px-3">
                <img src={amaLogo} alt="AMA" className="h-5" />

                <span className="text-sm text-zinc-500 truncate">
                    Código da sala: <span className="text-zinc-300">{room_id}</span>
                </span>

                <button
                    onClick={handleShareRoom}
                    className='ml-auto bg-zinc-800 text-zinc-300 px-3 py-1.5 flex gap-1.5 items-center rounded-lg font-medium text-sm hover:bg-zinc-700 transition:colors'
                    type='submit'>
                    Compartilhar
                    <Share2 className='size-4' />
                </button>
            </div>

            <div className="h-px w-full bg-zinc-900" />

            <form
                className='flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 focus-within:border-orange-400'>
                <input
                    type="text"
                    name='theme'
                    placeholder='Qual a sua pergunta?'
                    autoComplete='off'
                    className='flex-1 text-sm bg-transparent mx-2 outline-none placeholder:text-zinc-500 text-zinc-100 '
                />

                <button
                    className='bg-orange-400 text-orange-950 px-3 py-1.5 flex gap-1.5 items-center rounded-lg font-medium text-sm hover:bg-orange-500 transition:colors'
                    type='submit'>
                    Criar pergunta
                    <ArrowRight className='size-4' />
                </button>
            </form>

            <ol className="list-decimal list-outside px-3 space-y-8">
                <Message text="Como funcionam as go rotinas ?" amountOfRaections={14} awnsered/>
                <Message text="Como o garbage colector funciona em go?" amountOfRaections={12}/>
                <Message text="Como tratar websockets com react ?" amountOfRaections={8}/>
                <Message text="O gorilla websocket não poderia ser usado para escrever as apis ao invés do gin?" amountOfRaections={4}/>
               
            </ol>
        </div>
    )
}