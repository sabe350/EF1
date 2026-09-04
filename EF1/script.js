document.getElementById("loginform").addEventListener("submit", function(event){
    event.preventDefault();

    let mail = document.getElementById("mail").value;
    let password = document.getElementById("password").value;

    let mensaje = document.getElementById("mensaje");


    if (mail.match("@")=== null){
        mensaje.innerHTML = '<div class="alert-danger"> Ingrese una direccion de correo valida </div>';
    }

    if (mail === "admin@admin.com" && password === "1234"){
        mensaje.innerHTML = '<div class="alert-danger"> Inicio de sesion correcto, redireccionando...</div>';
    }else{
        mensaje.innerHTML = '<div class="alert-danger"> Credenciales no encontradas </div>';
    }

});

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

    if (nombre || apellido || password || password2 || mail || phone === null){
        mensaje2.innerHTML = '<div class="alert-danger"> Debe rellenar todos los campos </div>';
    }

    if (mail.match("@")=== null){
        mensaje2.innerHTML = '<div class="alert-danger"> Ingrese una direccion de correo valida </div>';
    }

    if (typeof(phone) != Number){
        mensaje2.innerHTML = '<div class="alert-danger"> Debe ingresar un numero valido </div>';
    }

    if (phone.startsWith(9) === false){
        mensaje2.innerHTML = '<div class="alert-danger"> Debe ingresar un numero valido </div>';
    }
    if (phone.lenght > 9 || phone.lenght < 9){
        mensaje2.innerHTML = '<div class="alert-danger"> Debe ingresar un numero valido </div>';
    }

    if (terminos.checked === false){
        mensaje2.innerHTML = '<div class="alert-danger"> Debe aceptar los terminos y condiciones </div>';
    }
});