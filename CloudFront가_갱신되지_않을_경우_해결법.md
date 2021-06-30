## CloudFront가 갱신되지 않을 경우 해결법

S3 버킷을 https로 배포하기 위해 CloudFront를 이용했는데 버킷을 업데이트 해도 변경 내용이 갱신되지 않는 문제가 생겼다.. :(

이런 경우 어떻게 해야할까?

1. 일단 CloudFront 메인 페이지로 접속한다.

![image](https://user-images.githubusercontent.com/23455736/123935932-a71bb280-d9cf-11eb-979e-d74a9bbcecb7.png)

2. 갱신을 원하는 도메인의 ID를 클릭하여 조회 페이지로 이동한다.

3. Invalidations 탭으로 이동한다.

![image](https://user-images.githubusercontent.com/23455736/123936351-0ed1fd80-d9d0-11eb-9228-a2bd16001d8e.png)

4. **Create Invalidation** 버튼을 클릭한 후 `Object Paths`에 `*`를 입력한 후 실행한다.

<img src="https://user-images.githubusercontent.com/23455736/123936618-5062a880-d9d0-11eb-9f95-bc1288dcf491.png" width="500">

5. Invalidation이 리스트에 추가되며, `Status`가 **Completed**로 변경되면 갱신이 완료된 상태라는 뜻이다!
