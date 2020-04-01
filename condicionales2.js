// entradas
var precio = 200000;
var cantidad = 5;

// calculo venta
var totalVenta = precio * cantidad;

// calculo decuento
var descuento ;
if(totalVenta > 877803){
    descuento = 0.2;
}else{
    descuento = 0.1;
}
var totalDescuento = totalVenta*descuento;

// calculo total venta
var totalValorVenta = totalVenta - totalDescuento;

// salidas
console.log("Total antes de decuento: " + totalVenta);
console.log("Valor del decuento (" + (descuento*100) + "%): " + totalDescuento);
console.log("Total a pagar: " + totalValorVenta );