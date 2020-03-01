## React Invalid Hook

패키지를 분리할 때, 패키지의 react 버전과 사용하는 곳의 react 버전이 다를 경우 invalid hook 에러가 발생한다.

이를 방지하기 위해 아래와 같은 작업이 필요하다.

1. react 또는 react를 dependencies로 가지고 있는 모듈을 dependencies에서 제거한다.

2. 1번에서 제거한 모듈을 빌드 시 포함하지 않도록 하기 위해 devDependencies로 설정한다.

3. 모듈을 사용할 때, 해당 모듈이 필요하다는 것을 명시하기 위해 peerDependencies에도 추가한다.

```shell
// Before in package.json
{
  .
  .
  .
  devDependencies: {

  },
  peerDependencies: {

  },
  dependencies: {
    "react": "^16.13.0",
    "react-dom": "^16.13.0"
  }
}

// After in package.json
{
  .
  .
  .
  devDependencies: {
    "react": "^16.13.0",
    "react-dom": "^16.13.0"
  },
  peerDependencies: {
    "react": "^16.13.0",
    "react-dom": "^16.13.0"
  },
  dependencies: {

  }
}
```
