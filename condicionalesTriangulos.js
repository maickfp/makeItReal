// Revisión triangulos
// entradas
var lado1 = 120;
var lado2 = 102;
var lado3 = 10;

// calcular tipo
var iguales = 0;
if(lado1 === lado2){
    iguales += 1;
}
if(lado1 === lado3){
    iguales += 1;
}
if(lado2 === lado3){
    iguales += 1;
}
var tipo;
if(iguales === 3){
    tipo = "Equilátero";
}else if(iguales === 0){
    tipo = "Escaleno";
}else{
    tipo = "Isóceles";
}


// salidas
console.log("El triangulo con lados " + lado1 + ", " + lado2 + ", " + lado3 + " es: " + tipo);