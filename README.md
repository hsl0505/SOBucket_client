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

- 로그인 / 로그아웃 / 회원가입
- Bucket 등록
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

# Front-End (내가 구현한 부분)

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

### Features
---
**# 홈 화면 (비로그인)**

<img src="https://user-images.githubusercontent.com/53073832/76164351-8c497d00-6191-11ea-8d7c-9ed5f1f92818.png" height="200" width="400" >
</br>
<img src="https://user-images.githubusercontent.com/53073832/76164353-8fdd0400-6191-11ea-95b7-6d743342095f.png" height="200" width="400" >
</br>
<img src="https://user-images.githubusercontent.com/53073832/76164354-91a6c780-6191-11ea-8c44-5cd91753d215.png" height="200" width="400" >
</br>
<img src="https://user-images.githubusercontent.com/53073832/76164355-923f5e00-6191-11ea-8e16-25954c7be5a1.png" height="200" width="400" >
</br>

- Search bar, Nav bar (홈 버튼 등), Main img, Buckets (랜덤 bucket 8개), Best Buckets (좋아요 순 4개)로 레이아웃 구성
- Bucket 검색 가능
- 비로그인 시 좋아요 / 퍼가기 버튼 누를 경우 Alert message(로그인 요청)

</br>









