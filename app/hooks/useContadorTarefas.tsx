import { useState } from "react";

export function useContadorTarefas(valorInicial = 0) {
    const [qntTarefas, setQntTarefas] = useState(valorInicial);

    return {
        qntTarefas,
        setQntTarefas
    };
}