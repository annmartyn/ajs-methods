import Zombie from '../zombie.js';

test('creating new Zombie', () => {
    const zombie = new Zombie('Larry', 'Zombie');

    const expected = {
        name: 'Larry',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    };

    expect(zombie).toEqual(expected);
});