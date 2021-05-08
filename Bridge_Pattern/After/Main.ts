import DefaultMorseCode from './DefaultMorseCode';
import PrintMorseCode from './PrintMorseCode';
import SoundMorseCode from './SoundMorseCode';

export default class Main {
  private printDefaultMorseCode: PrintMorseCode;
  private printSoundMorseCode: PrintMorseCode;

  constructor() {
    this.printDefaultMorseCode = new PrintMorseCode(
      new DefaultMorseCode()
    );

    this.printSoundMorseCode = new PrintMorseCode(
      new SoundMorseCode()
    );
  }

  public printDefault() {
    this.printDefaultMorseCode.a().b().c();
  }

  public printSound() {
    this.printSoundMorseCode.a().b().c();
  }
}
