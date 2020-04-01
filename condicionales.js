// entradas
var precio = 200000;
var cantidad = 2;

// calculo venta
var totalVenta = precio * cantidad;

// calculo decuento
var descuento = 0;
if(totalVenta > 877803){
    descuento = totalVenta*0.2;
}

// calculo total venta
var totalValorVenta = totalVenta - descuento;

// salidas
console.log("Total antes de decuento: " + totalVenta);
console.log("Valor del decuento: " + descuento);
console.log("Total a pagar: " + totalValorVenta );