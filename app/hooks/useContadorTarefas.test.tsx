import { useContadorTarefas } from "./useContadorTarefas";
import { act, renderHook } from '@testing-library/react';

test("Verifica se o contador está funcionando corretamente", () => {
    let number = 10;
    const contador = renderHook(() => useContadorTarefas(number));

    expect(contador.result.current.qntTarefas).toBe(10);
})

test("Verifica se o contador está funcionando corretamente após alterar o valor inicial", () => {
    let number = 10;
    const contador = renderHook(() => useContadorTarefas(number));

    act(() => {
        contador.result.current.setQntTarefas(50);
    })

    expect(contador.result.current.qntTarefas).toBe(50);
})