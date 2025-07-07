"use strict";
//Modulo para poder ingresar datos desde la consola.
const readline = require(`readline`);
//Crea el interface para que el modulo pueda interacctuar con la consola.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Creamos un array con la estructura de usuario y los rellenamos.
const usuarios = [
    {
        id: 1,
        nombre: "Juan Pérez",
        email: "admin@company.com",
        password: "admin123",
        rol: "admin"
    },
    {
        id: 2,
        nombre: "Maria Garcia",
        email: "manager@company.com",
        password: "manager123",
        rol: "manager"
    },
    {
        id: 3,
        nombre: "Carlos Lopez",
        email: "employee@company.com",
        password: "employee123",
        rol: "employee"
    },
    {
        id: 4,
        nombre: "Ana Martinez",
        email: "guest@company.com",
        password: "guest123",
        rol: "guest"
    }
];
//Variable para almacenar todos los datos del uasuario encontrado.
let usuarioEncontrado;
//Funcion para encontrar el email ingresado entre los email guadados.
function encontrarMail(mailUsuario) {
    usuarios.forEach((usuarios, i) => {
        if (mailUsuario === usuarios.email) {
            usuarioEncontrado = usuarios;
        }
    });
}
;
//Funcion para validar si la contraseña es correcta.
function validarPassword(passwordUsuario) {
    if (passwordUsuario === usuarioEncontrado.password) {
        console.log("La contraseña es correcta");
        mensajeDeInicio();
    }
    else {
        console.log("La constraseña es incorrecta");
    }
}
//Funcion para dar el mensaje de inicio dependiendo del rol del usuario.
function mensajeDeInicio() {
    if (usuarioEncontrado.rol === "admin") {
        console.log(`¡Bienvenido ${usuarioEncontrado.nombre}! Usted accedió como Admin y tiene control total del sistema.`);
    }
    else if (usuarioEncontrado.rol === "manager") {
        console.log(`¡Bienvenido ${usuarioEncontrado.nombre}! Usted accedió como Manager y puede supervisar operaciones.`);
    }
    else if (usuarioEncontrado.rol === "employee") {
        console.log(`¡Bienvenido ${usuarioEncontrado.nombre}! Usted accedió como Employee y puede realizar sus tareas asignadas.`);
    }
    else {
        console.log(`¡Bienvenido ${usuarioEncontrado.nombre}! Usted accedió como Guest y tiene acceso de solo lectura.`);
    }
}
console.log("=".repeat(50));
console.log("                Sistema de log in");
console.log("=".repeat(50));
console.log(" ");
//Pregunta para que el usuario ingrese su mail.
rl.question(`Ingrese su mail:`, (mailIngresado) => {
    //Variable para verificar si el email cumple con el formato.
    const verificadorDeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //If para validar el formato del mail.
    if (verificadorDeEmail.test(mailIngresado)) {
        //Llamar a la funcion para encontrar el email en los que estan guardados.
        encontrarMail(mailIngresado);
        if (usuarioEncontrado != null) {
            //Pregunta para que el usuario ingrse su contraseña.
            rl.question(`Ingrese su contrseña:`, (passwordIngresado) => {
                //If para verificar si la contraseña no es escrita.
                if (passwordIngresado.trim() !== "") {
                    validarPassword(passwordIngresado);
                }
                else {
                    console.log("Debe de intoducir su contraseña");
                }
                //Cierra la conexion entre la consola y el programa.
                rl.close();
            });
        }
        else {
            console.log("Usuario no encontrado");
            rl.close();
        }
    }
    else {
        console.log("El formato del email es invalido");
        rl.close();
    }
});
