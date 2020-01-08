## Object.defineProperty()
define property 단어 그대로 Object.defineProperty 메서드는 객체에 직접 새로운 속성을 정의하거나 이미 존재하는 속성을 수정한 후, 그 객체를 반환하는 역할을 한다.<br>
```javascript
Object.defineProperty(obj, prop, descriptor)
```
구문은 다음과 같은 형태를 띄고 있고, 각 파라미터는

- obj: 속성을 정의한 객체 
- prop: 새로 정의하거나 수정하려는 속성의 이름 또는 Symbol
- descriptor: 새로 정의하거나 수정하려는 속성을 기술하는 객체

를 의미한다.<br><br>
여기서 가장 중요한 descriptor는 객체로 나타내며,

1. configurable
2. enumerable
3. value
4. writable

위의 4개의 키를 선택 사항으로 가진다.

첫 번째, configurable은 기본적으로 true로 설정되어 있고 false로 변경할 시, 객체에서 해당 프로퍼티를 제거할 수 없게 된다.
```javascript
const obj = {
  a: 1,
  b: 2
};

Object.defineProperty(obj, 'a', {
  configurable: false
});

delete obj.a;
delete obj.b;

console.log(obj); // {a: 1}
```
즉, 위 코드와 같이 delete 키워드를 사용하더라도 해당 프로퍼티는 제거되지 않으며, 한 번 false로 설정할 시 다시 true로 변경할 수 없다.<br><br>
두 번째, enumerable 역시 기본적으로 true로 설정되어 있고, 객체의 속성을 열거할 시 노출이 되는가에 대한 여부를 나타낸다.

for-in 루프를 돌 때, enumerable이 false로 설정되어 있으면 노출되지 않는다.
```javascript
const obj = {
  a: 1,
  b: 2
};

Object.defineProperty(obj, 'a', {
  enumerable: false
});

for (const key in obj) {
  console.log(key); // b만 출력
}
```
<br>
세 번째, value는 실제 데이터 값을 포함하며, 프로퍼티의 값을 읽는 위치이자 새로운 값을 쓰는 위치이다.

```javascript
const obj = {};

Object.defineProperty(obj, 'a', {
  value: 1
});

console.log(obj); // {a: 1}
```
<br>
마지막, writable은 프로퍼티의 값을 바꿀 수 있는지에 대한 여부를 나타내며 기본적으로 true로 설정되어 있다.

false로 설정하면 프로퍼티의 값을 변경하려는 작업을 진행힐 시 무시된다.<br>
configurable과 마찬가지로 한 번 false로 설정하면 다시 true로 되돌릴 수 없다는 특징을 가진다.
```javascript
const obj = {
  a: 1
};

Object.defineProperty(obj, 'a', {
  writable: false
});

obj.a = null;

console.log(obj); // {a: 1}
```
