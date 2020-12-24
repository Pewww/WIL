## How to process html img src in webpack?

### 문제 발생

개인 프로젝트를 완성하고 Webpack으로 빌드한 결과물을 S3에 배포했을 때 아래 사진과 같이 이미지들이 모두 깨지는 현상이 발생하였다.

<img src="https://user-images.githubusercontent.com/23455736/103055318-92540180-45dd-11eb-82d5-26aa264fefe8.png" alt="loader가 적용되기 전 페이지 사진" width="650">

문제를 살펴보니, 빌드가 완료된 html 파일에서 img 태그들의 src로 설정한 경로들은 그대로인데 실제 이미지 파일들이 빌드 폴더에 포함되지 않아 발생했다는 것을 확인할 수 있었다.

![image](https://user-images.githubusercontent.com/23455736/103055826-a9dfba00-45de-11eb-9bc3-dea5234eebbe.png)

![image](https://user-images.githubusercontent.com/23455736/103055931-e6abb100-45de-11eb-896c-c446d4283644.png)

### 문제 해결

html-loader와 file-loader를 프로젝트에 추가하여 webpack.config.js 파일에 각 loader를 설정하는 것으로 문제를 해결하였는데 원리는 다음과 같다.

```typescript
module: {
  rules: [
    {
      test: /\.ts$/,
      loader: require.resolve('ts-loader')
    },
    {
      test: /\.html$/,
      loader: require.resolve('html-loader')
    },
    {
      test: /\.(png|svg|jpe?g|gif)$/,
      loader: require.resolve('file-loader'),
      options: {
        // CommonJS 모듈 구문의 활성화 (웹팩이 모듈 자체로 직접 해석할 수 있게 됨.)
        esModule: false
      }
    }
  ]
},
```

> **Webpack**은 모든 파일을 모듈로 관리하지만, 자바스크립트 파일만 읽어올 수 있기 때문에 스타일시트나 이미지 등은 Webpack이 읽을 수 있는 자바스크립트로 변경되어야 한다.

위 내용처럼 css나 img 등과 같이 자바스크립트가 아닌 파일을 읽어오기 위해서는 해당 파일을 자바스크립트로 변경해주는 작업이 필요하며, 그 작업을 바로 **loader**가 해주게 된다.

loader는 test, use, loader 등과 같은 key들로 구성되며, options key를 통해 부가적인 설정이 가능하다는 점 역시 알아두면 좋을 것 같다.

### 결과

필요한 loader들을 추가로 설정해준 결과로 빌드 폴더 내에 해쉬 처리된 이미지 파일들이 새로 추가된 점과 html에서 참조하는 이미지들의 src 역시 자연스럽게 변경된 것을 확인할 수 있었다.

<img src="https://user-images.githubusercontent.com/23455736/103057954-43f63100-45e4-11eb-9fee-d8f3e543ee14.png" alt="loader가 적용되기 전 페이지 사진" width="650">

![image](https://user-images.githubusercontent.com/23455736/103057843-fd083b80-45e3-11eb-8a5f-b543fb204012.png)

![image](https://user-images.githubusercontent.com/23455736/103057893-2032eb00-45e4-11eb-9939-4e2494d13572.png)
