"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const interval_1 = require("rxjs/internal/observable/interval");
const map_1 = require("rxjs/internal/operators/map");
const conversion_1 = require("./conversion");
/**
 * Cuenta de manera ascendente de 1 en 1
 */
class Contador {
    /**
     * @ignore
     */
    constructor(limite = 5) {
        /**
         * @ignore
         */
        this.valorLImite = -1;
        this.valorLImite = limite;
    }
    /**
     * CUenta de 0 hasta el límite establecido
     */
    start(tiempoIntervalo = constants_1.Tiempo.UN_SG_ES_EN_MS) {
        return interval_1.interval(tiempoIntervalo).pipe(map_1.map((sg) => {
            return conversion_1.convertirSgAFormatoReloj(sg, 1, this.valorLImite);
        }));
    }
}
exports.Contador = Contador;
