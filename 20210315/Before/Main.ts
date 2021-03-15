import PrintMorseCode from './PrintMorseCode';
import PrintMorseCodeSound from './PrintMorseCodeSound';

export default class Main {
  private printMorseCode: PrintMorseCode;
  private printMorseCodeSound: PrintMorseCodeSound;

  constructor() {
    this.printMorseCode = new PrintMorseCode();
    this.printMorseCodeSound = new PrintMorseCodeSound();
  }

  print() {
    this.printMorseCode.a().b().c();
  }

  printSound() {
    this.printMorseCodeSound.a().b().c();
  }
}
