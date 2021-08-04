## Advanced Git Stash

#### `git stash`

일반적인 임시저장

#### `git stash save '{message}'`

메시지도 같이 작성할 수 있다.

#### `git stash --include-untracked`

추적이 불가능한 파일들도 같이 임시저장

#### `git stash --keep-index`

스테이지 파일 영역을 제외하고 임시저장

#### `git stash branch {name}`

stash한 파일을 꺼내면서 브랜치를 생성

#### `git stash pop`

가장 마지막에 stash한 파일을 꺼내고 영역을 비움

#### `git stash apply`

가장 마지막에 stash한 파일을 꺼내고 영역은 그대로 둠

#### `git stash apply --index`

스테이지 영역의 파일까지 꺼내옴

#### `git stash apply stash@{index}`

지정된(index) stash 영역의 파일들을 가져옴

#### `git stash drop`

가장 마지막에 stash한 파일을 지움 (목록에서 한 개씩 제거)

#### `git stash list`

stash 목록의 정보를 조회함
