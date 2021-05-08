## Record Access Permission

현재 오디오 관련 개인 프로젝트를 진행중이다.

프로젝트를 진행하며, 하나씩 알게되는 내용들을 정리해보려고 한다.

사용자에게 마이크 액세스 권한이 부여됐는지 확인할 때, 해당 메서드를 활용할 수 있는데

```javascript
window.navigator.permissions.query({
  name: 'microphone'
}).then(({status}) => {
  // Do something with status
})
```

상태가 아래와 같이 3가지로 나뉜다.

1. granted: 사용자에게 마이크 액세스 권한이 부여된 상태이다.

2. prompt: 사용자에게 마이크 엑세스 권한이 부여되지 않았고, getUserMedia 호출 시 메시지를 표시한다.

3. denied: 마이크 액세스가 차단되어 이용할 수 없는 상태이다.

<br>

현재, 로직의 분리와 범용성을 위해 `checkPemission`이라는 함수로 분리하여 사용중인데, 형태는 아래와 같다.

```typescript
export default async function checkPermission(): Promise<PermissionState> {
  const {state} = await window.navigator.permissions.query({
    name: 'microphone'
  });

  return state;
}
```
