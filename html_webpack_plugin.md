## HTMLWebpackPlugin

Webpack 구성 내용 중 plugins는 번들이 완료된 파일을 처리하는 역할을 한다.

보통 번들된 파일을 난독화하거나 압축하는데 사용하며, 종류는 다양하다.

여기서 HTMLWebpackPlugin은 template으로 지정한 html을 기반으로 웹팩의 번들링 파일을 묶은 html 파일을 서빙해주는 역할을 하는데, options를 따로 넘길 수 있기 때문에 Production / Development 일 때의 상이한 조건 역시 처리가 가능하다.

-> 정리: 생성된 번들 파일을 자동으로 로드한 HTML 파일을 생성해주는 Plugin

CRA에서는 Production 모드 일 때 Minify 작업을 진행한다.<br>
-> Minify: 불필요한 코드를 제거하는 작업이라고 생각하면 됨

```javascript
new HtmlWebpackPlugin(
  Object.assign(
    {},
    {
      inject: true,
      template: paths.appHtml,
    },
    isEnvProduction
      ? {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
        }
      : undefined
  )
)
```
