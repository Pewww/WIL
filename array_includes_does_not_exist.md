## Property 'includes' does not exist on type 'string[]'
Property 'includes' does not exist on type 'string[]'와 같은 문제가 발생하였을 때 크게 2가지 방법으로 해결할 수 있다.<br><br>
Array.prototype.includes 메서드는 ES7 (= ES2016)부터 지원되기 시작했다.<br>
그렇기 때문에, tsconfig.json에서 compilerOptions 내의 lib 속성을 "es2016"이나 "es7"을 추가해주면 된다.<br><br>
target 속성을 "es2016"이나 "es7"로 바꾸는 것도 방법이지만, 이로 인해 브라우저 지원에 문제가 발생할 수 있기 때문에 (IE11은 지원하지 않는다.) 컴파일러 target을 변경하는 것은 그다지 좋은 방법으론 보이지 않는다..!<br><br>
Ex. [https://caniuse.com/#search=includes](https://caniuse.com/#search=includes)