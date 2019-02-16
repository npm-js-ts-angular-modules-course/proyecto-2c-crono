/**
 * Cuenta de manera ascendente de 1 en 1
 */
export declare class Contador {
    /**
     * @ignore
     */
    valorLImite: number;
    /**
     * @ignore
     */
    constructor(limite?: number);
    /**
     * CUenta de 0 hasta el límite establecido
     */
    start(tiempoIntervalo?: number): import("rxjs/internal/Observable").Observable<string>;
}
