## Expectation of 'throw'

```javascript
function onlyString(str) {
  if (typeof str !== 'string') {
    throw new Error('It should be a string');
  }

  // Do something
}
```

해당 함수에 대한 테스트 코드를 작성하고자 할 때 보통 아래 처럼 작성할 것이다.

```javascript
describe('onlyString 함수 테스트', () => {
  it('파라미터의 타입이 string이 아닐 시 Error 객체를 던져야 한다.', () => {
    const param = 101;

    expect(onlyString(param)).toThrow(Error);
  });

  // Other cases
});
```

무슨 문제가 있냐고 생각할 수도 있지만, 테스트가 실행되는 도중에 예외가 발생하기 때문에 해당 테스트는 항상 실패하게 된다.

따라서, expect에 넘기는 대상 (= onlyString(param)) 을 한 번 함수로 감싸줘야 한다.

```javascript
describe('onlyString 함수 테스트', () => {
  it('파라미터의 타입이 string이 아닐 시 Error 객체를 던져야 한다.', () => {
    const param = 101;

    expect(() => onlyString(param)).toThrow(Error);
  });

  // Other cases
});
```

이제 테스트는 정상적으로 통과된다~!
