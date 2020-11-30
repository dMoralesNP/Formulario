
const formulario = document.getElementById('Formulario');
const nombre = document.getElementById('nombre');
const errorNombre = document.getElementById('errorNombre');
const apellidos = document.getElementById('apellidos');
const errorApellido = document.getElementById('errorApellido');
const dni = document.getElementById('dni');
const errorDni = document.getElementById('errorDni');
const correo = document.getElementById('correo');
const errorCorreo = document.getElementById('errorCorreo');
const tlf = document.getElementById('tlf');
const errorTlf = document.getElementById('errorTel');
const user = document.getElementById('user');
const errorUser = document.getElementById('errorUser');
const fecha = document.getElementById('fecha');
const errorFecha = document.getElementById('errorFecha');


formulario.addEventListener('submit',evento=>{
  let valido =true;
  evento.preventDefault();
  
  if(!dniValido(dni.value)){
    errorDni.className="Errores-activado";
    valido =false;
  }else{
    errorDni.className="error";
  }

  if(nombre.value == ""){
    errorNombre.className="Errores-activado";
    valido =false;
  }else{
    errorNombre.className="error";
  }

  if(fecha.value == ""){
    errorFecha.className="Errores-activado";
    valido =false;
  }else{
    errorFecha.className="error";
  }

  if(user.value == ""){
    errorUser.className="Errores-activado";
    valido =false;
  }else{
    errorUser.className="error";
  }

  if(apellidos.value == ""){
    errorApellido.className="Errores-activado";
    valido =false;
  }else{
    errorApellido.className="error";
  }

  if(!correoValido(correo.value)){
    errorCorreo.className="Errores-activado";
    valido =false;
  }else{
    errorCorreo.className="error";
  }

  if(tlf.value == ""){
    errorTel.className="Errores-activado";
    valido =false;
  }else{
    errorTel.className="error";
  }
  if(valido){
    alert("Formulario enviado");
    formulario.reset;
  }
  

});
formulario.addEventListener('reset',evento=>{
  alert("Se va a resetear el formulario")
  formulario.reset;
  errorApellido.className="error";
  errorCorreo.className="error";
  errorDni.className="error";
  errorFecha.className="error";
  errorFecha.className="error";
  errorNombre.className="error";
  errorTlf.className="error";
  errorUser.className="error";
});

function dniValido(dni2) {
  return /^[0-9]{8}[A-Z]$/.test(dni2);
}

function correoValido(correo2) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo2);
}

function tlfValido() {
  
  return /^(\d{9})$/.test(tlf);
}


function limpiarFormulario() {
  document.getElementById("miForm").reset();
}


