![버킷로고](https://user-images.githubusercontent.com/53073832/76163712-d7609180-618b-11ea-9f89-f8259fcaf261.png)

# SO Bucket

**SO Bucket**은 자신의 버킷리스트를 관리하고 다른 사람과 공유할 수 있는 웹 어플리케이션 프로젝트 입니다.

</br>

### 프로젝트 개요

**프로젝트 기간** : 2020.01.13 ~ 2020.01.23

**서비스 종류** : Web Application

**프로젝트 참여 인원** : Full-Stack 3명

- 서지훈 (팀장, Full-Stack)
- 안상욱 (팀원, Full-Stack)
- **임현성 (팀원, Full-Stack)**

  - Front
    - Client 기본 구조 및 레이아웃 구현
    - React-router-dom을 활용하여 주요 화면 별 라우팅 설계 및 이를 통한 SPA 구현
    - Card, Like, Fork button 등 재사용 가능한 컴포넌트 설계
    - 빠른 UI 구현을 위해 AntDesign 활용
    - 좋아요 토글 및 퍼가기 기능 구현
    - 웹 CSS 구현
  - Back
    - Sequelize ORM을 활용하여 Client에서 맡은 기능 동작에 필요한 API를 endpoint별로 구현
    - Client와 Server간 쿠키와 JWT를 활용하여 Authorization 구현
    
</br>

**SO Bucket 주요 기능**

- 로그인 / 로그아웃 / 회원가입 / 회원탈퇴
- 회원정보 열람 / 수정
- Bucket 등록 / 수정 / 삭제
- Bucket 검색 (title로)
- Bucket 좋아요 / 퍼가기

</br>

### 프로젝트 관리

- Notion을 이용하여 프로젝트 전반적인 기획 및 관리

  - team rule, step, task, api 문서 등

- Miro를 이용하여 프로젝트 전체 레이아웃 설계

- dbdiagram.io를 이용하여 데이터베이스 설계

- 애자일 스크럼 방식을 이용하여 스프린트 단위의 개발 진행관리

- ESLint, Prettier를 이용하여 코드 스타일 통일

</br>

### 사용한 기술 스택

**Front-End**

- React
- React-router-dom
- Ant

**Back-End**

- Node.js
- Express
- JWT
- MySQL
- Sequelize ORM

**Development**

- Git
- AWS (S3)

</br>

### 프로젝트 아키텍쳐

![버킷 아키텍쳐](https://user-images.githubusercontent.com/53073832/76164225-8dc67580-6190-11ea-9645-921649992c22.png)

</br>
</br>

# Front-End

### Directory Structure
```
SO Bucket Client
├── README.md
├── package.json
├── public
│   └── index.html
└── src
    ├── App.js
    ├── css
    │   ├── Details
    │   ├── Home
    │   ├── SearchResult
    │   └── index.css
    ├── img
    ├── index.js
    └── pages
        ├── BucketWrite
        ├── Details
        ├── Home
        ├── Login
        ├── Mypage
        ├── SearchResult
        ├── SignUp
        ├── UserInfo
        └── page.js

```
</br>

### Features (내가 구현한 부분)
---

**# 홈 화면 (비로그인 시)**

<img src="https://user-images.githubusercontent.com/53073832/76164351-8c497d00-6191-11ea-8d7c-9ed5f1f92818.png" height="200" width="400" >
</br>
<img src="https://user-images.githubusercontent.com/53073832/76164353-8fdd0400-6191-11ea-95b7-6d743342095f.png" height="200" width="400" >
</br>
<img src="https://user-images.githubusercontent.com/53073832/76164354-91a6c780-6191-11ea-8c44-5cd91753d215.png" height="200" width="400" >
</br>
<img src="https://user-images.githubusercontent.com/53073832/76164355-923f5e00-6191-11ea-8e16-25954c7be5a1.png" height="200" width="400" >
</br>

- Search bar, Nav bar, Main img, Buckets, Best Buckets로 레이아웃 구성
- 비로그인 시에도 버킷 검색 가능
- 홈 화면 진입 시 main img text opacity transition
- 버킷 클릭 시 detail로 이동
- 좋아요 / 퍼가기 버튼 누를 경우 Alert message(로그인 요청)

</br>
</br>

**#홈 화면 (로그인 시)**

<img src="https://user-images.githubusercontent.com/53073832/76165604-c029a000-619b-11ea-8f7c-1b6d5ce0c03c.png" height="200" width="400" >
</br>
<img src="https://user-images.githubusercontent.com/53073832/76165607-c455bd80-619b-11ea-81dc-b3335780e467.png" height="200" width="400" >
</br>
<img src="https://user-images.githubusercontent.com/53073832/76165609-c6b81780-619b-11ea-8484-f7b25fb646e4.png" height="200" width="400" >
</br>

- 과거에 좋아요 눌렀던 버킷의 경우, 좋아요 눌러진 상태로 렌더링

</br>
</br>

**# 검색 화면**

<img src="https://user-images.githubusercontent.com/53073832/76165940-5232a800-619e-11ea-8463-a487d166f169.png" height="200" width="400" >
</br>
<img src="https://user-images.githubusercontent.com/53073832/76165946-565ec580-619e-11ea-8081-7ccbce6c5fef.png" height="200" width="400" >
</br>
<img src="https://user-images.githubusercontent.com/53073832/76165948-56f75c00-619e-11ea-9a0e-2a84ee1bd977.png" height="200" width="400" >
</br>

- 버킷 제목으로 검색
- 일치하는 버킷 없을 시 / 일치하는 버킷 있을 시

</br>
</br>

**# 좋아요**

<img src="https://user-images.githubusercontent.com/53073832/76166269-b6566b80-61a0-11ea-85b6-b710c6930448.png" height="200" width="400" >
</br>
<img src="https://user-images.githubusercontent.com/53073832/76166271-b8202f00-61a0-11ea-94be-17bd88845820.png" height="200" width="400" >
</br>
<img src="https://user-images.githubusercontent.com/53073832/76166273-b8b8c580-61a0-11ea-8137-1a0469e79e8e.png" height="200" width="400" >
</br>
<img src="https://user-images.githubusercontent.com/53073832/76166275-b9e9f280-61a0-11ea-8a0c-2b82f68ca735.png" height="200" width="400" >
</br>


- 좋아요 토글 기능 (누를 시 좋아요 +1 및 활성 / 다시 누르면 좋아요 -1 및 비활성)
- hover시 scale up
- 재사용 가능한 컴포넌트로 만들어 홈 화면, 검색화면 및 mypage와 detail 에서도 사용

</br>
</br>

**# 퍼가기**

<img src="https://user-images.githubusercontent.com/53073832/76168739-c6c51100-61b5-11ea-904f-761c86e41bca.png" height="200" width="400" >
</br>
<img src="https://user-images.githubusercontent.com/53073832/76168740-c9c00180-61b5-11ea-89af-63816bf507d8.png" height="200" width="400" >
</br>

- 퍼가기 버튼 클릭 시 자신의 버킷리스트에 해당 버킷 추가

</br>
</br>

**# My page**

<img src="https://user-images.githubusercontent.com/53073832/76170686-9edea900-61c7-11ea-9ee5-4726e6c2e2ac.png" height="200" width="400" >
</br>
<img src="https://user-images.githubusercontent.com/53073832/76170687-a00fd600-61c7-11ea-99d7-9dcd3169c196.png" height="200" width="400" >
</br>
<img src="https://user-images.githubusercontent.com/53073832/76170689-a2723000-61c7-11ea-864e-cfa858572bab.png" height="200" width="400" >
</br>


- 내 버킷 리스트 
- 내가 좋아요 누른 버킷 리스트
- mypage 및 버킷 detail에서도 좋아요 / 퍼가기 가능

</br>
</br>






