//Taller de typeScript 2
//FUNCION TIPO BOOLEAN
function tipoBooleano(x:boolean):boolean {
return true;   
}
tipoBooleano(false);
console.log(tipoBooleano);

console.log('**********************************');
//FUNCION DE TIPO OBLIGATORIOS Y TIPO STRING
function obligatorios(nombre: string, ciudad?:string, salario: number=1000000):string {
    if (ciudad) {
        return `nombre: ${nombre}, salario: ${salario}, ciudad: ${ciudad}`;
    }
    return`ciudad: ${ciudad}`;    
}

let parametrosUno = obligatorios(`jorge`, `armenia`,);
console.log(parametrosUno);

console.log('**********************************');
//FUNCION CON DOS PARAMETROS QUE RETORNAN SU SUMA
function suma(a:number, b:number) {
    return a+b;
}
console.log(suma(5,4));
console.log('**********************************');
//setTimeOut

let tiempo = setTimeout(
    function () {
        console.log(`HOLA ADSO`);
    }, 5000
)
console.log('**********************************');
//FUNCION FLECHA SIN ARGUMENTO
const flecha = () =>console.log(`Hola ASDO`);
flecha();
console.log('**********************************');
//funcio flecha con parametro, con retorno de string sin usar la palabra reservada return
let edad = (edad: number)=> `La edad que tenia el ano anterior es ${edad-1}`;
console.log(edad(5));

let dosParamtros = (a:number, b:number)=>{
    let x = a%b;
    return x;
}
console.log(dosParamtros(5,2));


