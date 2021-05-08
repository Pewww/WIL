## String.prototype.repeat()

우연히 페북을 보다가 repeat이라는 못 보던 메서드를 발견해서 찾아봤다.

**repeat(n)** 메서드는 문자열을 주어진 횟수(n)만큼 반복하여 붙인 새로운 문자열을 반환한다. (아무것도 넘겨주지 않았을 때는 빈 문자열을 반환한다!)

```javascript
'hello'.repeat(2); // 'hellohello'
```

```javascript
// *
// **
// ***
// 형태의 별을 콘솔에 출력하고자 할 때

for (let i = 1; i <= 3; i++) {
  console.log('*'.repeat(i));
}
```

여기서 n은 0과 그 이상의 양의 정수이며, 음수일 시 문자열 그대로가 반환되는 것이 아닌 <i>Uncaught RangeError</i>가 발생한다.

n이 무한대일 때와 반환되는 문자열이 최대 문자열의 크기를 넘을 경우에도 역시 예외가 발생한다는 점!
