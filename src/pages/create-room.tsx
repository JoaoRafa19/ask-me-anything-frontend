import { useNavigate } from 'react-router-dom'
import amaLogo from '../assets/ama-logo.svg'
import { ArrowRight } from 'lucide-react'

export function CreateRoom() {

    const navigate = useNavigate()

    function handleCreateRoom(data: FormData) {
        const theme = data.get('theme')?.toString()
        if (theme) {

            navigate(`/room/${theme}`)
        }
    }

    return (
        <main className='h-screen flex items-center justify-center px-4'>
            <div className='max-w-[450px] flex flex-col gap-6'>
                <img src={amaLogo} alt="AMA" className='h-10' />

                <p className='leading-relaxed text-zinc-300 text-center '>Crie uma sala pública de AMA (Ask me anything) e priorize as perguntas mais importantes para a comunidade.</p>

                <form
                    action={handleCreateRoom}
                    className='flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 focus-within:border-orange-400'>
                    <input
                        type="text"
                        name='theme'
                        placeholder='Nome da Sala'
                        autoComplete='off'
                        className='flex-1 text-sm bg-transparent mx-2 outline-none placeholder:text-zinc-500 text-zinc-100 '
                    />

                    <button
                        className='bg-orange-400 text-orange-950 px-3 py-1.5 flex gap-1.5 items-center rounded-lg font-medium text-sm hover:bg-orange-500 transition:colors'
                        type='submit'>
                        Criar sala
                        <ArrowRight className='size-4' />
                    </button>
                </form>
            </div>
        </main>
    )
}