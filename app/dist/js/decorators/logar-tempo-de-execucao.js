export function logarTempoDeExecucao() {
    return function (target, propertKey, descriptor) {
        return descriptor;
    };
}
