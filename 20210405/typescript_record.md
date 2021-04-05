## Typescript Record

Record는 타입스크립트의 Utility Types중 일부로 `Record<Keys, Type>` 의 형태이다.

속성 키가 Key이고 속성 값이 Type인 객체 유형을 생성하며, 이 유틸리티는 유형의 속성을 다른 유형에 매칭하는 데에 사용할 수 있다.

### 예시
1. Record를 사용하지 않았을 경우

```typescript
interface CatInfo {
  age: number;
  breed: string;
}

interface Cat {
  a: CatInfo;
  b: CatInfo;
  c: CatInfo;
}

const cat: Cat = {
  a: {
    age: 16,
    breed: 'British Shorthair'
  },
  b: {
    age: 12,
    breed: 'Maine Coon'
  },
  c: {
    age: 10,
    breed: 'Persian'
  }
};
```

2. Record를 사용했을 경우

```typescript
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'a' | 'b' | 'c';

const cat: Record<CatName, CatInfo> = {
  a: {
    age: 16,
    breed: 'British Shorthair'
  },
  b: {
    age: 12,
    breed: 'Maine Coon'
  },
  c: {
    age: 10,
    breed: 'Persian'
  }
};
```

### 추가 정보
기본적으로 `@typescript-eslint` 에서 object 타입을 사용할 경우 린트 에러를 발생시키며, `Record<string, unknown>` 를 대신 사용할 것을 권고하고 있다.

<br>

참고: [https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype)