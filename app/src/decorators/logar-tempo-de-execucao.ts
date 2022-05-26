export function logarTempoDeExecucao() {
    return function(
        target: any, // se o decorator for colocado em um método estático (static), o target é a função construtora da classe. S efor colocado em um método que não é estático, ele retornará o prototype da classe.
        propertKey: string, // dá o nome do método que foi decorado
        descriptor: PropertyDescriptor //tem uma referência para o método original
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>) { //utilizando rest operator: aqui independentememnte do número de parâmetors passados para a função eles serão tratados como um array do tipo any
            const t1 = performance.now();
           const retorno = metodoOriginal.apply(this, args) ;// chamar o método original utilizando o método apply(contexto, parâmetros).
            const t2 = performance.now();
            console.log(`${propertKey}, Tempo de execução: ${(t1 - t2)/ 1000} segundos.`); //propertKey etorna o nome da propriedade
            retorno
        }
        
        return descriptor;
    }

}