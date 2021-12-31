import Daemon from '../daemon.js';

test('creating new Daemon', () => {
    const daemon = new Daemon('Marry', 'Daemon');

    const expected = {
        name: 'Marry',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    };

    expect(daemon).toEqual(expected);
});