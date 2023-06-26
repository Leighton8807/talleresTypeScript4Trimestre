//funcion con argumento tipo numerico retornando una promesa.

function retornandoConPromesa(a:number) {
    return new Promise((resolve, reject)=>{
        function resolver() {
            resolve(a**2)
        }
        setTimeout(resolver,3000)
    })
}

//console.log(retornandoConPromesa(5));

//async para resolver la promesa que se encuentra dentro de la función
let asincrono = async ()=>{
    let valorPromesa = await retornandoConPromesa(25)
    console.log(valorPromesa);    
}

asincrono();

// si se llama a la primer función retornará una promesa que espera a que se resuelva, cuando implementamos el async la promesa de la primer funcion se resulve dando como resultado el valor numerico. 


function resultado()  {
    return new Promise((resolve,reject)=>{
        function pendiente () {
            resolve(8**2)
        }
        setTimeout(pendiente,6000)
    })
}
//console.log(resultado());
//El resultado que arroja es una promesa que queda pendiente de resolverse.


let cuadradoAsincrono= async () => {
    let valorPromesa = await resultado()
    console.log(valorPromesa);
}

cuadradoAsincrono();

//a. 
//b.la clausula que usamos para optener el valor de una promesa es sync/await
//c. la condicion para poder usar la clausula await es que se debe de usar async, de lo contrario generará un error.