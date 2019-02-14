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
    start(): import("../../../../../../../../Volumes/DATA/Udemy/Proyects/NPM-Projects-Course/nodets/proyecto-2c-crono/node_modules/rxjs/internal/Observable").Observable<string>;
}
