//promesas
//promesa que siempre se resuelve
let promesaResolve = new Promise((resolve,reject)=>{
    resolve(`Somos Programadores`);
});

//promesa que siempre se rechaza
let promesaRechazo = new Promise ((resolve, reject)=>{
    reject(`Ha ocurrido un error desconocido`)
});

//utilizando el catch
promesaRechazo.catch((err)=>{
    console.log(`la razon del rechazo es: ${err}`);
});

//verificacion de subsidios con then y catch generando mensaje de rerror
let estrato = 1;
let verificarEstrato = new Promise((resolve, reject)=>{
    if (estrato >= 1 && estrato <= 2) {
        resolve(`tiene derecho a subsidio`)
    } else if(estrato >= 3 &&
         estrato <=6) {
        resolve(`El usuario no tiene derecho al subsidio`)
    }else{reject(new Error(`El estrato no es valido`));
    }
});

verificarEstrato.then((res)=>{
    console.log(res); 
});

verificarEstrato.catch((err)=>{
    console.log('Ha ocurrido un error: ',err.message);
});

//promesa con then encadenados
let encadenados =new Promise((resolve, reject)=>{
    resolve(2);
});

encadenados.then((res:any)=>{
    console.log(res);
    return res**2 
}).then((res)=>{
    console.log(res);
    return res**2
}).then((res)=>{
    console.log(res);
    return res**2
}).then((res)=>{
    console.log(res);
    return res**2
});

const promesaUno = new Promise<string>((resolve) => {
    resolve("Somos ADSI");
  });
  
  const promesaDos = new Promise<string>((resolve, reject) => {
    const estado = true; //--> Cambia el valor de estado para controlar la resolución o el rechazo de la promesa
    if (estado) {
      resolve("Somos programadores");
    } else {
      reject(new Error("Promesa 2 no cumplida"));
    }
  });
  
  const promesaTres = new Promise<string>((resolve) => {
    resolve(", Hacemos mover el mundo");
  });
  
  promesaUno
    .then((mensaje1) => {
      console.log(mensaje1);
      return promesaDos;
    })
    .then((mensaje2) => {
      console.log(mensaje2);
      return promesaTres;
    })
    .then((mensaje3) => {
      console.log(mensaje3);
    })
    .catch((err) => {
      console.log("Ha ocurrido un error:", err.message);
    });
  //promesas con llamada asincrona
let nuevaPromesa = new Promise ((resolve, reject)=>{
    function habilitado() {
        resolve('Promesa resuelta')
    }
    setTimeout (habilitado, 2000);

    function inhabilitado() {
        reject(new Error('info error'))
    }
    setTimeout(inhabilitado, 4000)
});

nuevaPromesa.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.mensaje);
})

//promesas en paralelo

let primerPromesa = new Promise ((resolve, reject)=>{
    function resolver() {
        resolve('primer promesa resuelta')
    }
    setTimeout(resolver,2000);
})

let segundaPromesa = new Promise ((resolve, reject)=>{
    function resolver2() {
        resolve('Segunda promesa resuelta');
    }
    setTimeout(resolver2, 4000);
});

let tercerPromesa = new Promise ((resolve, reject)=>{
    function resolver3() {
        resolve('Tercer promesa resuelta');
    }
    setTimeout(resolver3, 5000);
});

let cuartaPromesa = new Promise((resolve, reject)=>{
    function resolver4() {
        resolve('Cuarta promesa resulta');
    }
    setTimeout(resolver4, 6000);
});

Promise.all([primerPromesa,segundaPromesa,tercerPromesa,cuartaPromesa])

.then((array)=>{
    array.forEach((elemento)=>{
        console.log('valor de resolucion: ',elemento);
    })
}).catch((err)=>{
    console.log(err);    
});

Promise.race([primerPromesa,segundaPromesa,tercerPromesa,cuartaPromesa])
.then((resultado)=>{
    console.log('La ganadora es: ',resultado);
})