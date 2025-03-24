/**
 *
 * @param {array} [arr = []] the array to sort by date - time
 * @returns {array} a new array with sorted items by time
 */

export const sortFlights = (arr = []) =>
    [...arr].sort(
        (a, b) => new Date(a.departureDate) - new Date(b.departureDate)
    );
