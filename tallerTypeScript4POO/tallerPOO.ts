//clase coche con metodo no estatico y otro con estatico y propiedades publica y privada.

class Coche{
    //propiedad publica
    public  modelo: number;
    public marca: string;
    //propiedad de forma privada
    private static precio :number = 200000000;

    constructor(modelo: number, marca:string){
        this.modelo = modelo;
        this.marca = marca;
    }

    presentar(){
        console.log('se presenta el coche');
    }

    static encender(){
        console.log('El coche se enciende');
    }

}

let miCoche = new Coche(2014, 'Renault');
console.log(miCoche);

miCoche.presentar();
Coche.encender();


//Nueva clase robot
class Robot{
    public  nombre: String; 
    public  tipo: string;
    private modelo: number;
    private precio: number;

    constructor(nombre:string, tipo:string, modelo: number, precio:number){
        this.nombre=nombre;
        this.tipo=tipo;
        this.modelo=modelo;
        this.precio=precio;
    }

    saludar(){
        console.log('El robot saluda');
    }

    caminar(){
        console.log('El robot camina');
    }

    static parar(){
        console.log('El robot se detiene');
    }

    static despedir(){
        console.log('El robot se despide');
    }
}

let miRobot = new Robot('metapot', 'luchador', 2014, 150000)
console.log(miRobot.nombre);


class PC{
    public modelo: number;
    public procesador: string;
    private discoDuro: string;
    private tarjetaGrafica: String;

    constructor(modelo: number, procesador:string, discoDuro: string, tarjetaGrafica:string){
        this.modelo=modelo;
        this.procesador=procesador;
        this.discoDuro=discoDuro;
        this.tarjetaGrafica= tarjetaGrafica;
    }

    static encender(){
        console.log('El PC enciende');
    }

    static apagar(){
        console.log('El PC se apaga');
    }

    correrPrograma(){
        console.log('El PC corre el programa');
    }

    conectar(){
        console.log("El PC se conecta");
    }
}

let miPC = new PC(2023,'ryzen','1tera','RTX3060');
console.log(miPC);
