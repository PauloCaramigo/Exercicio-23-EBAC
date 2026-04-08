import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import NovaTarefa from "./NovaTarefa";

test("Teste do card de novas tarefas", async () => {
    const json = {
        _id: 1,
        tarefa: "Ficaria o nome de alguma tarefa",
        concluida: false
    }

    render(<NovaTarefa task={json} />)

    const elemento = await screen.findByText(json.tarefa);

    expect(elemento).toBeInTheDocument();
});