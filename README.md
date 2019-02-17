# Cronometro
[![Build Status](https://travis-ci.org/npm-js-ts-angular-modules-course/proyecto-2c-crono.svg?branch=master)](https://travis-ci.org/npm-js-ts-angular-modules-course/proyecto-2c-crono)
[![npm version](https://badge.fury.io/js/proyecto-2c-crono.svg)](https://badge.fury.io/js/proyecto-2c-crono)
[![Coverage Status](https://coveralls.io/repos/github/npm-js-ts-angular-modules-course/proyecto-2c-crono/badge.svg?branch=master)](https://coveralls.io/github/npm-js-ts-angular-modules-course/proyecto-2c-crono?branch=master)
[![Documentation](https://raw.githubusercontent.com/npm-js-ts-angular-modules-course/proyecto-2c-crono/master/documentation/images/coverage-badge-documentation.svg?sanitize=true)](https://github.com/npm-js-ts-angular-modules-course/proyecto-2c-crono)

Un cronometro que cuenta y descuenta

## Instalación

```
npm install proyecto-2c-crono
```

## Uso

### Contador
```
const modulo = require('proyecto-2c-crono');

const cont = new modulo.Contador(2);

var d = cont.start().subscribe(
    data =>  {
        console.log(data);
        if (data === 'FINISH') {
            d.unsubscribe();
        }
    }
);
//Espera estos resultados
00:00:00
00:00:01
FINISH

```

### Descontador
```
const modulo = require('proyecto-2c-crono');

const cont = new modulo.Descontador(4);

var d = cont.start().subscribe(
    data =>  {
        console.log(data);
        if (data === 'FINISH') {
            d.unsubscribe();
        }
    }
);//Espera estos resultados
00:00:04
00:00:03
00:00:02
00:00:01
FINISH
```