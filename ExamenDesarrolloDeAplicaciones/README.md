Alumno: Mateo Noba 2do año técnico en desarrollo de software isft 220

Para ejecutar mi programa primero asegurese de utilizar el comando npm i para que se descargen todas los modulos y dependencias.

Una vez al ejecutarlo le pedira que ingrese su mail y contraseña.
Si los datos son ingresados correctamente le mostrara un mensaje de que pudo entrar al programa, dependiendo del rol del usuario el mensaje cambiara. En caso de que la contraseña no coincidan mostrara un mensaje de contrseña incorrecta, si no se ingresa contraseña mostrara un mensaje de que debe de ingresar su contraseña, si se ingresa el mail con el formato incorrecto, le mostrara un mensaje que dice que el formato del mail es invalido, si se ingresa el mail en blanco tirara el mismo mensaje y si el mail no se encuentra en los mails de los usuarios dira usuario no encontrado.

Prompts utilizados con sus respuestas:

Hola chat gpt
¡Hola! 😊 ¿En qué te puedo ayudar hoy?

Como puedo hacer para ingrsar datos a mi programa desde la consola en javascript con node.js?
¡Buena pregunta! Para ingresar datos desde la **consola en Node.js**, tenés varias formas. La más común y sencilla es usando el módulo **`readline`** que viene integrado en Node.js.

---

### ✅ Opción 1: Usar `readline` (forma recomendada)

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cuál es tu nombre? ', (nombre) => {
  console.log(`Hola, ${nombre}!`);
  rl.close();
});
```

---

### ✅ Opción 2: Usar `process.stdin` directamente (más manual)

```js
process.stdout.write('¿Cuál es tu nombre? ');

process.stdin.on('data', (data) => {
  const nombre = data.toString().trim();
  console.log(`Hola, ${nombre}!`);
  process.exit();
});
```

---

### 🔁 Si querés múltiples preguntas:

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cuál es tu nombre? ', (nombre) => {
  rl.question('¿Cuántos años tenés? ', (edad) => {
    console.log(`Hola ${nombre}, tenés ${edad} años.`);
    rl.close();
  });
});
```

---

### 📦 Bonus: Con `promises` (más moderno)

```js
const readline = require('readline').promises;

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const nombre = await rl.question('¿Tu nombre? ');
  const edad = await rl.question('¿Tu edad? ');

  console.log(`Hola ${nombre}, tenés ${edad} años.`);

  rl.close();
}

main();
```

---

¿Querés que lo adapte para pedir varios datos seguidos y guardarlos en un objeto o array?

Que es lo que haces en esta linea?
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
Muy buena pregunta 👌

La línea:

```js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```

lo que hace es **crear una interfaz de lectura/escritura** para interactuar con la **consola**. Vamos parte por parte:

---

### 📦 `readline.createInterface({...})`

Esto **crea una nueva interfaz** que permite **leer datos desde la consola** (`stdin`) y **escribir datos en la consola** (`stdout`).

---

### 🧠 ¿Qué son `input` y `output`?

* `input: process.stdin`
  👉 Le dice a Node.js: *“Escuchá lo que el usuario escribe por teclado”*.

* `output: process.stdout`
  👉 Le dice a Node.js: *“Mostrá los mensajes (como las preguntas) en la consola”*.

---

### 🔧 ¿Y qué es `rl`?

Es un **objeto** que te permite hacer cosas como:

* `rl.question(...)` → hacerle una pregunta al usuario.
* `rl.close()` → cerrar la interfaz cuando ya no la necesitás.

---

### 🧪 Ejemplo completo:

```js
const readline = require('readline');

// Crear la interfaz
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Usarla para pedir un dato
rl.question('¿Cómo te llamás? ', (nombre) => {
  console.log(`Hola, ${nombre}`);
  rl.close();
});
```

---

¿Querés que te explique cómo hacer para leer múltiples datos y guardarlos?

Como puedo verificar si un dato ingresado cumple con cierto formato, por ejemplo que contenga un @?
¡Perfecto! Para **verificar si un dato ingresado cumple con cierto formato** en Node.js (o en cualquier JavaScript), podés usar:

1. **Condicionales simples** (por ejemplo, si contiene un `@`).
2. **Expresiones regulares** (más poderosas y precisas).

---

### ✅ Opción 1: Verificar si contiene `@` (caso simple)

```js
const correo = "ejemplo@gmail.com";

if (correo.includes('@')) {
  console.log("El dato contiene un @");
} else {
  console.log("Formato inválido");
}
```

---

### ✅ Opción 2: Usar expresión regular para validar email (más preciso)

```js
const correo = "ejemplo@gmail.com";
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (regexCorreo.test(correo)) {
  console.log("El correo es válido");
} else {
  console.log("Correo inválido");
}
```

> Esta expresión regular valida que el texto tenga:
>
> * algo antes del `@`
> * un `@`
> * algo después del `@`
> * un punto (`.`)
> * algo después del punto

---

### 🔁 Ejemplo completo con consola:

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresá tu email: ', (email) => {
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regexCorreo.test(email)) {
    console.log("✅ Correo válido");
  } else {
    console.log("❌ Correo inválido");
  }

  rl.close();
});
```

---

¿Querés validar otros formatos también (como DNI, fecha, teléfono, etc.)?

Como puedo hacer para validar si un dato ingresado esta vacio?
¡Muy buena pregunta! Validar si un dato está vacío es fundamental en cualquier entrada de usuario. En **JavaScript con Node.js**, podés hacerlo de varias formas según el tipo de dato que estés manejando.

---

### ✅ Caso simple: Validar si un string está vacío

Supongamos que el usuario ingresó un dato:

```js
const dato = "";
```

Podés validarlo así:

```js
if (dato.trim() === "") {
  console.log("❌ El campo está vacío");
} else {
  console.log("✅ Dato ingresado:", dato);
}
```

---

### 🔎 ¿Por qué `.trim()`?

* El método `.trim()` elimina los espacios en blanco al principio y al final del texto.
* Ejemplo:

  ```js
  "   ".trim()  // → ""
  ```

Así evitás que el usuario ingrese solo espacios vacíos, que no son válidos.

---

### 🧪 Ejemplo completo con `readline`:

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresá tu nombre: ', (nombre) => {
  if (nombre.trim() === "") {
    console.log("❌ No ingresaste ningún valor.");
  } else {
    console.log(`✅ Hola, ${nombre}`);
  }

  rl.close();
});
```

---

### 🧠 También podés escribirlo más corto:

```js
if (!nombre.trim()) {
  console.log("Dato vacío");
}
```

---

¿Querés que te muestre cómo hacer esto para varios campos en secuencia?

Estoy queriendo verificar si se ingreso un dato, y que si no ingresa nada le tire un mensaje de error, pero no me esta funcionando.
Seccion del codigo con error:
rl.question(`Ingrese su mail:`, (mailIngresado: string) => {
    const verificadorDeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(verificadorDeEmail.test(mailIngresado)){
        console.log(`Hola ${mailIngresado}`);
        encontrarMail(mailIngresado);
        rl.question(`Ingrese su contrseña:`, (passwordIngresado: string) => {
            if(passwordIngresado.trim() != " "){
                console.log(`Hola ${passwordIngresado}`);
                validarPassword(passwordIngresado);
            }else{
                console.log("Debe de intoducir su contraseña")
            }
            rl.close();
        });
    }else{
        console.log("El formato del email es invalido")
    }
});
Gracias por compartir el código. El problema está en esta línea:

```ts
if(passwordIngresado.trim() != " ")
```

El error es que **`" "`** (un espacio) **no representa un string vacío**. De hecho, `.trim()` elimina **todos** los espacios, así que si el usuario ingresa uno o varios espacios, `.trim()` lo convierte en `""` (cadena vacía).

---

### ✅ Solución correcta:

```ts
if (passwordIngresado.trim() !== "") {
```

---

### 🔄 Código corregido:

```ts
rl.question(`Ingrese su mail:`, (mailIngresado: string) => {
    const verificadorDeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (verificadorDeEmail.test(mailIngresado)) {
        console.log(`Hola ${mailIngresado}`);
        encontrarMail(mailIngresado);
        
        rl.question(`Ingrese su contraseña:`, (passwordIngresado: string) => {
            if (passwordIngresado.trim() !== "") {
                console.log(`Hola ${passwordIngresado}`);
                validarPassword(passwordIngresado);
            } else {
                console.log("❌ Debe introducir su contraseña");
            }
            rl.close();
        });

    } else {
        console.log("❌ El formato del email es inválido");
        rl.close(); // ¡Importante cerrar si no sigue!
    }
});
```

---

### 🧠 Extra: si querés validar *ambas cosas* (formato y que no esté vacío), podés hacerlo así:

```ts
if (mailIngresado.trim() !== "" && verificadorDeEmail.test(mailIngresado))
```

---

¿Querés que te ayude a agregar un bucle para que repita la pregunta si se deja vacío el campo?

Que significa el !==?
Buena pregunta 👌

En JavaScript (y por lo tanto en Node.js), el operador `!==` significa:

---

### ❗️\*\*"Distinto estrictamente"\*\*

Es decir: **"no es igual, y además es de diferente tipo"**.

---

### 🔍 Comparación:

| Operador | Significado                      | Ejemplo               |
| -------- | -------------------------------- | --------------------- |
| `==`     | Igual **(sin importar tipo)**    | `"5" == 5` → `true`   |
| `===`    | Igual **y del mismo tipo**       | `"5" === 5` → `false` |
| `!=`     | Distinto **(sin importar tipo)** | `"5" != 5` → `false`  |
| `!==`    | Distinto **y de diferente tipo** | `"5" !== 5` → `true`  |

---

### ✅ Ejemplo con `!==`:

```js
const nombre = "";

if (nombre.trim() !== "") {
  console.log("Dato válido");
} else {
  console.log("Dato vacío");
}
```

En este ejemplo, si `nombre.trim()` da `""`, entonces se cumple `nombre.trim() !== "" → false` y entra al `else`.

---

### 🎯 En resumen:

* `!==` es una forma **segura y estricta** de comparar si dos valores **no son iguales en valor ni en tipo**.
* Es recomendable usar `===` y `!==` en vez de `==` y `!=` para evitar errores por conversiones automáticas de tipos.

¿Querés que te muestre más ejemplos o casos donde usar `!==` es útil?

El rl.close() se podria decir que cierra la conexion entre el programa y la consola?
¡Sí! Tu interpretación es bastante acertada. Vamos a explicarlo con más precisión:

---

### 🧱 ¿Qué hace `rl.close()` en Node.js?

El método `**rl.close()**`:

* **Cierra la interfaz de entrada/salida** creada por `readline.createInterface`.
* Detiene la escucha de **`process.stdin`** (entrada del teclado).
* Libera los recursos asociados a esa sesión de consola.

---

### 🧠 En palabras simples:

Sí, **se puede decir que "cierra la conexión entre el programa y la consola"**, específicamente la parte que **escucha al usuario** mediante esa interfaz de `readline`.

---

### 📌 Importante:

* Después de `rl.close()`, si querés volver a preguntar algo al usuario, tendrías que **crear una nueva interfaz** (`readline.createInterface(...)`) porque la anterior ya no está activa.
* Si no usás `rl.close()`, el programa **queda esperando indefinidamente**, como si estuviera esperando más input.

---

¿Querés que te muestre un ejemplo de qué pasa si no lo cerrás o si intentás usarlo después de cerrarlo?

Gracias por la ayuda chat gpt
¡De nada, Mateo! 😊 Me alegra poder ayudarte.

Si más adelante tenés dudas sobre Node.js, programación, diseño, o lo que sea, acá estoy.
¡Mucho éxito con tu proyecto! 🚀

¿Querés que guarde este tema para retomarlo más fácil en otra charla?
