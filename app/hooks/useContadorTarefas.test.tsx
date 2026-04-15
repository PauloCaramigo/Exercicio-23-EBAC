import { useContadorTarefas } from "./useContadorTarefas";
import { act, renderHook } from '@testing-library/react';

test("Verifica se o contador está funcionando corretamente", () => {
    const contador = renderHook(() => useContadorTarefas(10));

    expect(contador.result.current.qntTarefas).toBe(10);
})

test("Verifica se o contador está funcionando corretamente após alterar o valor inicial", () => {
    const contador = renderHook(() => useContadorTarefas(10));

    act(() => {
        contador.result.current.setQntTarefas(50);
    })

    expect(contador.result.current.qntTarefas).toBe(50);
})