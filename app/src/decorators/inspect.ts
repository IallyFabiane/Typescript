export function inspect() { //esqueleto base de um decorator!
    return function(
        target: any, 
        propertytKey: string, 
        descriptor: PropertyDescriptor
    ) {
       const metodoOriginal =  descriptor.value;
       descriptor.value = function(...args: any[]) {
           console.log(`---Método ${propertytKey} `);
           console.log(`-----Parâmetros: ${JSON.stringify(args)}`)
           const retorno = metodoOriginal.apply(this, args);
           console.log(`-------retorno: ${JSON.stringify(retorno)}`)
           return retorno;
       }
       return descriptor;
    }
}

// Se a função do decorator não recebe parâmetros ela não precisa receber uma função externa a ela!
/*Sintaxe: function name(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
    ) {
        bloco de código
    }
Sintaxe da chamada do decorator: @name
*/