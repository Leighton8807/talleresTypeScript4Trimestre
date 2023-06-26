"use strict";
//Taller de typescript 1
// declaracion e inicialización de variables
// Logicas
let verdadero = true;
let falso = false;
//variables numericas
let numero = 0;
//variables any
let cualquiera = 1;
let other = "hola";
let otro = true;
//variables de tipo string
let texto = "hola";
//Plantilla de strings
let nombre = "Paula";
let apellido = "Peréz";
console.log(`Bienvenida ${nombre} ${apellido} a nuestro sitio web, gracias por registrarte.`);
console.log('*************************');
//Declaracion e inicializacion de arrays
//arrays de numeros
let numeros = [1, 2, 3, 4, 5];
for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
}
console.log('*************************');
//arrays de strings
let palabras = ['array', 'en', 'typeScript'];
for (let i = 0; i < palabras.length; i++) {
    console.log(palabras[i]);
}
console.log('*************************');
//usando forEach
palabras.forEach(palabra => {
    console.log(' usando metodo foreach ' + palabra);
});
console.log('*************************');
numeros.forEach(numero => {
    console.log('usando metodo foreach ' + numero);
});
console.log('*************************');
//objetos
let diasSemana = {
    lunes: 'lunes',
    martes: 'martes',
    miercoles: 'miercoles',
    jueves: 'jueves',
    viernes: 'viernes',
    sabado: 'sabado',
    domingo: 'domingo'
};
let objetoNumeros = {
    uno: 1,
    dos: 2,
    tres: 3,
    cuatro: 4,
    cinco: 5,
    seis: 6,
    siete: 7,
    ocho: 8,
    nueve: 9
};
//objetos usando for-in
for (const key in objetoNumeros) {
    if (objetoNumeros.hasOwnProperty.call(objetoNumeros, key)) {
        const element = objetoNumeros[key];
        console.log(element);
    }
}
console.log('*************************');
for (const key in diasSemana) {
    if (diasSemana.hasOwnProperty.call(diasSemana, key)) {
        const element = diasSemana[key];
        console.log(element);
    }
}
