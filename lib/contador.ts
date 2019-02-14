import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';
import { convertirSgAFormatoReloj } from './conversion';

/**
 * Cuenta de manera ascendente de 1 en 1
 */
export class Contador {
    /**
     * @ignore
     */
    valorLImite = -1;
    /**
     * @ignore
     */
    constructor (limite: number = 5) {
        this.valorLImite = limite;
    }
    /**
     * CUenta de 0 hasta el límite establecido
     */
    start() {
        return interval(1000).pipe(
            map(
                ( sg: number ) => {
                    return convertirSgAFormatoReloj(sg, 1, this.valorLImite)
                }
            )
        )
    }
}