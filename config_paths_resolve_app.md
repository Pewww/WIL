## config/paths.js 중 resolveApp

CRA로 생성한 프로젝트의 웹팩 설정 내용을 보고 싶어 eject를 진행하였다.

경로와 관련된 부분들을 paths라는 모듈로 따로 분리하여 관리하는 것이 인상적이었다.

다만, module.exports를 하는 시점에서 각 key들의 value를 모두 resolveApp이라는 함수의 인자로 넘기고 있었는데 무슨 역할인지 궁금해서 정리해본다.

resolveApp 함수는

```typescript
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);
```
의 형태이다.

즉, appDirectory에 인자로 받은 relativePath를 묶어 새로운 경로를 반환한다는 의미가 된다. (absolutePath 였으면 appDirectory는 필요가 없었겠지..)

또한, 해당 함수에서 사용하는 appDirectory는 아래와 같다.

```javascript
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
```

fs 모듈의 realPathSync 함수는 받은 인자로 하여금 표준화된 절대 경로를 반환하는 역할을 한다.<br>
-> It returns the canonicalized absolute pathname.

process.cwd() 함수는 현재 작업 디렉토리를 반환하기 때문에, appDirectory 변수에는 현재 작업 디렉토리의 절대 경로가 담긴다.

정리해보자면 resolveApp 함수는 그냥 작업 디렉토리에 맞는 경로를 반환해주는 역할을 한다고 생각하면 될 듯 하다.
