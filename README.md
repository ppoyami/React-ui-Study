# 리액트 UI 구현 스터디는...

> ## 기초적인 UI를 직접 구현하면서, Best Practice 를 찾고, 서로 코드리뷰를 하는 스터디입니다.

<br>

## 📍 스터디 규칙

각 UI 폴더의 개인 폴더에서 구현과 README 를 작성합니다.

❗️ 다른사람의 코드나, README 또는 레포지토리 README는 수정하면 안됩니다.

❗️ 레포지토리 README는 주기적으로 업데이트 하겠습니다.(너무 늦으면 얘기해주세요!)

```
📦 Root
├─ Dropdown
│  ├─ <본인폴더>
│  │  ├─ src
│  │  └─ README.md
│  └─ <다른사람폴더>(❌)
├─ Modal
│  └─ <본인폴더>
│     ├─ src
│     └─ README.md
└─ README.md(레포지토리 README)(❌)
```

1. 요구사항을 먼저 정리합니다.
   1. 머티리얼, 시멘틱, 부트스트랩 등의 라이브러리 공식문서에서 각 UI의 동작방식을 확인할 수 있습니다.
   2. **❗️요구사항을 각자의 README에 잘 정리해주세요!**
2. UI를 구현합니다.
   1. 레퍼런스 없이 직접 구현(라이브러리 사용 가능)해도 되지만, 구현하고 나서, 구글링으로 다른 사람의 코드와 비교해야합니다.
   2. 레퍼런스를 참고한 경우, 참고한 자료를 링크합니다.
   3. **❗️구현하면서 참고한 자료, 어려웠던 점, 혹은 구현에 실패한 이유 등을 적어주세요!**
   4. **❗️동작화면을 GIF 파일로 올려주세요!(github issue 탭을 이용해서 README 파일에 복붙합니다.)**
3. 구현을 완료하고 나서, 재사용성에 대한 리팩토링을 합니다.(선택사항)
   1. 주요 로직을 hooks 폴더에 custom hook으로 옮겨봅니다. 또는 컴포넌트의 재사용성을 높입니다.
   2. 프로젝트에 활용할 수 있을 정도의 퀄리티가 목표입니다

---

## 🧲 Pull Request & Commit Message 규칙

- **Pull Request 전,** **자신이 fork한 저장소의 커밋 내역을** `원격 저장소의 최신 커밋`으로 `fetch & merge` 한 이후에 진행 부탁드립니다.
  - 최신 커밋으로 `fetch & merge` 하는 방법은 [여기](https://chanhuiseok.github.io/posts/git-2/)를 참고해 주세요!

### Fetch & Merge 순서 참고 가이드

#### remote 저장소 등록 과정(최초 1회)

- `$ git remote -v`: 입력 후 원격 저장소 등록여부 확인
- `$ git remote add upstream https://github.com/scvd03/React-ui-Study.git`: 원격 저장소를 등록하기 위해 다음 명령어를 입력

#### 원격 저장소에서 최신 커밋 내역 가져오기

- `$ git remote -v`: upstream 이라는 이름으로 위에서 등록한 저장소가 결과에 나오는지 확인
- `$ git checkout master`: 로컬 저장소의 master 브랜치로 변경
- `$ git fetch upstream`: upstream 에 반영된 최신 업데이트 사항 가져오기
- `$ git merge upstream/master`: 업데이트 사항을 가져온 후 master와 병합
- `$ git push origin master(main)`: 변경사항 나의 fork 저장소에 최종 반영
<p></p>

- 이후, **Pull Request(PR)를 하는 방법**은 [여기](https://chanhuiseok.github.io/posts/git-3/)를 참고해 주세요!
  - 위의 링크에 나온 방법 중 `5. 코드 수정`을 하는 부분에서는,
  - **각 UI 폴더 내부에 본인 이름 혹은 github ID로 된 폴더를 만드시고**, 그 안에서 `create-react-app .` 으로 프로젝트를 생성하시면 됩니다.

---

### 커밋 메세지 가이드

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포매팅, 코드 변경 없이 스타일 관련 수정사항
- `refactor`: 코드 리팩토링(기능변경없는)
- `test`: 테스트 코드,프로덕션 코드 수정 없는
- `chore`: 빌드 업무, 설정, 기타 변경사항

```
> feat: 상세 페이지 ThumnailList에 무한 스크롤 기능 추가
> chore: 폴더 구조 변경
> docs: dropdown-readme 문서 작성

```

---

## 리액트 UI 구현 리스트

- [ ] Tab
- [ ] Dark Mode
- [ ] Drop Down
- [ ] Selection
- [ ] Modal
- [ ] Infinite Scroll
- [ ] Scroll Spy
- [ ] Sidebar Menu
- [ ] Notistack
- [ ] Navigation
- [ ] Rating UI
- [ ] Slider
- [ ] Search Form
- [ ] Form(Validator)
- [ ] Carousel

---

## 🗓 진도표

:white_check_mark: 를 클릭하면, README로 이동합니다.

| UI / Name        | Intae                                                      | Seongjun                                          |     |     |
| ---------------- | ---------------------------------------------------------- | ------------------------------------------------- | --- | --- |
| Tab              | [:white_check_mark:](./01.Tab/intae/README.md)             | [:white_check_mark:](./01.Tab/seongjun/README.md) |     |     |
| Dark Mode        | [:white_check_mark:](./02.darkmode/intae/README.md)        |                                                   |     |     |
| Drop Down        | [:white_check_mark:](./03.dropdown/intae/README.md)        |                                                   |     |     |
| Selection        | [:white_check_mark:](./04.Selection/intae/README.md)       |                                                   |     |     |
| Modal            | [:white_check_mark:](./05.modal/intae/README.md)           |                                                   |     |     |
| Infinite Scroll  | [:white_check_mark:](./06.infinite-scroll/intae/README.md) |                                                   |     |     |
| Scroll Spy       | [:white_check_mark:](./07.scrollSpy/intae/README.md)       |                                                   |     |     |
| Sidebar Menu     | [:white_check_mark:](./08.sidebar-nav/intae/README.md)     |                                                   |     |     |
| Notistack        | [:white_check_mark:](./09.notistack/intae/README.md)       |                                                   |     |     |
| Navigation       |                                                            |                                                   |     |     |
| Rating UI        |                                                            |                                                   |     |     |
| Slider           |                                                            |                                                   |     |     |
| Search Form      |                                                            |                                                   |     |     |
| Form (validator) |                                                            |                                                   |     |     |
| Carousel         |                                                            |                                                   |     |     |
