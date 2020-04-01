// entradas
var nota1 = 1.5;
var nota2 = 1.0;

// calcular promedio
var promedio = (nota1 + nota2) / 2;

// calcular estado
var estado;
if(promedio >= 4.1){
    estado = "Bueno";
}else if(promedio >= 3.0){
    estado = "Aceptable";
}else if(promedio >= 2.1){
    estado = "Insuficiente";
}else{
    estado = "Pésimo";
}

// salida
console.log("Promedio (" + nota1 + ", " + nota2 + "): " + promedio);
console.log("Estado: " + estado);