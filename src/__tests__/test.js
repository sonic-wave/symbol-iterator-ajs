import Character from '../Character';
import Team from '../Team';

const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char2 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

test('Character test', () => {
  const expected = char1;
  const result = new Character(expected);
  expect(result).toEqual(expected);
});

test('Team test', () => {
  const expected = { characters: [new Character(char1), new Character(char2)] };
  const result = new Team(new Character(char1), new Character(char2));
  expect(result).toEqual(expected);
});
