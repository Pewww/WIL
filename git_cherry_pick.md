## Git - Cherry pick
회사에서 다른 분이 작업하시는 특정 부분만 가져와 개발할 일이 생겼었다.<br>
한 커밋만 내 브랜치에 적용시키면 되었기 때문에, 처음으로 cherry-pick이라는 것을 사용해보았다.<br>
(cherry-pick은 다른 브랜치에 있는 커밋을 선택적으로 내 브랜치에 적용시킬 때 사용하는 git 명령어이다.)<br><br>
1. 반영할 커밋 HashId를 복사한다.
```
Commit HashId: 2gde4b8cf9.... 
```
2. 해당 커밋을 반영하고 싶은 브랜치에서 다음 명령어를 입력한다.
```
git cherry-pick [Commit HashId]
```
또한, 아래와 같이
```
git cherry-pick [Commit HashId] [Commit HashId2] [Commit HashId3]...
```
Commit HashId를 cherry-pick 명령어 뒤에 나열해주면 여러개의 커밋을 한꺼번에 브랜치에 적용시킬 수 있다.

3. 특정 상황이 발생하였을 경우
- conflict 등으로 실패하는 경우
```
git cherry-pick --continue
```
- cherry-pick 실패로 인해 종료하고 싶을 경우
```
git cherry-pick --quit
```
- cherry-pick 이전 상태로 되돌리며 취소하고 싶을 경우
```
git cherry-pick --abort
```
4. 완료
----
**내용 추가**

cherry-pick을 하는 경우 같은 내용을 갖고 있는 커밋이 여러 개 생기기 때문에 나중에는 누가 누굴 cherry-picking 했는지 모르는 상황이 발생할 수도 있다.

따라서, 그리 권장하는 명령어는 아니지만 부득이하게 해당 명령어가 필요한 상황을 위해 알아두면 좋을 것 같다.

참고: [https://imasoftwareengineer.tistory.com/7](https://imasoftwareengineer.tistory.com/7)
