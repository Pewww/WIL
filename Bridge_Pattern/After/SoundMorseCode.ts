import MorseCodeFunc from './MorseCodeFunc';

export default class SoundMorseCode implements MorseCodeFunc {
  public dot() {
    console.log('삡');
  }

  public dash() {
    console.log('뽑');
  }

  public space() {
    console.log(' ');
  }
}
