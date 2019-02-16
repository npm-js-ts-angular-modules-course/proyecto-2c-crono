/**
 * Descuenta de uno en uno desde el valor establecido hasta 0
 */
export declare class Descontador {
    /**
     * @ignore
     */
    valorInicial: number;
    /**
     * @ignore
     */
    constructor(valor?: number);
    /**
     * Va descontando del valor inicial introducido hasta 0
     */
    start(tiempoIntervalo?: number): import("rxjs/internal/Observable").Observable<string>;
}
