export function domInjector(seletor: string) { //decorator de captura de elementos do DOM
     return function (
        target: any,
        propertyKey: string // propriedade na qual o decorator foi colocado
    ) {
        console.log(`modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
        let elemento: HTMLElement;
        const getter = function() { // função que busca o elemento do DOM e o retorna
           if(!elemento) { // se não existir elemento, ele é capturado e guardado dentro da variável elemento
               elemento = <HTMLElement>document.querySelector(seletor);
               console.log(`buscando o  elemento do DOM com o seletor${seletor} para injetar em ${propertyKey}`);
           }
            
            return elemento; // se elemento já foi capturado, ele é retornado
        }

        Object.defineProperty( // captura o prototype9com o target), aplica na propriedade (propertyKey) e define o getter (get)
            target, 
            propertyKey,
            { get: getter }
        );
    }
}