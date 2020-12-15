## Hex to Rgb (Color)

<span>#FE205D</span>와 같은 Hex Color가 주어졌을 때 이를 Rgb Color로 변환시키는 방법에 대해 설명해보고자 한다.

### 기본 지식
1. Hex Color는 #RRGGBB의 형식을 취한다.<br>
=> 따라서, #FE5는 #FFEE55와 동일하다.

2. 각 R, G, B의 범위는 00 ~ FF이다. (0 ~ 255) 

### 방법
1. Split

```typescript
function hexToRgb(color: string) {
  const hexWithoutHash = color.slice(1);
  const [r1, r2, g1, g2, b1, b2] = hexWithoutHash.split('');

  const r = parseInt(r1 + r2, 16);
  const g = parseInt(g1 + g2, 16);
  const b = parseInt(b1 + b2, 16);

  return `rgb(${r}, ${g}, ${b})`;
}
```

'#'을 제외한 hash의 길이가 6글자임을 가정한 코드이다.

3글자로도 주어질 수가 있기 때문에 아래와 같은 함수가 필요할 수 있으며, 이는 2번 예시에서도 마찬가지이다.

```typescript
// hash가 제외된 color를 받는다고 가정
function getCompleteHash(hexColor: string) {
  if (hexColor.length === 3) {
    const [r, g, b] = hexColor.split('');

    return `${r + r}${g + g}${b + b}`;
  }

  return hexColor;
}
```

2. Bit Shift

```typescript
function hexToRgb(color: string) {
  const hexWithoutHash = color.slice(1);
  const hexToDecimal = parseInt(hexWithoutHash, 16);

  const r = (hexToDecimal >> 16) & 255;
  const g = (hexToDecimal >> 8) & 255;
  const b = hexToDecimal & 255;

  return `rgb(${r}, ${g}, ${b})`;
}
```

RRGGBB 형식의 hex는 아래와 같은 2진수로 표현할 수 있다.

00000000 / 00000000 / 00000000

1 ~ 8번째 자리: R<br>
9 ~ 16번째 자리: G<br>
17 ~ 24번째 자리: B<br>

쉬프트를 할 때 비트 범위를 벗어나면 수가 삭제되기 때문에, 위 코드 중

```javascript
const r = (hexToDecimal >> 16) & 255;
```

의 뜻은 G와 B 부분을 버리고 R만 취하겠다는 뜻이 된다. (+ & 255 구문으로 8자리만 가져옴)<br>
g와 b 변수도 동일하게 생각하면 된다.
