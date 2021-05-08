// Abstraction

import MorseCodeFunc from './MorseCodeFunc';

export default class MorseCode {
  private func: MorseCodeFunc;

  constructor(func: MorseCodeFunc) {
    this.func = func;
  }

  public dot() {
    this.func.dot();
  }

  public dash() {
    this.func.dash();
  }

  public space() {
    this.func.space();
  }
}
