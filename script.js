
function validarMayoriaDeEdad(edadUsuario){
    if(edadUsuario>=18){
        alert(nombre + ' sos mayor de ' +mayoriaEdad+ '. Adelante')
    }
}

var mayoriaEdad = 18
var edadMaxima = 0

for (var i=0; i<3; i++){
    var nombre= prompt('Ingrese nombre')
    var edadUsuario= parseInt(prompt('Ingresar edad'))
    validarMayoriaDeEdad(edadUsuario)
    if (edadUsuario>edadMaxima){  
        var edadMaxima=edadUsuario
    }
}   
alert('La edad maxima es: ' + edadMaxima)