let navegacion = document.querySelector("#navegacion");
let abrir = document.querySelector(".abrir-menu");
let cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click",()=>{
    navegacion.classList.add("visible");
})

cerrar.addEventListener("click",()=>{
    navegacion.classList.remove("visible");
})


//--------------------------------------------------------------------------

let bdark = document.querySelector('#boton-flotante');
let cuerpo = document.querySelector('body');
let logo = document.querySelector('#logo');

carga();

bdark.addEventListener('click', e =>{
    cuerpo.classList.toggle('darkmode');
    guardado(cuerpo.classList.contains('darkmode'));
});

function carga(){
    let darkmode= localStorage.getItem('darkmode');
    if(!darkmode){
        guardado('false');
    }else if(darkmode=='true'){
        cuerpo.classList.add('darkmode');
    }
}
function guardado(value){
    localStorage.setItem('darkmode', value);
}


//***************************************************************************/
$("#formValidation").validate({
    rules: {
        email: "required",
        titulo: "required",
        mensaje: "required"
    },
    messages: {
        email: "Se requiere un correo",
        titulo: "Por favor introduzca un Titulo a su correo",
        mensaje: "Agreguele contenido al mensaje"
    }
});


