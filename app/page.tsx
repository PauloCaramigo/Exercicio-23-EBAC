"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { addTarefa, getTarefas } from "./api/api";
import NovaTarefa from "./componentes/NovaTarefa";
import { Tarefa } from "./type/tarefa";
import { useContadorTarefas } from "./hooks/useContadorTarefas";

export default function Home() {
  const [task, setTask] = useState<Tarefa[]>([]);
  const [tarefa, setTarefa] = useState("");
  const qntTarefas = useContadorTarefas(task.length);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setTarefa(event.target.value); }

  const adicionar = async () => {
    const novaTarefa: Tarefa = await addTarefa(tarefa);
    setTask(prev => [...prev, novaTarefa])
  }

  useEffect(() => {
    getTarefas().then(setTask);
  },[])

  useEffect(() => {
    qntTarefas.setQntTarefas(task.length)
  },[task])

  return (
    <section className="flex flex-col items-center">
      <div className="my-16">
        <input className="border rounded-lg px-4 py-2 mr-10 w-100" type="text" placeholder="Descreva a tarefa a ser feita." onChange={handleChange}/>
        <button className="border rounded-lg px-4 py-2 bg-green-600 hover:bg-green-800 hover:cursor-pointer" onClick={adicionar}>Enviar</button>
      </div>
      <div className="px-4 py-2 border rounded-lg mb-4 flex justify-center items-center">
        <p>Quantidade de tarefas: {qntTarefas.qntTarefas}</p>
      </div>

      {task.map(tarefa => <NovaTarefa task={tarefa} key={tarefa._id}/> )}
    </section>
  );
}
