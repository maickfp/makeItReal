var ingresoFamiliar = 800000;
var personasGrupoFamiliar = 5;

var total = ingresoFamiliar + ((ingresoFamiliar < 1000000 && personasGrupoFamiliar >= 4) ?  877803 : 0)

console.log("Total del mes: " + total);