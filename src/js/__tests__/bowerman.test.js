import Bowerman from '../bowerman.js';

test('creating new Bowerman', () => {
    const bowerman = new Bowerman('Harry', 'Bowerman');

    const expected = {
        name: 'Harry',
        type: 'Bowerman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    };

    expect(bowerman).toEqual(expected);
});