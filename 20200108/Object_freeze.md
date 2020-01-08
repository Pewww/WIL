## Object.freeze
말 그대로 객체를 얼린다.

```javascript
Object.freeze(객체명);
```
과 같은 형태로 사용하며,
1. 객체의 확장이 불가능하다.
2. 객체의 속성들은 삭제가 불가능하다.
3. 객체의 속성들은 내부속성을 수정하는 것이 불가능하다.
4. 객체의 속성들은 새로운 값의 할당이 불가능하다.

의 특징을 가진다.

다만, 속성 - 값 쌍에서만 먹히기 때문에(= 얕다.) 중첩된 객체 내부의 객체 값 또한 변경이 가능하다.

예를 들어,
```javascript
const obj = {
  a: 1
};

Object.freeze(obj);

obj.a = 5;

console.log(obj); // {a: 1}
```
위 예시의 경우, obj의 a 속성의 값은 변경할 수 없지만,
```javascript
const obj = {
  a: {
    b: 2
  }
};

Object.freeze(obj);

obj.a.b = 10;

console.log(obj); // {a: {b: 10}}
```
와 같이 중첩된 객체 내부에서의 속성 값 변경은 가능하다.
<br>
따라서, Mozila에서는 deepFreeze() 코드를 제시하고 있는데 이는 아래와 같다.
```javascript
function deepFreeze(object) {

  // 객체에 정의된 속성명을 추출
  var propNames = Object.getOwnPropertyNames(object);

  // 스스로를 동결하기 전에 속성을 동결
  
  for (let name of propNames) {
    let value = object[name];

    object[name] = value && typeof value === "object" ? 
      deepFreeze(value) : value;
  }

  return Object.freeze(object);
}

var obj2 = {
  internal: {
    a: null
  }
};

deepFreeze(obj2);

obj2.internal.a = 'anotherValue'; // 실패
obj2.internal.a; // null
```
아마 객체가 가지고 있는 모든 속성에 대해 configurable과 writable을 false로 만드는게 아닌가 생각한다..

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)