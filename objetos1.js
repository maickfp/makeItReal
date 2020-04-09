var carro = {
    numeroPuertas: 4,
    color: "Negro",
    marca: "Chevrolet",
    modelo: "2020"
}

console.log("Marca del carro (carro.marca): " + carro.marca);
console.log("Modelo del carro (carro.modelo): " + carro.modelo);
console.log("Color del carro (carro['color']): " + carro["color"]);
var propiedad = "numeroPuertas";
console.log("Numero de puertas del carro (carro[propiedad]): " + carro[propiedad]);