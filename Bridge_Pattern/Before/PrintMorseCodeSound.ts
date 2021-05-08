import MorseCodeSound from './MorseCodeSound';

export default class PrintMorseCode extends MorseCodeSound {
  constructor() {
    super();
  }

  public a() {
    this.dot();
    this.dot();
    this.dash();

    return this;
  }

  public b() {
    this.dot();
    this.dash();
    this.space();

    return this;
  }

  public c() {
    this.dash();
    this.dot();
    this.space();

    return this;
  }
}
