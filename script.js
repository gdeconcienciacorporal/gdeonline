

function validarLogin() {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

    // Aquí puedes agregar la lógica para verificar las credenciales.
    // Por ejemplo, puedes compararlas con valores predefinidos o enviarlas a un servidor para su validación.
    // En este ejemplo, simplemente verificaré si el usuario es "admin" y la contraseña es "12345".
if (username === "admin" && password === "12345" || username === "jazmin" && password === "1234")  {
        alert("Inicio de sesión exitoso");
        window.location.href = "https://gdeconcienciacorporal.github.io/gdeonlinejazmin/"; // Redirige al usuario a otroarchivo.html
        return false; // Evita que el formulario se envíe
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
        return false; // Evita que el formulario se envíe
    }
