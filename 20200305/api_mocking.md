## API Mocking

(들어가기에 앞서 모든 예제들은 불필요한 코드를 제외한다.)

**Mocking**은 단위 테스트(= 유닛 테스트)를 작성할 때, 해당 코드가 의존하는 부분을 가짜로 대체하는 기법을 말한다.

보통 테스트하려는 코드가 의존하는 부분을 사용자가 직접 생성하기 부담스러운 경우 mocking이 많이 사용되며, 데이터베이스나 API 관련 테스트 코드를 작성함에 있어서도 유용하게 활용된다.

Mocking은 실제 객체인 척 하는 가짜 객체를 생성하는 매커니즘을 제공하며, 쉽게 말해 *진짜인 척 하는 가짜?ㅋㅋ*라고 이해하면 편할 것 같다.

현재 테스트 코드 작성을 위해 사용중인 Jest에서는 Mock Function(줄여서 모의 함수라고 하겠음~)에 대한 API를 현재 제공하고 있으며, mocking의 특성에 맞게 해당 모의 함수를 사용하면 테스트가 실행되는 동안 함수의 실제 구현을 지우고 함수가 어떻게 호출되었는지 등의 정보들을 기억하기 때문에, 내부적으로 어떻게 사용되고 있는지에 대한 검증이 쉽게 가능하다.

실제 Mock Function에 대한 간단한 예시는 아래와 같다.
```javascript
    const mockFn = jest.fn(num => num + 1);
    
    const numbers = [1, 2, 3];
    const increasedNumbers = numbers.map(mockFn);
    
    // Mock Function이 호출된 횟수
    expect(mockFn.mock.calls.length).toBe(3);
    
    // 실행 후 결과
    expect(increasedNumbers).toEqual([2, 3, 4]);
```
또한, mockReturnValue를 이용하여 어떤 값을 리턴해야 할지 역시 설정이 가능하며,
```javascript
    const mockFn = jest.fn();
    mockFn.mockReturnValue('Hello World!');
    
    const text = mockFn();
    expect(text).toBe('Hello World!');
```
mockResolvedValue를 이용해 비동기 함수의 제작 역시 가능하다. (물론, 이외에도 여러 작업이 가능함)
```javascript
    const mockFn = jest.fn();
    mockFn.mockResolvedValue('Hello World!');
    
    mockFn().then(text => {
    	console.log(text); // Hello World!
    });
```

<br>
따라서, 이 Mocking을 이용하여 실제 API를 호출하는 코드들에 대한 테스트 코드를 작성할 수 있다. (A)

```javascript
    const getUserMockFn = jest.fn();
    const mockUserData = {
    	name: 'Pewww',
    	age: 21,
    	gender: 'male'
    };
    
    // axios 객체의 get 함수가 항상 안정적으로 결과를 반환하도록 mocking 한 것
    axios.get = getUserMock.mockResolvedValue(mockUserData);
    
    const getUser = () => {
    	return axios.get('~~~~');
    };
    
    getUser().then(user => {
    	expect(user).toHaveProperty('name', 'Pewww');
    	~~~
    });
```
또한, 아래와 같이 Mocking을 이용하지 않고도 테스트 코드를 작성하는 것 역시 가능하다. (B)
```javascript
    const getUser = () => {
    	return axios.get('~~~~');
    };
    
    getUser().then(user => {
    	expect(user).toHaveProperty('name', 'Pewww');
    	~~~
    });
```

<br>
다만, 여기서 간과한 하나의 사실이 있는데..

바로, **테스트는 언제 실행되든 항상 같은 결과를 내야한다** 라는 점이다. (Tests should always be deterministic.)

B와 같은 테스트 코드는 단독으로 고립되어 있지 않고 외부 상황에 의존하기 때문에, 네트워크가 불안정하거나 단절된 경우 혹은 백엔드 측에서 제공하는 API에 문제가 있을 경우, 분명 오류가 발생하고 결국 실패하게 된다.

그렇기에 우리는 A와 같이 Mocking을 활용하여 어떤 상황에서든 함수(혹은 기타 등)가 항상 안정적으로 값을 반환할 수 있게 끔 만드는 것이 중요하다.

<br>
=== 기타 사항 ===

타입스크립트 인터페이스를 통해 임의의 데이터로 Mock 객체를 만드는 라이브러리가 존재한다.

[https://github.com/google/intermock](https://github.com/google/intermock)

[https://google.github.io/intermock/](https://google.github.io/intermock/)

```typescript
// 실제 예시

interface User {
   firstName: string;
   lastName: string;
   username: string;
   emailAddress: string;
}

interface SchoolRecord {
   startDate: string;
   endDate: string;
   isActive: boolean;
   grades: number[];
}

interface Student extends User {
   schoolRecord: SchoolRecord;
}

// Student 인터페이스를 기반으로 한 데이터
{
  "Student": {
    "firstName": "Etha",
    "lastName": "Hartmann",
    "username": "Conner.Luettgen",
    "emailAddress": "Leo63@gmail.com",
    "schoolRecord": {
      "startDate": "Sat Oct 12 2019 05:13:22 GMT+0900 (한국 표준시)",
      "endDate": "Wed Sep 30 2020 14:08:09 GMT+0900 (한국 표준시)",
      "isActive": true,
      "grades": [
        26951,
        87812,
        88475,
        12196,
        24208
      ]
    }
  }
};
```

일일이 데이터를 작성하지 않아도 되기 때문에 편리함을 제공해주고 데이터를 확장하는데에 있어서도 큰 이점이 있을 것 같다.
