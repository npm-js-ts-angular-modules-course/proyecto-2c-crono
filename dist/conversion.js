"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
/**
 * Convierte los segundos en HH:MM:SS
 * @param sg Segundos del momento
 * @param tipo 1: COntador / 2: Descontador
 * @param limite Valor limite hasta el momento que funcionará
 */
function convertirSgAFormatoReloj(sg, tipo, limite) {
    if (tipo === 1 && limite === sg || tipo === 2 && sg === 0) {
        return 'FINISH';
    }
    // COnseguir el tiempo formateado para devolverlo
    // Horas
    const horas = Math.floor((sg % constants_1.Tiempo.SG_DIA) / constants_1.Tiempo.SG_HORA);
    // Minutos
    const minutos = Math.floor((sg % constants_1.Tiempo.SG_HORA) / constants_1.Tiempo.SG_MIN);
    // segundos
    const sgs = Math.floor((sg % constants_1.Tiempo.SG_MIN));
    return adaptarAlReloj(horas, minutos, sgs);
}
exports.convertirSgAFormatoReloj = convertirSgAFormatoReloj;
/**
 * @ignore
 */
function adaptarAlReloj(horas, minutos, sg) {
    const h = darNumeroFormatoCorrecto(horas);
    const m = darNumeroFormatoCorrecto(minutos);
    const s = darNumeroFormatoCorrecto(sg);
    return `${h}:${m}:${s}`;
}
/**
 * @ignore
 */
function darNumeroFormatoCorrecto(n) {
    return (n < 10) ? '0'.concat(String(n)) : String(n);
}
