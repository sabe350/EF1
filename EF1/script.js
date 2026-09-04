document.getElementById("loginform").addEventListener("submit", function(event){
    event.preventDefault();

    let mail = document.getElementById("mail").value;
    let password = document.getElementById("password").value;

    let mensaje = document.getElementById("mensaje");


    if (mail.match("@")=== null){
        mensaje.innerHTML = '<div class="alert alert-danger"> Ingrese una direccion de correo valida </div>';
    }

    if (mail === "admin@admin.com" && password === "1234"){
        mensaje.innerHTML = '<div class="alert alert-success"> Inicio de sesion correcto, redireccionando...</div>';
    }else{
        mensaje.innerHTML = '<div class="alert alert-danger"> Credenciales no encontradas </div>';
    }

});

