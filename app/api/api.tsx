import { Tarefa } from "../type/tarefa";

const API_URL = "https://crudcrud.com/api/b8af2d77b1fa490c8227ea68ee8e7593";

export async function getTarefas(): Promise<Tarefa[]> {
    try {
        const response = await fetch(API_URL + "/tarefas", {method: "GET"})
        const data: Tarefa[] = await response.json();

        return data;
    }
    catch(error) {
        console.error(error);
        return []
    }
    
}

export async function addTarefa(tarefa: string): Promise<Tarefa> {
    try {
        const response = await fetch(
            API_URL + "/tarefas", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    tarefa: tarefa,
                    concluida: false
                })
            }
        )

        const data = await response.json();
        console.log(data);

        return data;
    }
    catch (error) {
        console.error(error)
        return {_id:NaN, tarefa: "", concluida:false}
    }
}

export async function setTarefa(tarefa: Tarefa) {
    try {
        const response = await fetch(
            API_URL + "/tarefas/" + tarefa._id, 
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    tarefa: tarefa.tarefa,
                    concluida: tarefa.concluida
                })
            }
        )
    }
    catch (error) {
        console.error(error)
    }
}

export async function removeTarefa(id: number) {
    try {
        const response = await fetch(
            API_URL + "/tarefas/" + id, 
            {
                method: "DELETE",
            }
        )

        const data = await response.json();

        return data;
    }
    catch (error) {
        console.error(error)
    }
}