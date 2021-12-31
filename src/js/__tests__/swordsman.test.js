import Swordsman from '../swordsman.js';

test('creating new Swordsman', () => {
    const swordsman = new Swordsman('Ron', 'Swordsman');

    const expected = {
        name: 'Ron',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    };

    expect(swordsman).toEqual(expected);
});