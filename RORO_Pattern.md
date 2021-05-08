## RORO Pattern

RORO는 "**R**eceive an **O**bject, **R**eturn an **O**bject"의 줄임말로 자바스크립트의 디자인 패턴들 중 하나이다.

ES6부터 지원하는 destructuring 문법으로 인해 가능해졌으며,

1. 더 명료한 인수의 기본 값
2. 명명된 인수
3. 더 많은 정보의 반환
4. 함수 합성의 용이함

과 같은 장점들이 존재한다.

실제 RORO 패턴을 적용하기 전과 후의 예시는 아래와 같다.

```typescript
// Before
function getRect(width: number, height: number, backgroundColor?: string, positionX = 20, positionY = 20) {
  // Do something
}

getRect(100, 200, null, null, 30);

// After
interface IGetRectParams {
  width: number;
  height: number;
  backgroundColor?: string;
  positionX?: number;
  positionY?: number;
}

function getRect({
  width,
  height,
  backgroundColor,
  positionX = 20,
  positionY = 20
}: IGetRectParams) {
  // Do something
}

getRect({
  width: 100,
  height: 200,
  positionY: 30
});
```

불필요하게 null이나 undefined 등을 넘겨주지 않고 내가 필요한 값만 넘겨주니 구문이 훨씬 직관적이고 깔끔하게 보인다.

하지만, 해당 패턴을 사용하지 않아도 의미를 충분히 담을 수 있는 경우가 있고, 오히려 사용하지 않을 때 더욱 직관적인 의미를 주는 경우도 물론 있다.

상황을 잘 따져가며 사용하면 될 것 같다.

<br>

참고 자료: [https://taegon.kim/archives/8058](https://taegon.kim/archives/8058)
