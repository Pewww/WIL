## Redux-Mock-Store

redux-mock-store는 리덕스의 비동기 액션 생성자와 미들웨어의 테스트를 위한 Mock Store이다.

실제 공식 예제에서 볼 수 있듯이, (Synchronous actions)
```typescript
import configureStore from 'redux-mock-store' //ES6 modules
const { configureStore } = require('redux-mock-store') //CommonJS

const middlewares = []
const mockStore = configureStore(middlewares)

// You would import the action from your codebase in a real scenario
const addTodo = () => ({ type: 'ADD_TODO' })

it('should dispatch action', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(addTodo())

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: 'ADD_TODO' }
  expect(actions).toEqual([expectedPayload])
})
```
addTodo 액션이 올바른 payload를 반환하는지에 대한 테스트를 진행하는 것을 볼 수 있다.

redux-mock-store는 상태를 업데이트 하지 않고 디스패치에 전달된 작업만 기록하기 때문에, store.dispatch() 구문 실행 후 store.getState()로 변경된 상태를 확인하려 해도 원하는 결과를 얻지 못 한다.

해당 라이브러리가 리듀서 관련 로직이 아닌 액션 관련 로직을 테스트하도록 설계되었기 때문에 이는 어쩔 수 없는 부분인 것 같다. (액션과 리듀서를 결합한 복잡한 테스트는 "redux-actions-assertions"를 살펴보라고 하는데.. 흠...)

어쨌든, [https://github.com/Pewww/WIL/blob/master/20200308/reducer_test.md](https://github.com/Pewww/WIL/blob/master/20200308/reducer_test.md) 의 테스트 코드 예제에서도 이를 활용할 수 있는데, 이는 잘 정리해서 블로그에 올릴 예정😎
