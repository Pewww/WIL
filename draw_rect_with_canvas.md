## Draw rect with canvas

우리는 **canvas** 엘리먼트를 통해 고정 크기의 드로잉 영역을 생성하고, 하나 이상의 렌더링 컨텍스트를 노출하여, 출력할 컨텐츠를 생성하고 다룰 수 있다.

그렇기에, 사각형을 그리기 위해서는 먼저 도화지와 같은 존재인 canvas 엘리먼트가 DOM 상에 존재해야 한다.

```javascript
// 이미 있을 경우
const canvas = document.getElementById('canvas');

// 새로 생성하는 경우
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
```

캔버스는 처음에 비어있기 때문에, 무언가를 표시하기 위해서는 렌더링 컨텍스트에 접근해야 한다.<br>
getContext() 메서드를 이용하여 렌더링 컨텍스트에 접근할 수 있고, 그 후 이와 관련된 여러 기능(함수)들을 사용할 수 있게 된다.

```javascript
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');
```

보통은 위와 같이 2D 렌더링 컨텍스트를 다루지만, WebGL이나 OpenGL을 사용하는 곳들은 3D 컨텍스트를 사용한다.

---

이제 실제로 사각형을 그려볼 차례이다.<br>
사각형을 그릴 때 사용하는 메서드는 fillRect이며, fillStyle 메서드를 통해 배경색을 변경할 수 있다. (기본 배경색은 검정!)

fillRect 메서드는 x축, y축, 가로 길이, 세로 길이 총 4개의 인자를 받고, 실제 예시 코드는 아래와 같다.

```javascript
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

ctx.fillStyle = '#fff';
ctx.fillRect(0, 50, 150, 150);
```

---

어떤 이벤트나 특정 동작에 대해 사각형의 위치를 바꾸고 싶을 때는 단순히 x나 y의 좌표를 움직이는 것이 아니라, 기존의 사각형을 제거한 후 변경된 좌표에 새로운 사각형을 그리는 방식으로 코드를 작성해야 한다.

그렇지 않으면, 계속해서 새로운 렌더링 컨텍스트가 생성되기 때문에 의도치 않은 결과가 나타날 수 있다.

```javascript
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

// 기존 사각형
ctx.fillRect(0, 50, 150, 150);

// 새로운 사각형을 그리기 위해 기존 사각형을 제거
ctx.clearRect(0, 50, 150, 150);

// 새로운 사각형 생성
ctx.fillRect(100, 200, 150, 150);
```
