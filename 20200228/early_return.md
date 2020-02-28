## Early Return

"Early Return"은 함수를 작성하는 개념으로, 함수의 끝에 예상된 긍정적인 결과가 반환되고 나머지 코드는 함수의 목적에 따라 분기되는 경우 가능한 빨리 종료되어야 한다는 일종의 패턴이다.

else문의 수를 0으로 만들 수 있으며, 논리적인 복잡성을 줄임으로써 코드의 양 역시 줄이는 것이 가능하다.

다만, 조건문의 범위와 순서를 잘 고려하지 않고 코드를 배치하게 되면 예상치 못 한 결과를 얻는 등의 문제가 발생할 수 있으므로 상황에 따른 적절한 사용이 중요하다.

```typescript
// Before
function getText<T>(arr: T[]): string {
  let text = '';

  if (Array.isArray(arr)) {
    if (arr.length > 10) {
      text = 'InValid Array';
    } else {
      text = 'Valid Array';
    }
  } else {
    text = 'Parameter is not an Array';
  }

  return text;
}

// After
function getText<T>(arr: T[]): string {
  if (!Array.isArray(arr)) {
    return 'Parameter is not an Array';
  }

  if (arr.length > 10) {
    return 'InValid Array';
  }

  return 'Valid Array';
}
```
