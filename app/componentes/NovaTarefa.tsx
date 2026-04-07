"use client";

import { useState } from "react";
import { Tarefa } from "@/app/type/tarefa"
import { removeTarefa, setTarefa } from "../api/api";

type Props = {
    task: Tarefa
}

export default function NovaTarefa({ task }: Props) {
    const { _id, tarefa, concluida } = task;

    let [check, setCheck] = useState(concluida);

    const changCheck = () => {
        const novoCheck = !check
        setCheck(novoCheck);

        setTarefa({_id: _id, tarefa: tarefa, concluida: novoCheck})
    }

    const remover = () => { removeTarefa(_id) }

    return (
        <div className={`flex justify-between w-200 border rounded-lg px-6 py-4 mb-4 ${check ? "bg-gray-200" : ""}`}>
            <div className={`flex gap-4 items-center ${check ? "line-through text-gray-600" : ""}`}>
                <input type="checkbox" onChange={changCheck} checked={check ? true : false}/>
                <p>{tarefa}</p>
            </div>

            <button className="border rounded-lg bg-red-600 hover:bg-red-800 hover:cursor-pointer px-2 py-3 text-white" onClick={remover}>Remover</button>
        </div>
    )
}