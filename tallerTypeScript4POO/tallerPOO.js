"use strict";
//clase coche con metodo no estatico y otro con estatico y propiedades publica y privada.
class Coche {
    constructor(modelo, marca) {
        this.modelo = modelo;
        this.marca = marca;
    }
    presentar() {
        console.log('se presenta el coche');
    }
    static encender() {
        console.log('El coche se enciende');
    }
}
//propiedad de forma privada
Coche.precio = 200000000;
let miCoche = new Coche(2014, 'Renault');
console.log(miCoche);
miCoche.presentar();
Coche.encender();
