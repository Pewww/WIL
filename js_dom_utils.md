## Javascript DOM utils

[Web Duxit](https://github.com/boostcamp-2020/Project18-B-Web-Duxit) 레포를 구경하다가 utils의 폴더 내의 dom.js를 발견하였는데 내용이 인상적이어서 남겨본다.

내부 코드를 보면 아래와 같이 DOM에 접근하거나 새로운 엘리먼트를 생성하는 코드들이 모두 함수화돼있는 것을 확인할 수 있는데, 재사용하기도 편리하고 사용하는 구문 자체가 훨씬 간결해지는 느낌을 받았다.

```typescript
export const $id = document.getElementById.bind(document);
export const $create = (tag: string) => document.createElement(tag);
```
---
```typescript
export const ROOT = $id('root');
export const BACKGROUND = $id('background');
```
다만, 위 코드 처럼 root와 background가 상수처럼 선언되어 외부로 export 되고 있는점이 처음엔 의아했는데, 어차피 페이지 상에서 공통적으로 참조되는 대상 엘리먼트라면 그리 이상할 것도 없어보인다.
