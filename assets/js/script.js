/**
 * Convierte una opción numérica en su correspondiente opción de juego ("piedra", "papel" o "tijera").
 * @param {number} opcion - El número de la opción elegida (1 para "piedra", 2 para "papel", 3 para "tijera").
 * @returns {string} La opción de juego correspondiente.
 */
function obtenerOpcion(opcion) {
    const opciones = ["piedra", "papel", "tijera"];
    return opciones[opcion - 1]; // Devuelve la opción elegida por el usuario
}

/**
 * Solicita una opción válida al usuario, mostrando un mensaje específico
 * y validando que la opción esté dentro de un conjunto permitido.
 * @param {string} mensaje - El mensaje que se mostrará al usuario.
 * @param {number[]} opcionesValidas - Un array de números que representan las opciones válidas.
 * @returns {number} La opción elegida por el usuario como un número entero.
 */
function solicitarOpcion(mensaje, opcionesValidas) {
    let opcion;
    while (true) {
        opcion = prompt(mensaje); // Muestra el mensaje y obtiene la opción del usuario
        if (!isNaN(opcion) && opcionesValidas.includes(parseInt(opcion))) {
            break; // Sale del bucle si la opción es válida
        } else {
            alert("Por favor, ingresa un número válido."); // Mensaje de error si la opción no es válida
        }
    }
    return parseInt(opcion); // Devuelve la opción como un número entero
}

/**
 * Solicita al usuario que elija entre "piedra", "papel" o "tijera".
 * @returns {string} La opción elegida por el usuario.
 */
function tiroUsuario() {
    const mensaje = `Ingresa el número de tu opción:
    1. Piedra
    2. Papel
    3. Tijera
    `;
    const opcion = solicitarOpcion(mensaje, [1, 2, 3]); // Solicita una opción válida
    return obtenerOpcion(opcion); // Devuelve la opción elegida por el usuario
}

/**
 * Genera aleatoriamente la opción de la computadora entre "piedra", "papel" o "tijera".
 * @returns {string} La opción elegida por la computadora.
 */
function tiroComputadora() {
    const opcionComputadora = Math.floor(Math.random() * 3) + 1; // Genera un número aleatorio entre 1 y 3
    return obtenerOpcion(opcionComputadora); // Devuelve la opción elegida por la computadora
}

/**
 * Solicita al usuario el número de veces que desea jugar.
 * @returns {number} El número de veces que el usuario desea jugar.
 */
function repeticiones() {
    const mensaje = "Ingresa el número de veces que deseas jugar";
    // Utiliza solicitarOpcion para asegurar que el usuario ingrese un número válido
    return solicitarOpcion(mensaje, Array.from({ length: 100 }, (_, i) => i + 1)); // Devuelve un número entre 1 y 100
}

/**
 * Determina el ganador entre el tiro del usuario y el tiro de la computadora.
 * @param {string} tiroUsuario - La opción elegida por el usuario.
 * @param {string} tiroComputadora - La opción elegida por la computadora.
 * @returns {string} Un mensaje que indica si el usuario ganó, perdió o empató.
 */
function determinarGanador(tiroUsuario, tiroComputadora) {
    if (tiroComputadora === tiroUsuario) {
        return "Es un empate"; // Si ambos eligen lo mismo, es un empate
    } else if (
        (tiroUsuario === "piedra" && tiroComputadora === "tijera") ||
        (tiroUsuario === "papel" && tiroComputadora === "piedra") ||
        (tiroUsuario === "tijera" && tiroComputadora === "papel")
    ) {
        return "¡Felicidades, ganaste!"; // El usuario gana si sus elecciones vencen a las de la computadora
    } else {
        return "¡Perdiste!"; // La computadora gana en cualquier otro caso
    }
}

/**
 * Función principal que controla el flujo del juego.
 * Solicita al usuario cuántas veces desea jugar, realiza los juegos y muestra las estadísticas finales.
 */
function jugar() {
    const tiros = repeticiones(); // Pide al usuario cuántas veces quiere jugar

    // Variables para llevar el conteo de resultados
    let ganados = 0;
    let perdidos = 0;
    let empates = 0;

    for (let i = 0; i < tiros; i++) { // Bucle para realizar el número de juegos solicitados
        const usuarioTiro = tiroUsuario(); // El usuario elige su opción
        alert("El usuario elige: " + usuarioTiro);

        const computadoraTiro = tiroComputadora(); // La computadora elige su opción
        alert("La computadora elige: " + computadoraTiro);

        const resultado = determinarGanador(usuarioTiro, computadoraTiro); // Determina el ganador
        alert("Resultado: " + resultado);

        // Actualiza las estadísticas según el resultado
        if (resultado === "¡Felicidades, ganaste!") {
            ganados++;
        } else if (resultado === "¡Perdiste!") {
            perdidos++;
        } else {
            empates++;
        }
    }

    // Muestra las estadísticas al usuario
    alert(`Estadísticas del juego:
    Ganados: ${ganados}
    Perdidos: ${perdidos}
    Empates: ${empates}`);

    alert("¡Hasta pronto!"); // Despedida al finalizar el juego
}

// Inicia el juego
jugar();
