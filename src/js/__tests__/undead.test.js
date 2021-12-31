import Undead from '../undead.js';
  
test('creating new Undead', () => {
    const undead = new Undead('Harry', 'Undead');

    const expected = {
        name: 'Harry',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    };

    expect(undead).toEqual(expected);
});