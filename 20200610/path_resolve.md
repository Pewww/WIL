## path.resolve()

```javascript
path.resolve([...paths]);
```
의 형태를 가지며, ...paths의 인자들은 항상 String이어야 한다.

경로들을 묶어 새로운 경로를 반환하는데, 오른쪽에서 왼쪽으로 경로를 읽는다는 특징을 가진다.

상대 경로인 './폴더명'나 '폴더명'을 적을 경우 이전 경로에 합쳐지지만, '/폴더명'는 절대 경로로 인식하여 그 경로를 바로 반환한다.

예시는 아래와 같다.
```javascript
path.resolve('/foo', './bar'); // '/foo/bar'

path.resolve('/foo', '/bar'); // '/bar'

path.resolve('/foo', '/bar', 'baz'); // '/bar/baz'
```
