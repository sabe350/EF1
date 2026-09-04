document.getElementById("signupform").addEventListener("submit", function(event){
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    let mail = document.getElementById("mail").value;
    let phone = document.getElementById("phone").value;
    let terminos = document.getElementById("terminos").value;

    let mensaje2 = document.getElementById("mensaje2");

    if (nombre && apellido && password && password2 && mail && phone != null){
        mensaje2.innerHTML = '<div class="alert alert-success"> Registro exitoso, redirigiendo.... </div>';
    }else{
        mensaje2.innerHTML = '<div class="alert alert-danger"> Debe rellenar todos los campos </div>';
    }

    if (password2 != password){
        mensaje2.innerHTML = '<div class="alert alert-danger"> Contraseñas no coinciden </div>';
    }

    if (mail.match("@")=== null){
        mensaje2.innerHTML = '<div class="alert alert-danger"> Debe ingresar una direccion de correo valida </div>';
    }

    if (phone.startsWith(9) === false){
        mensaje2.innerHTML = '<div class="alert alert-danger"> Debe ingresar un numero valido </div>';
    }
    if (phone.lenght > 9 || phone.lenght < 9){
        mensaje2.innerHTML = '<div class="alert alert-danger"> Debe ingresar un numero valido </div>';
    }

    if (document.getElementById("terminos").checked){

    }else{
        mensaje2.innerHTML = '<div class="alert alert-danger"> Debe aceptar los terminos y condiciones </div>';
    }
});