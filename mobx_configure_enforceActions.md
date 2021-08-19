## mobx configure enforceActions

캡슐화란 객체의 속성과 행위를 하나로 묶고, 외부에 노출되지 않아야 할 구현 내용을 은닉하는 것을 뜻한다.

언어적 측면에서 봤을 때, 외부에 감추는 방법으로는 접근지정자를 활용하여 은닉의 정도를 기술하여 구현하는 것이 대표적이며, 보통 `private` 키워드와 `getter` 메서드를 사용하여 구현하곤 한다.

상태에 대한 접근을 `public` 으로 노출시켰다고 해서 '캡슐화가 되지 않았다.' 라고 단정할 수는 없지만, 분명 아래 예시와 같이 클래스 외부에서 별도의 액션 없이 내부 상태를 변경하는 등의 위험성이 존재할 수 있다.

```typescript
class Person {
  public age: number;

  constructor(age: number) {
    this.age = age;
  }
}

const person = new Person(5);

console.log(person.age); // 5

person.age = 10;

console.log(person.age); // 10
```

이런 위험성을 방지하기 위해 상태 관리 라이브러리인 `mobx` 에서는 초기 세팅 시 `configure` 함수에 넘겨주는 `enforceActions` 옵션을 통해 내부 상태에 대한 변경을 제한한다.

`enforceActions` 는 총 3가지의 상태를 가지며,

1. 'observed (default)'
2. 'never'
3. 'always'

상태가 **'always'** 로 설정될 시 내부 상태는 오로지 액션(`runInAction...etc`)을 통해서만 변경이 가능하도록 고정된다.

>  나머지 두 상태에 대한 설명은 해당 [링크](https://mobx.js.org/configuration.html)에서 확인할 수 있다.

<br>

만약 외부에서 다음과 같이 상태를 직접 변경할 경우 런타임 시 `Since strict-mode is enabled, changing observed observable values outside actions is not allowed.` 에러를 노출시킨다.

```typescript
// If you change inner state directly.
class Person {
  @observable
  public age: number;

  constructor(age: number) {
    this.age = age;
  }
}

const person = new Person(5);

person.age = 10; // Error!
```

![Error occured](https://user-images.githubusercontent.com/23455736/130014573-8da5db8d-c980-429e-ad49-5fb2ef2f91a5.png)
