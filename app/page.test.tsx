import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./page";
import * as api from "./api/api"

//Faz o mock do módulo da API
jest.mock("./api/api")

test("Testa a rederização da página inicial", async () => {
    // Aqui ele "mocka" a API para ter um retorno padrão.
    (api.getTarefas as jest.Mock).mockResolvedValue([
        { _id: 1, tarefa: "Primeira tarefa", concluida: false }
    ]);

    render(<Home />);

    expect(await screen.findByText("Primeira tarefa")).toBeInTheDocument();
});

test("Testa a adição de uma nova tarefa", async () => {
    // Mocka a API de adicionar a tarefa.
    (api.addTarefa as jest.Mock).mockResolvedValue({
        _id: 2,
        tarefa: "Nova tarefa",
        concluida: false
    })

    render(<Home />)

    // Resgata o input e o botão de enviar para adicionar a tarefa
    const input = screen.getByPlaceholderText("Descreva a tarefa a ser feita.");
    const button = screen.getByText("Enviar");

    // Necessário instalar uma nova dependencia (@testing-library/user-event), para simular as ações do usuário.
    await userEvent.type(input, "Nova tarefa");
    await userEvent.click(button);

    expect(await screen.findByText("Nova tarefa")).toBeInTheDocument();
})