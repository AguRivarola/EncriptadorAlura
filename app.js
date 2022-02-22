// Bienvenidos y Bienvenidas a nuestro primer desafío!

// Durante estas dos semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

//     La página debe tener campos para
//     inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
//     El resultado debe ser mostrado en la pantalla.

// Extras:
// - Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.

// Tenemos un periodo de tiempo de dos semanas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

//     La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.
//     En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
//     En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.
//     Por fin, en la columna Concluido estarán los elementos ya concluidos.

// El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, pero no será evaluada.

// Buen proyecto!

/* -------------------------------------------------------------------------- */
/*                              Capturo elementos                             */
/* -------------------------------------------------------------------------- */
let botones = document.querySelectorAll('.btns input');
let btnEncriptar = document.getElementById('encriptar');
let btnDesencriptar = document.getElementById('desencriptar');
let texto = document.getElementById("textoBase");
let resultado = document.querySelector(".texto");
let btnCopy = document.getElementById("copy");


/* -------------------------------------------------------------------------- */
/*                            funcionalidad pagina                            */
/* -------------------------------------------------------------------------- */
texto.focus();
botones.forEach(btn => {
    btn.onclick = function (e) {
        btn.style = 'box-shadow: none'
    }
});
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopy.onclick = copiarTexto;

/* -------------------------------------------------------------------------- */
/*                              Declaro Funciones                             */
/* -------------------------------------------------------------------------- */
function validacion(str, btn) {
    let valores = ["ai", "enter", "imes", "ober", "ufat"];
    let bandera = true;
    let i = 0;
    let regExp = /[áéíóúäü*|\"\/:<>[\]{}`\\()';@&$0-9]/;
    if (str == "") {
        resultado.innerText = "¡Ingrese algo!";
        return false;
    }
    if (regExp.test(str)) {
        resultado.innerText = "¡No se valen caracteres especiales o números!";
        return false;
    }
    if (btn === "desencriptar") {
        valores.forEach(val => {
            if (str.indexOf(val) == -1) {
                i++;
            }
        });
        if (i>=5) {
            bandera = false;
            resultado.innerText = "¡Ese texto no está encriptado!";
        }
    }
    return bandera;
}
function encriptar() {
    let textoBase = texto.value.toLowerCase();
    if (!validacion(textoBase, "encriptar")) {
        return;
    }
    let textoEncriptado = textoBase.split('');
    textoEncriptado.forEach((letra, i) => {
        switch (letra) {
            case "a":
                textoEncriptado.splice(i, 1, "ai");
                break;
            case "e":
                textoEncriptado.splice(i, 1, "enter");
                break;
            case "i":
                textoEncriptado.splice(i, 1, "imes");
                break;
            case "o":
                textoEncriptado.splice(i, 1, "ober");
                break;
            case "u":
                textoEncriptado.splice(i, 1, "ufat");
                break;

            default:
                break;
        }
    });
    resultado.innerHTML = textoEncriptado.join('');
    texto.value = '';
}
function desencriptar(e) {
    let textoEncriptado = texto.value.toLowerCase();

    if (!validacion(textoEncriptado, "desencriptar")) {
        return;
    }
    let textoDesencriptado = textoEncriptado.split('');
    textoDesencriptado.forEach((letra, i) => {
        switch (letra) {
            case "a":
                textoDesencriptado.splice(i, "ai".length, "a");
                break;
            case "e":
                textoDesencriptado.splice(i, "enter".length, "e");
                break;
            case "i":
                textoDesencriptado.splice(i, "imes".length, "i");
                break;
            case "o":
                textoDesencriptado.splice(i, "ober".length, "o");
                break;
            case "u":
                textoDesencriptado.splice(i, "ufat".length, "u");
                break;

            default:
                break;
        }
    });
    resultado.innerHTML = textoDesencriptado.join('');
    texto.value = '';

}

function copiarTexto() {
    let textoCopy = document.querySelector('.texto')
    textoCopy.ariaSelected;
    // textoCopy.setSelectionRange(0,99999999);

    navigator.clipboard.writeText(textoCopy.innerText)
    texto.value = '';
    texto.focus();
}

