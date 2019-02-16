"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const interval_1 = require("rxjs/internal/observable/interval");
const map_1 = require("rxjs/internal/operators/map");
const conversion_1 = require("./conversion");
/**
 * Descuenta de uno en uno desde el valor establecido hasta 0
 */
class Descontador {
    /**
     * @ignore
     */
    constructor(valor = 5) {
        /**
         * @ignore
         */
        this.valorInicial = -1;
        this.valorInicial = valor;
    }
    /**
     * Va descontando del valor inicial introducido hasta 0
     */
    start(tiempoIntervalo = constants_1.Tiempo.UN_SG_ES_EN_MS) {
        return interval_1.interval(tiempoIntervalo).pipe(map_1.map((sg) => {
            return conversion_1.convertirSgAFormatoReloj(this.valorInicial - sg, 2, this.valorInicial);
        }));
    }
}
exports.Descontador = Descontador;
