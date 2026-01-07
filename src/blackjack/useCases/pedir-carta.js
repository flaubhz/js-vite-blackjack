// Esta función me permite tomar una carta

/**
 *
 * @param {array<String>} //Pasamos el array de la baraja generada
 * @returns {String} //Devolvemos el valor de la carta solicitada
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}