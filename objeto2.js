function detallarObjeto(obj){
    console.log("Propiedades del objeto:");
    for(var prop in obj){
        console.log("obj."+prop+": "+obj[prop]);
    }
}

function detallarObjeto2(obj){
    console.log("Propiedades 2 del objeto:");
    var propiedades = Object.keys(obj);
    for(var i = 0; i<propiedades.length; i++){
        var prop = propiedades[i];
        console.log("obj."+prop+": "+obj[prop]);
    }
}

var persona = {
    edad: 29,
    nombre: "Michael",
    peso: "88KG",
    sexo: "M",
    nacionalidad: ["colombiano", "italiano"],
    saludar: function(idioma){
        if(idioma == "ES"){
            console.log("Hola! mi nombre es " + this.nombre);
        } else if(idioma == "EN"){
            console.log("Hi! my name is " + this.nombre);
        } else if(idioma == "IT"){
            console.log("Ciao! mi chiamo " + this.nombre);
        } else if(idioma == "FR"){
            console.log("Salut! mon nom est " + this.nombre);
        } else {
            console.log("YO SER " + this.nombre);
        }
    }
}

//detallarObjeto(persona);
delete persona.nacionalidad;
//console.log("Propiedade persona.nacionalidad eliminada");
//detallarObjeto2(persona);
persona.saludar("END");