'use client'
import { IconSend, IconTrash } from "@tabler/icons-react"
import { useState } from "react"

export default function Page() {
    const [tarefas, setTarefas] = useState<string[]>([])
    const [nome, setNome] = useState<string>("")

    function addTarefa() {
        if (nome) {
            setTarefas([...tarefas, nome])
            setNome('')
        }
    }

    function excluirTarefa(i: number){
        setTarefas(tarefas.filter((_, index) => index !== i))
    }

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col">
                <label htmlFor="tarefa">Tarefa</label>
                <div className="flex items-center gap-2">
                    <input
                        id="tarefa"
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="bg-zinc-800 px-4 py-2 rounded-md outline-none text-xl flex-grow"
                        onKeyUp={(e) => {
                            if(e.key === 'Enter'){
                                addTarefa()
                            }
                        }}
                    />
                    <button onClick={addTarefa} className="bg-blue-500 p-2 rounded-md">
                        <IconSend />
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-1xl font-black text-zinc-400">Lista de Tarefas</h2>
                <ul className="flex flex-col gap-2">
                    {tarefas.map((tarefa, i) => {
                        return <li key={i} className="flex items-center px-4 py-2 bg-zinc-800 p-2 rounded-md">
                            <span className="flex-grow">{tarefa}</span>
                            <IconTrash
                                size={18}
                                className="text-red-500 cursor-pointer" 
                                onClick={() => excluirTarefa(i)}
                                />
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}