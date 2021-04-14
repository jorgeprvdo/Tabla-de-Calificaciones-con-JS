/*
$(document).ready(function(){
   calificar();
})
*/

/* Banderas */
var capturar = false;

/* Variables globales */
var alumnos = [];
var calificaciones = [];

/* Elementos */

var infoBox = document.getElementById("info");

var buttonGuardar = document.getElementById("btnGuardar");
var buttonLimpiar = document.getElementById("btnLimpiar");
var buttonCapturar = document.getElementById("btnCapturar");
var buttonDefinir = document.getElementById("btnDefinir");

var textNombre = document.getElementById("nombre");
var textCalificacion = document.getElementById("calificacion");

var tableBody = document.getElementById("data");

/* Eventos globales */
buttonCapturar.addEventListener("click", function(){
    capturar = !capturar;
    capturaInformacion();
});


/* Funciones */
function capturaInformacion(){

var posicion = 0;
var tableData = "";

if (capturar) {

    infoBox.classList.remove("d-none");
    infoBox.classList.add("d-block");
    buttonCapturar.classList.remove("btn-outline-primary");
    buttonCapturar.classList.add("btn-outline-danger");
    buttonCapturar.innerHTML = "Dejar de capturar";

} else if (!capturar) {
    infoBox.classList.remove("d-block");
    infoBox.classList.add("d-none");
    buttonCapturar.classList.remove("btn-outline-danger");
    buttonCapturar.classList.add("btn-outline-primary");
    buttonCapturar.innerHTML = "Capturar";
}

buttonLimpiar.addEventListener("click", function() {

    textNombre.value = '';
    textCalificacion.value = '';

});

buttonGuardar.addEventListener("click", function() {

    alumnos[posicion] = textNombre.value;
    calificaciones[posicion] = textCalificacion.value;

    if (textCalificacion.value <=6) {

        tableData += `
        <tr>
            <td>${posicion}</td>
            <td>${alumnos[posicion]}</td>
            <td>${calificaciones[posicion]}</td>
            <td class="text-danger">Reprobado</td>
        </tr>
        `;
    
        tableBody.innerHTML = tableData;
        
    } else if (textCalificacion.value <=8) {
        tableData += `
        <tr>
            <td>${posicion}</td>
            <td>${alumnos[posicion]}</td>
            <td>${calificaciones[posicion]}</td>
            <td class="text-info">Aprobado</td>
        </tr>
        `;
    
        tableBody.innerHTML = tableData;

    } else if (textCalificacion.value >=9) {
        tableData += `
        <tr>
            <td>${posicion}</td>
            <td>${alumnos[posicion]}</td>
            <td>${calificaciones[posicion]}</td>
            <td class="text-success">Sobresaliente</td>
        </tr>
        `;
    
        tableBody.innerHTML = tableData;
    }


    textNombre.value = '';
    textCalificacion.value = '';
    posicion++;
    console.log(alumnos);
    console.log(calificaciones);
});

}



/*
function setMarca(){
    telefono.marca = "Huawei";
}

function setModelo(){
    telefono.modelo = "P40";
}

function getMarca() {
    return telefono.marca;
}

function getModelo() {
    return telefono.modelo;
}


var x;
var y;
var z;
var a;
var b;
var c;

function setValores() {
    x = prompt("Valor de primer número:");
    y = prompt("Valor del segundo número:");
    suma(x, y);
    resta(x, y);
    multi(x, y);
    div(x, y);
    console.log(z);
    console.log(a);
    console.log(b);
    console.log(c);
}

function suma(numero1, numero2) {
    z = Number(numero1) + Number(numero2);
    return z;
}

function resta(numero1, numero2){
    a = Number(numero1) - Number(numero2);
    return a;
}

function multi(numero1, numero2){
    b = Number(numero1) * Number(numero2);
    return b;
}

function div(numero1, numero2){
    c = Number(numero1) / Number(numero2);
    return c;
}

function logicos() {
    var f = 4;
    var e = 6;

    
           == :Compara el mismo valor
           === :Compara el mismo valor y tipo de dato
           != : Si el valor es diferente al que se asigno
    (OR)   || : Si cumple al menos una condición
    (AND)  && : Cuando se cumplen todas las condiciones

    

    if(f != 1 && e != 2){
        console.log("Chi")
    }else {
        console.log("Ño")
    }
}

function ciclos() {

    var arreglo = [50, 30, 22, 15, 8, 3, 9, 10];

    for (var i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}

*/

/*
function saludar() {
    var saludar = "Si";

    do{
        console.log("Hola!")
        saludar = prompt("Saludar otra vez?")
    }
    while(saludar == "Si");
}
*/

/* 
1-6 Reprobado
7-8 Normal
9-10 sobresaliente


function calificar() {
    var opcion;
    var opcion2;
     
    opcion = Number(prompt("Ingresa tu calificación. Del 1 al 10"));

    do{
        switch (opcion) {
            case 1:
                console.log("Reprobado");
                break;
            case 2:
                console.log("Reprobado");
                break;
            case 3:
                console.log("Reprobado");
                break;
            case 4:
                console.log("Reprobado");
                break;
            case 5:
                console.log("Reprobado");
                break;
            case 6:
                console.log("Reprobado");
                break;
            case 7:
                console.log("Aprobado");
                break;
            case 8:
                console.log("Aprobado");
                break;
            case 9:
                console.log("Sobresaliente");
                break;
            case 10:
                console.log("Sobresaliente");
                break;
            default:
                console.log("Introduce una calificación del 1 al 10");
                break;
        }

        
        opcion2 = Number(prompt("Quieres Ingresar otra calificación? 1.Si 2.No"));
        if (opcion2 == 1){
            opcion = Number(prompt("Ingresa tu calificación. Del 1 al 10"));
        } else {
            console.log("Revisa tu calificación");
        }
        
    }
    while (opcion2 == "1");

}
*/

