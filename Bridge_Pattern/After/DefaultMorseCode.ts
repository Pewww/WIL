import MorseCodeFunc from './MorseCodeFunc';

export default class DefaultMorseCode implements MorseCodeFunc {
  public dot() {
    console.log('.');
  }

  public dash() {
    console.log('-');
  }

  public space() {
    console.log(' ');
  }
}
