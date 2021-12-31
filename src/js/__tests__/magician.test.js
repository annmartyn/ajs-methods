import Magician from '../magician.js';

test('creating new Magician', () => {
    const magician = new Magician('Sally', 'Magician');

    const expected = {
        name: 'Sally',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    };

    expect(magician).toEqual(expected);
});