import { Tiempo } from "./constants";

/**
 * Convierte los segundos en HH:MM:SS
 * @param sg Segundos del momento
 * @param tipo 1: COntador / 2: Descontador
 * @param limite Valor limite hasta el momento que funcionará
 */
export function convertirSgAFormatoReloj(sg: number, tipo: number, limite: number): string {
    if (tipo === 1 && limite === sg || tipo === 2 && sg === 0) {
        return 'FINISH';
    }
    // COnseguir el tiempo formateado para devolverlo
    // Horas
    const horas = Math.floor((sg % Tiempo.SG_DIA) / Tiempo.SG_HORA);
    // Minutos
    const minutos = Math.floor((sg % Tiempo.SG_HORA) / Tiempo.SG_MIN);
    // segundos
    const sgs = Math.floor((sg % Tiempo.SG_MIN));
    return adaptarAlReloj(horas, minutos, sgs);
}

/**
 * @ignore
 */
function adaptarAlReloj(horas: number, minutos: number, sg: number) {
    const h = darNumeroFormatoCorrecto(horas);
    const m = darNumeroFormatoCorrecto(minutos);
    const s = darNumeroFormatoCorrecto(sg);
    return `${ h }:${ m }:${ s }`;
}

/**
 * @ignore
 */
function darNumeroFormatoCorrecto(n: number): string {
    return (n < 10 ) ? '0'.concat(String(n)): String(n);
}