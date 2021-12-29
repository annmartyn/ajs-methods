import * as Char from '../app.js';

test('right char', () => {
  const char = new Char.Bowerman('Harry', 'Bowerman');
  expect(char.name).toBe('Harry');
    expect(char.type).toBe('Bowerman');
    expect(char.health).toBe(100);
    expect(char.level).toBe(1);
    expect(char.attack).toBe(25);
    expect(char.defence).toBe(25);
});

test('right char', () => {
    const char = new Char.Swordsman('Ron', 'Swordsman');
    expect(char.name).toBe('Ron');
    expect(char.type).toBe('Swordsman');
    expect(char.health).toBe(100);
    expect(char.level).toBe(1);
    expect(char.attack).toBe(40);
    expect(char.defence).toBe(10);
});

test('right char', () => {
    const char = new Char.Magician('Marry', 'Magician');
    expect(char.name).toBe('Marry');
    expect(char.type).toBe('Magician');
    expect(char.health).toBe(100);
    expect(char.level).toBe(1);
    expect(char.attack).toBe(10);
    expect(char.defence).toBe(40);
});

test('right char', () => {
    const char = new Char.Undead('Barry', 'Undead');
    expect(char.name).toBe('Barry');
    expect(char.type).toBe('Undead');
    expect(char.health).toBe(100);
    expect(char.level).toBe(1);
    expect(char.attack).toBe(25);
    expect(char.defence).toBe(25);
});

test('right char', () => {
    const char = new Char.Zombie('Larry', 'Zombie');
    expect(char.name).toBe('Larry');
    expect(char.type).toBe('Zombie');
    expect(char.health).toBe(100);
    expect(char.level).toBe(1);
    expect(char.attack).toBe(40);
    expect(char.defence).toBe(10);
});

test('right char', () => {
    const char = new Char.Daemon('Marry', 'Daemon');
    expect(char.name).toBe('Marry');
    expect(char.type).toBe('Daemon');
    expect(char.health).toBe(100);
    expect(char.level).toBe(1);
    expect(char.attack).toBe(10);
    expect(char.defence).toBe(40);
});

test('wrong type', () => {
    const char = () => new Char.Character('Harry', 'Knight');
    expect(char).toThrow('wrong type');
});

test('wrong name', () => {
    const char = () => new Char.Character('HarryCoolestZombie', 'Daemon');
    expect(char).toThrow('wrong name');
});

test('set damage', () => {
    const char = new Char.Daemon('Marry', 'Daemon');
    char.damage(12);
    expect(char.health).toBe(92.8);
})

test('level up', () => {
    const char = new Char.Daemon('Marry', 'Daemon');
    char.levelUp();
    expect(char.level).toBe(2);
})

test('Character 0 Health ', () => {
    const chart = new Char.Swordsman('Marry', 'Swordsman');
    chart.health = 0;
    const t = () => chart.levelUp();
    expect(t).toThrow(new Error("Character's dead"));
})
