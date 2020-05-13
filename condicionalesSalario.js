// Revisión salario
// entradas
var horasTrabajadas = 45;
var valorHora = 2000;

// calcular salario base
var salario = horasTrabajadas * valorHora;

// calcular extras
var horasExtra = horasTrabajadas - 40;
if(horasExtra < 0){
    horasExtra = 0;
}
var valorExtra  = horasExtra * (valorHora*0.5);

// calcular salario total
var totalSalario = salario + valorExtra;

// salida
console.log("Valor Hora: " + valorHora);
console.log("Salario Base (" + horasTrabajadas + " horas): " + salario);
console.log("Valor Extra (" + horasExtra + " horas) :" + valorExtra);
console.log("Salario TOTAL: " + totalSalario);