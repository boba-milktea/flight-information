import { sortFlights } from './sort';

describe('to sort flights by date and time', () => {
    test('should sort flights by departure date and time in ascending order ', () => {
        const input = [
            {
                id: 1,
                departureDate: '2023-08-05 13:45:00'
            },
            {
                id: 2,
                departureDate: '2023-08-20 09:00:00'
            },
            { id: 3, departureDate: '2023-08-05 12:30:00' }
        ];
        const output = [
            { id: 3, departureDate: '2023-08-05 12:30:00' },
            {
                id: 1,
                departureDate: '2023-08-05 13:45:00'
            },
            {
                id: 2,
                departureDate: '2023-08-20 09:00:00'
            }
        ];
        expect(sortFlights(input)).toEqual(output);
    });
    test('should handle a single flight entry', () => {
        const input = [{ id: 1, departureDate: '2023-08-05 13:45:00' }];
        expect(sortFlights(input)).toEqual(input);
    });
    test('does not mutate the original array', () => {
        const input = [
            { id: 1, departureDate: '2023-08-05 13:45:00' },
            { id: 2, departureDate: '2023-08-20 09:00:00' }
        ];

        const inputCopy = [...input];
        sortFlights(input);
        expect(input).toEqual(inputCopy);
    });
    test('should return an empty array if no parameter is passed', () => {
        expect(sortFlights()).toEqual([]);
    });
});
