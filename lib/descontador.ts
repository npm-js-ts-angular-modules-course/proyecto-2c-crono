import { Tiempo } from './constants';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';
import { convertirSgAFormatoReloj } from './conversion';
/**
 * Descuenta de uno en uno desde el valor establecido hasta 0
 */
export class Descontador {
    /**
     * @ignore
     */
    valorInicial = -1;
    /**
     * @ignore
     */
    constructor (valor: number = 5) {
        this.valorInicial = valor;
    }

    /**
     * Va descontando del valor inicial introducido hasta 0
     */
    start(tiempoIntervalo: number = Tiempo.UN_SG_ES_EN_MS) {
        return interval(tiempoIntervalo).pipe(
            map(
                ( sg: number ) => {
                    return convertirSgAFormatoReloj(this.valorInicial - sg, 2, this.valorInicial)
                }
            )
        )
    }
}