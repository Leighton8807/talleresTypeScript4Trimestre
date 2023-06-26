"use strict";
//funcion con argumento tipo numerico retornando una promesa.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function retornandoConPromesa(a) {
    return new Promise((resolve, reject) => {
        function resolver() {
            resolve(Math.pow(a, 2));
        }
        setTimeout(resolver, 3000);
    });
}
//console.log(retornandoConPromesa(5));
//async para resolver la promesa que se encuentra dentro de la función
let asincrono = () => __awaiter(void 0, void 0, void 0, function* () {
    let valorPromesa = yield retornandoConPromesa(25);
    console.log(valorPromesa);
});
asincrono();
// si se llama a la primer función retornará una promesa que espera a que se resuelva, cuando implementamos el async la promesa de la primer funcion se resulve dando como resultado el valor numerico. 
function resultado() {
    return new Promise((resolve, reject) => {
        function pendiente() {
            resolve(Math.pow(8, 2));
        }
        setTimeout(pendiente, 6000);
    });
}
//console.log(resultado());
//El resultado que arroja es una promesa que queda pendiente de resolverse.
let cuadradoAsincrono = () => __awaiter(void 0, void 0, void 0, function* () {
    let valorPromesa = yield resultado();
    console.log(valorPromesa);
});
cuadradoAsincrono();
//a. 
//b.la clausula que usamos para optener el valor de una promesa es sync/await
//c. la condicion para poder usar la clausula await es que se debe de usar async, de lo contrario generará un error.
