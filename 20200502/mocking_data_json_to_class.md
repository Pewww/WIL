## Change json mocking data to class

보통 데이터 자체를 Mocking 하고자 할 때 아래와 같은 형식을 주로 사용하곤 한다. (A)

```typescript
interface IMockForm<T> {
  data: {
    result: T[];
  }
}

// 데이터 형식은 대충..ㅎㅎ
interface ISunnyMock {
  id: number;
  name: string;
}

interface IWindyMock {
  id: number;
  field: string;
}

export const SUNNY_MOCK: IMockForm<ISunnyMock> = {
  data: {
    result: [
      {id: 1, name: 'A'},
      {id: 2, name: 'B'},
      {id: 3, name: 'C'}
    ]
  }
};

export const WINDY_MOCK: IMockForm<IWindyMock> = {
  data: {
    result: [
      {id: 4, field: 'D'},
      {id: 5, field: 'E'}
    ]
  }
};

// 실제 사용 시
import {SUNNY_MOCK, WINDY_MOCK} from '~~~';

// Do something
```

<br>
이를 다음과 같은 class의 형태로 나타내는 것 또한 가능한데 (B),

```typescript
interface IMockForm<T> {
  data: {
    result: T[];
  }
}

interface IWeatherMock<T, U> {
  createSunny(): IMockForm<T>;
  createWindy(): IMockForm<U>;
}

interface ISunnyMock {
  id: number;
  name: string;
}

interface IWindyMock {
  id: number;
  field: string;
}

class WeatherMock implements IWeatherMock<ISunnyMock, IWindyMock> {
  createSunny() {
    return {
      data: {
        result: [
          {id: 1, name: 'A'},
          {id: 2, name: 'B'},
          {id: 3, name: 'C'}
        ]
      }
    };
  }

  createWindy() {
    return {
      data: {
        result: [
          {id: 4, field: 'D'},
          {id: 5, field: 'E'}
        ]
      }
    };
  }
}

// 실제 사용 시
const {createSunny, createWindy} = new WeatherMock();

const sunnyMock = createSunny();
const windyMock = createWindy();

// Do Something
```

A와 비교 했을 때

1. 같은 레퍼런스를 참조해서 문제가 생길 수 있는 경우를 사전에 방지할 수 있다.

2. 데이터 자체의 불변성 및 안전성의 보장이 가능하다.

의 장점들을 가질 수 있다.

---

유닛테스트는 모든 케이스가 독립적으로 고립된 공간에서 실행되어야 하기 때문에, A 보다는 B의 형태가 더욱 강점이 있을 듯 하다.

참고: [https://imch.dev/posts/how-to-write-a-test-code-about-api-call-with-typescript?fbclid=IwAR2gj3-lz_Ykj7QFL0ZTh5B2W2pDi5Ifs9JS_T1kXM5XW5pGTqwdAY4nkD4](https://imch.dev/posts/how-to-write-a-test-code-about-api-call-with-typescript?fbclid=IwAR2gj3-lz_Ykj7QFL0ZTh5B2W2pDi5Ifs9JS_T1kXM5XW5pGTqwdAY4nkD4)
