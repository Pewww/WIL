## Reducer Test

[https://redux.js.org/recipes/writing-tests/#reducers](https://redux.js.org/recipes/writing-tests/#reducers)

"리듀서는 액션을 이전의 상태에 적용한 후 새로운 상태를 반환해야 한다."

함수의 유닛 테스트와 같이 state와 action만 테스트 케이스에 따라 넘겨주고, 변경된 알맞은 값을 반환하는지, 그에 맞게 상태를 잘 변경하는지에 대해 테스트 코드를 작성하면 된다.

실제 예시는 아래와 같다.

```typescript
// food.ts

import {createActions, handleActions, Action} from 'redux-actions';

export type TFoodType = 'jjajang' | 'jjambbong';

interface IFoodState {
  type: TFoodType;
}

export const DEFAULT_FOOD_STATE = {
  type: 'jjajang'
};

export const SAVE_FOOD = 'SAVE_FOOD';

export const {saveFood} = createActions({
  [SAVE_FOOD]: (type: TFoodType) => type,
  // 등등
});

const food = handleActions(
  {
    [saveFood.toString()]: (state: IFoodState, {payload}: Action<TFoodType>) => ({
      ...state,
      type: payload
    })
  },
  DEFAULT_FOOD_STATE
);

export default food;
```

```typescript
// food.test.ts

import food, {
  saveFood,
  DEFAULT_FOOD_STATE,
  SAVE_FOOD
} from '../food';

describe('food reducer 테스트', () => {
  it('saveFood 액션 생성 함수는 액션을 의도한대로 생성해야 한다.', () => { // A
    expect(saveFood('jjajang')).toEqual({
      type: SAVE_FOOD,
      payload: 'jjajang'
    });

    expect(saveFood('jjambbong')).toEqual({
      type: SAVE_FOOD,
      payload: 'jjambbong'
    });
  });

  it('action에 빈 객체를 넘겨 줄 경우 initialState를 반환해야 한다.', () => {
    expect(
      food(DEFAULT_FOOD_STATE, {} as ReduxActions.Action<any>)
    ).toEqual(DEFAULT_FOOD_STATE);
  });

  it(`action에 saveFood('jjambbong')을 넘겨줄 경우 type이 'jjambbong'으로 변경된 객체를 반환해야 한다.`, () => {
    expect(
      food(DEFAULT_FOOD_STATE, saveFood('jjambbong'))
    ).toEqual({
      type: 'jjambbong'
    });
  });
});
```
<br>

### 느낀 점
reducer가 순수 함수이기 때문에 테스트 코드를 작성하기 훨씬 수월했던 것 같다.

다만, **A**에서 현재 액션 생성 함수에 대한 테스트도 진행하고 있는데, 이미 redux-actions를 사용하고 있기 때문에 해당 라이브러리를 믿고 오히려 테스트 케이스를 작성하지 않는 것도 하나의 방법이 될 수 있을 것 같다.

미들웨어 테스트도 빨리 공부해서 적용해봐야징~
