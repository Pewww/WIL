## Variable to Regex

개발 중, 폼 입력 부분에서 이메일 -> 네이버 이메일로 변경되는 상황이 발생하였다.

기존에는
```typescript
interface IValidateRegex {
  VALIDATE_NUMBER_ONLY: [RegExp, string];
  .
  .
  .
}

export const VALIDATE_REGEX: IValidateRegex = {
  VALIDATE_NUMBER_ONLY: [/^[0-9]+$/, '숫자만 가능합니다.'],
  .
  .
  .
};
```
의 형태로 Validates 정보를 관리하고 있었는데, 이미 VALIDATE_EMAIL가 존재하는 상태였다.

처음에는 단순히 VALIDATE_NAVER_EMAIL이라는 필드를 추가하려고 했었는데, 추후 다음이나 구글 등의 특정 이메일을 체크해야 할 경우를 대비하여 정규식에 변수를 넘기는게 나을 것 같다는 생각이 들었다.

```typescript
interface IValidateRegex {
  VALIDATE_SPECIFIC_EMAIL: (staticAddress: {
    name: string;
    value: string;
  }) => [RegExp, string];
  .
  .
  .
}

export const VALIDATE_REGEX: IValidateRegex = {
  VALIDATE_SPECIFIC_EMAIL: ({name, value}) => [new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@'+ value +'$'), `잘못된 ${name} 이메일 형식입니다.`],
  .
  .
  .
}

// 실제 사용
const {VALIDATE_SPECIFIC_EMAIL} = VALIDATE_REGEX;
const [naverEmailRegex] = VALIDATE_SPECIFIC_EMAIL({
  name: '네이버',
  value: 'naver.com'
});

.
.
.

if (!naverEmailRegex.test(url)) {
  // Do something
}
```
위와 같은 방법으로 해겷하였고, RegExp를 통해 정규식을 컴파일 할 경우에는 앞 뒤의 '/' 를 빼주는 것이 중요하다.
