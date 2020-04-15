const mensajes = ["Texto 1", "Texto 2", "Texto 3"];
const [msj1, msj2, msj3, msj4] = mensajes;
console.log(msj1);
console.log(msj2);
console.log(msj3);
console.log(msj4);

const car = {modelo:2015, marca:"Mazda", carroceria:"Sedan"};
const {carroceria, modelo, marca} = car
console.log(`Modelo del carro: ${modelo}`);
console.log(`Marca del carro: ${marca}`);
console.log(`Carroceria del carro: ${carroceria}`);