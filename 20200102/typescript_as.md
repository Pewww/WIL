## Typescript - as 키워드

타입스크립트에서 as 키워드는 Type Assertion으로, 컴파일러가 객체를 컴파일러가 유추하는 유형과 다른 유형으로 간주하도록 컴파일러에 지시하는 역할을 한다.<br><br>

```typescript
const obj = {};
obj.a = 3; // Error: property 'a' does not exist on `{}`
obj.b = 'str'; // Error: property 'b' does not exist on `{}`
```
다음과 같은 상황에서 as는 아래와 같은 형식으로 사용될 수 있다.
```typescript
interface IObj {
  a: number;
  b: string;
}

const obj = {} as IObj;
obj.a = 3;
obj.b = 'str';
```
<br>
하지만, 아래와 같이 두 타입이 할당(호환?) 가능한 상태가 아닐 경우 타입스크립트는 에러를 발생시킨다.

```typescript
function handleEvent(event: Event) {
  const element = event as HTMLElement; // Error: Neither 'Event' nor type 'HTMLElement' is assignable to the other
}
```
이 경우,
```typescript
function handleEvent(event: Event) {
  const element = event as any as HTMLElement;
}
```
처럼 double assertion을 사용할 수 있다.<br>
any를 사용함으로써 모든 유형과 호환된다는 것을 알리며, 이로 인해 컴파일러는 더 이상 에러를 발생시키지 않는다.<br><br>
( 내가 원하는 타입을 유지(?)시키고 싶을 때 사용하는 것 같은데 일종의 꼼수 같아 보이기도 한다.<br>아직 깊은 이해가 부족한 것 같다는 생각이... )
