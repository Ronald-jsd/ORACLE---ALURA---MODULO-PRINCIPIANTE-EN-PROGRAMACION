/**
 * Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
 */
let titulo = document.querySelector('h1');
titulo.innerHTML='Hora del Desafío';
/**Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console". */
function seleccionado(){
    console.log('El botón fue apretado');
}

/**
 * Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
 */
function question(){
    let ciudad = prompt('Escriba un nombre de la ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acordé de ti.`);
}

/**
 * Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
 */
function mensaje(){
    alert('Yo amo JS');
}

/**
 * Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
 */
function suma(){
let num1 = parseFloat(prompt('Escriba el primer número de la suma'));
let num2 = parseFloat(prompt('Escriba el segundo número de la suma'));
let suma = num1 + num2;
alert(`El resultado de la suma es: ${suma}`);
}

