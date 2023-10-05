export default class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  [Symbol.iterator]() {
    this.nextId = 0;
    this.current = this.characters[this.nextId];
    return this;
  }

  next() {
    if (this.nextId < this.characters.length) {
      const result = { done: false, value: this.characters[this.nextId += this.nextId] };
      return result;
    }
    return { done: true };
  }
}
