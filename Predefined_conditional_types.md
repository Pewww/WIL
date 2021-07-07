## 사전정의 된 조건부 타입 (Predefined conditional types)

### `Exclude<T, U>`

`T`로 부터 `U`에 할당 가능한 타입들을 제외한다. (Omit과 유사하다.)

```typescript
type Family = 'Mom' | 'Dad' | 'Me';
type FamilyExcludeMe = Exclude<Family, 'Me'>; // 'Mom' | 'Dad'
```

### `Extract<T, U>`

`T`로 부터 `U`에 **할당 가능한** 타입들만 추출한다. (Pick과 유사하다.)

```typescript
type Elements = 'Ground' | 'Water' | 'Plant';
type OnlyPlant = Extract<Elements, 'Plant'>; // 'Plant'
type OnlyWater = Extract<Elements, 'Sky' | 'Water'>; // 'Water'
```

### `NonNullable<T>`

`T`로 부터 `null | undefined`인 타입들을 제거한다.

```typescript
type Flavor = 'Orange' | 'Grape' | 'Apple' | null;
type NonNullableFlavor = NonNullable<Flavor>; // 'Orange' | 'Grapte' | 'Apple'
```

### `ReturnType<T>`

`T`라는 함수 타입의 리턴 타입을 제공한다.

```typescript
function add(a: number, b: number) {
  return a + b;
}

type AddReturnType = ReturnType<typeof add>; // number
```

### `InstanceType<T>`

`T`라는 생성자 함수의 인스턴스 타입을 얻는다.

```typescript
class Calculator {
  private a: number;
  private b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  public add() {
    return this.a + this.b;
  }
}

type CaculatorInstance = InstanceType<typeof Calculator>; // Calculator
type StringInstance = InstanceType<string>; // Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.
```
