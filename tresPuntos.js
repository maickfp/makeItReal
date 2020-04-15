function miFuncion(id, ...params){
    const [var1, var2] = params
    console.log(`ID: ${id} - params: ${params} - parametro 2: ${var2}`);
}

miFuncion(1);
miFuncion(2, "Michael");
miFuncion(3, "Michael", "Fernadez");

const data4 = [4, "Hola"];
const data5 = [5, "Hola", "Mundo"];

miFuncion(data4);
miFuncion(...data5);

const numbers = [
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random()
]
console.log(`Números: ${numbers}`);
const minNumber = Math.min(...numbers);
console.log(`Número Menor: ${minNumber}`);
const sqrtMinNumber = Math.sqrt(minNumber);
console.log(`Raíz Cuadrada de Número Menor: ${sqrtMinNumber}`);