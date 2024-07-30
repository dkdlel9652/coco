# HTML의 이해(이론)

# 웹 프론트엔드란?

웹 프론트엔드는 웹 애플리케이션이나 웹 사이트의 사용자 인터페이스(UI)를 개발하는 분야입니다. 이는 사용자가 웹 페이지에서 볼 수 있는 모든 요소를 다룹니다. 웹 프론트엔드 개발자는 HTML, CSS, JavaScript를 사용하여 웹 페이지의 구조를 만들고, 디자인을 적용하며, 다양한 기능을 구현합니다. 이를 통해 사용자가 웹 사이트를 시각적으로 즐기고 직관적으로 사용할 수 있도록 합니다.

프론트엔드 개발자는 웹 디자인과 UI 디자인 원칙을 이해하고 적용하여 웹 애플리케이션을 최적화합니다. 이들은 웹 페이지의 레이아웃, 스타일링, 상호작용, 애니메이션, 폼 처리, 데이터 통신 등을 담당하며, 웹 표준, 웹 접근성, 반응형 웹 디자인 등의 개념을 준수합니다. 또한, 백엔드 개발자와 협력하여 완전한 웹 애플리케이션을 구축합니다.

### 1. 웹 프론트엔드 역할과 중요성

1. **사용자 인터페이스(UI) 개발**: 프론트엔드 개발자는 HTML, CSS, JavaScript를 사용하여 웹 페이지의 레이아웃, 스타일링, 상호작용 요소를 구현합니다. 이를 통해 사용자가 웹 사이트를 사용하기 쉽게 만듭니다.
2. **웹 기술과 도구 활용**: 최신 웹 표준, 웹 접근성, 반응형 웹 디자인 등을 적용하여 다양한 브라우저와 기기에서 일관된 사용자 경험을 제공합니다. 이를 위해 다양한 웹 기술과 도구를 활용합니다.
3. **웹 성능 최적화**: 프론트엔드 개발자는 웹 페이지의 로딩 속도와 반응성을 최적화합니다. 이미지 최적화, 자바스크립트 코드 압축, 캐싱 등의 기법을 사용하여 웹 페이지의 성능을 개선합니다.
4. **다양한 기기 및 브라우저 호환성**: 프론트엔드 개발자는 웹 사이트가 데스크톱, 태블릿, 스마트폰 등 다양한 기기와 Chrome, Firefox, Safari, Edge 등 여러 브라우저에서 일관되게 동작하도록 보장합니다. 크로스 브라우징 이슈를 해결하고, 반응형 웹 디자인을 적용합니다.
5. **웹 보안**: 프론트엔드 개발자는 웹 사이트의 보안에도 관여합니다. 사용자 데이터의 안전한 전송을 위해 HTTPS를 사용하고, 적절한 인증과 권한 관리를 구현하여 웹 애플리케이션의 보안 취약점을 최소화합니다.

웹 프론트엔드는 사용자 경험을 최적화하고, 웹 애플리케이션의 성공에 중요한 역할을 합니다. 사용자들은 웹 사이트의 시각적 요소와 사용 편의성에 매우 민감하기 때문에, 프론트엔드 개발자는 이를 고려하여 최적의 웹 인터페이스를 제공해야 합니다. 또한, 모바일 기기의 보급과 다양한 브라우저의 등장으로 웹 페이지의 호환성과 성능 최적화는 더욱 중요해지고 있습니다. 따라서 웹 프론트엔드 개발자의 역할은 웹 애플리케이션 또는 웹 사이트의 성공에 필수적입니다.

### 2. 웹 프론트엔드에서 많이 사용되는 기술

| 기술 | 설명 | 실무에서 많이 사용하는 기술 |
| --- | --- | --- |
| HTML 
 | 웹 페이지의 구조를 정의하는 언어 | - HTML5: 최신 HTML 표준으로, 시맨틱 태그 (<header>, <footer>, <article>, <section>) 사용
- 폼 요소: <input>, <textarea>, <select> 등 사용자 입력 처리
- 미디어 요소: <video>, <audio>, <canvas> 등 멀티미디어 콘텐츠 포함 |
| CSS 
 | 웹 페이지의 스타일과 레이아웃을 정의하는 언어 | - CSS3: 최신 CSS 표준으로, 애니메이션, 트랜지션, 그리드 레이아웃, 플렉스박스 레이아웃 포함
- CSS 프레임워크: Bootstrap, Foundation 등 미리 정의된 스타일과 컴포넌트 사용
- 전처리기: Sass, LESS 등으로 CSS 효율적 작성 및 관리
- CSS 라이브러리: Tailwind CSS, Bulma 등 유틸리티 클래스 기반의 라이브러리를 사용하여 빠르게 스타일링 구현 |
| JavaScript | 웹 페이지에 동적 기능을 추가하는 언어 | - ES6+: 최신 JavaScript 표준, 화살표 함수, 클래스, 모듈, 템플릿 리터럴 등 새로운 문법 제공
- 프레임워크 및 라이브러리: React, Angular, Vue.js 등 복잡한 UI 효율적 개발
- AJAX 및 Fetch API: 비동기 통신으로 페이지 새로 고침 없이 데이터 처리
- Node.js: JavaScript를 서버 사이드에서도 실행, 전체 애플리케이션을 JavaScript로 개발 가능 |

### 3. 주요 CSS 프레임워크 및 라이브러리

- **Bootstrap**: 가장 인기 있는 CSS 프레임워크 중 하나로, 반응형 디자인과 미리 정의된 스타일 및 컴포넌트를 제공합니다.
- **Foundation**: Zurb에서 개발한 프레임워크로, 강력한 반응형 디자인 툴을 제공합니다.
- **Tailwind CSS**: 유틸리티 클래스 기반의 CSS 프레임워크로, 커스터마이징이 용이하고 빠르게 스타일링을 구현할 수 있습니다.
- **Bulma**: 현대적이고 반응형 디자인을 지원하는 CSS 프레임워크로, 직관적인 클래스 이름을 사용합니다.

### 4. 주요 JavaScript 프레임워크 및 라이브러리

- **React**: Facebook에서 개발한 컴포넌트 기반 라이브러리로, 단일 페이지 애플리케이션(SPA) 개발에 많이 사용됩니다. React는 상태 관리와 가상 DOM을 통해 효율적인 렌더링을 제공합니다.
- **Angular**: Google에서 개발한 프레임워크로, 대규모 애플리케이션을 구조적으로 개발할 수 있게 도와줍니다. TypeScript를 기본 언어로 사용하며, MVC 아키텍처를 따릅니다.
- **Vue.js**: 간단하고 유연한 프레임워크로, 점진적으로 채택할 수 있는 특성을 가지고 있습니다. Vue는 데이터 바인딩과 컴포넌트 기반 개발을 쉽게 할 수 있게 해줍니다.

## 체크 타임

**1. 웹 프론트엔드 개발자가 웹 페이지의 성능을 최적화하기 위해 할 수 있는 작업은 무엇입니까?**

a) 데이터베이스 최적화

b) 이미지 최적화, 자바스크립트 코드 압축, 캐싱 적용

c) 네트워크 구성 변경

d) 서버 용량 증대

**정답:** b) 이미지 최적화, 자바스크립트 코드 압축, 캐싱 적용

**2. 다음 중 CSS 프레임워크에 해당하는 것은 무엇입니까?**

a) Node.js

b) Angular

c) Bootstrap

d) React

**정답:** c) Bootstrap

**3. 주요 JavaScript 프레임워크 중에서 Google이 개발하고, 대규모 애플리케이션을 구조적으로 개발할 수 있게 도와주는 것은 무엇입니까?**

a) Vue.js

b) React

c) Angular

d) jQuery

**정답:** c) Angular

**4. 웹 프론트엔드 개발의 주요 역할에 해당하지 않는 것은 무엇입니까?**

a) 사용자 인터페이스(UI) 개발

b) 데이터베이스 관리

c) 웹 기술과 도구 활용

d) 웹 성능 최적화

**정답:** b) 데이터베이스 관리

**5. Tailwind CSS와 같은 CSS 라이브러리의 주요 특징은 무엇입니까?**

a) 유틸리티 클래스 기반으로 빠르게 스타일링 구현

b) 서버 사이드 렌더링 지원

c) 컴포넌트 기반 JavaScript 프레임워크

d) 백엔드 개발 도구

**정답:** a) 유틸리티 클래스 기반으로 빠르게 스타일링 구현

**6. Facebook에서 개발한 컴포넌트 기반 JavaScript 라이브러리는 무엇입니까?**

a) Angular

b) Vue.js

c) React

d) Ember.js

**정답:** c) React

---

# 웹 프론트엔드 (웹 퍼블리싱) 개발 환경 구축

## 1. 메모장을 이용한 HTML 작성

![Untitled](readme.img/Untitled.png)

- 작성 순서 [https://www.w3schools.com/html/html_editors.asp](https://www.w3schools.com/html/html_editors.asp)
1. 웹 페이지 구조 설계: 웹 페이지의 구조를 결정하고 어떤 요소들을 포함할지 계획합니다. 예를 들어, 헤더, 내용, 사이드바, 푸터 등을 어떻게 배치할지 결정합니다.
2. HTML 기본 구조 작성: 메모장을 열고 **`<!DOCTYPE html>`**을 입력하여 문서 유형(DOCTYPE)을 선언합니다. 그 다음, **`<html>`**, **`<head>`**, **`<body>`** 태그를 차례대로 입력합니다.
3. 메타데이터와 문서 정보 입력: **`<head>`** 태그 내에서 문서 제목(**`<title>`**), 문자 인코딩(**`<meta charset="UTF-8">`**) 등의 메타데이터와 문서 정보를 입력합니다.
4. 내용 작성: **`<body>`** 태그 내에서 웹 페이지의 실제 내용을 작성합니다. 텍스트, 이미지, 링크, 리스트, 테이블 등을 추가합니다. 필요한 경우, **`<div>`** 등의 블록 요소로 콘텐츠를 그룹화할 수도 있습니다.
5. CSS 스타일 추가 (선택 사항): 웹 페이지에 스타일을 적용하기 위해 **`<style>`** 태그 내에서 CSS 코드를 작성하거나, 외부 CSS 파일을 연결할 수 있습니다.
6. JavaScript 추가 (선택 사항): 웹 페이지에 동적인 기능을 추가하기 위해 **`<script>`** 태그 내에서 JavaScript 코드를 작성하거나, 외부 JavaScript 파일을 연결할 수 있습니다.
7. 파일 저장: 작성한 HTML 코드를 메모장에서 "파일" > "다른 이름으로 저장"을 선택하여 **`.html`** 확장자로 저장합니다.

## 2. Visual Studio Code 설치

**2.1. Visual Studio Code란?**

- Visual Studio Code (VS Code)는 Microsoft에서 개발한 무료 오픈 소스 코드 편집기입니다. 다양한 프로그래밍 언어를 지원하며, 특히 웹 개발에 강력한 기능을 제공합니다.

**2.2. 설치 방법**

1. **VS Code 다운로드**
    - [Visual Studio Code 공식 사이트](https://code.visualstudio.com/)에 접속하여 자신의 운영체제에 맞는 설치 파일을 다운로드합니다.
    
    ![Untitled](readme.img/Untitled 1.png)
    
2. **VS Code 설치**
    - 다운로드한 설치 파일을 실행하여 설치 과정을 진행합니다.
    - 설치 과정 중 필요한 설정을 선택하고, 'Install' 버튼을 클릭하여 설치를 완료합니다.

---

**2.3. 기본 테마 및 아이콘 설정**

1. VS Code를 실행하고, 왼쪽 하단의 톱니바퀴 아이콘(설정)을 클릭합니다.
2. 'Color Theme'를 선택하여 원하는 테마를 설정합니다.
3. 'File Icon Theme'을 선택하여 파일 아이콘 테마를 설정합니다.

**2.4. 필수 확장 프로그램 설치**

![Untitled](HTML%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2(%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A9%E1%86%AB)%20cca3d56c854947cfa13dbd1605077247/Untitled%202.png)

1. **Live Server**
    - HTML, CSS, JavaScript 파일을 실시간으로 미리 볼 수 있는 확장 프로그램입니다.
    - VS Code의 왼쪽 사이드바에서 'Extensions' 아이콘을 클릭하고, 'Live Server'를 검색하여 설치합니다.
2. **ESLint**
    - JavaScript 코드의 문법을 검사하고, 코드 스타일을 유지해주는 확장 프로그램입니다.
    - 'Extensions' 아이콘을 클릭하고, 'ESLint'를 검색하여 설치합니다.
3. **Prettier - Code formatter**
    - 코드의 형식을 자동으로 정리해주는 확장 프로그램입니다.
    - 'Extensions' 아이콘을 클릭하고, 'Prettier - Code formatter'를 검색하여 설치합니다.

**2.5. 기본 설정 파일 생성**

1. VS Code에서 설정 파일을 열기 위해, `Ctrl + ,` 또는 `Cmd + ,`를 누릅니다.
2. JSON 형태의 설정 파일을 편집합니다. 다음은 기본 설정 예시입니다.

```json
{
    "editor.formatOnSave": true,
    "editor.tabSize": 2,
    "files.autoSave": "afterDelay",
    "eslint.alwaysShowStatus": true,
    "prettier.singleQuote": true,
    "prettier.trailingComma": "es5"
}
```

---

### 3. 프로젝트 폴더 생성 및 첫 번째 파일 만들기

**3.1. 프로젝트 폴더 생성**

1. 컴퓨터의 원하는 위치에 프로젝트 폴더를 생성합니다.
2. VS Code에서 'File' > 'Open Folder'를 선택하여 생성한 프로젝트 폴더를 엽니다.

**3.2. 첫 번째 파일 만들기**

1. VS Code에서 'File' > 'New File'을 선택합니다.
2. 파일 이름을 `index.html`로 저장합니다.
3. 아래의 기본 HTML 구조를 파일에 입력합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph of text on my first HTML page.</p>
</body>
</html>
```

**3.3. Live Server 실행**

1. `index.html` 파일을 연 상태에서, 오른쪽 하단의 'Go Live' 버튼을 클릭합니다.
2. 기본 웹 브라우저가 열리면서 작성한 HTML 파일이 실시간으로 미리 보기됩니다.

---

### 4. Git과 GitHub 설정 (선택 사항)

참고: [https://docs.google.com/document/d/1BWTM83JX0UJE3Zs2zNMatFVXGxSFKKd-/edit](https://docs.google.com/document/d/1BWTM83JX0UJE3Zs2zNMatFVXGxSFKKd-/edit)

**4.1. Git 설치**

1. [Git 공식 사이트](https://git-scm.com/)에 접속하여 자신의 운영체제에 맞는 설치 파일을 다운로드합니다.
2. 다운로드한 설치 파일을 실행하여 설치 과정을 진행합니다.

**4.2. GitHub 계정 생성**

1. [GitHub](https://github.com/)에 접속하여 무료 계정을 생성합니다.

**4.3. Git 초기 설정**

1. VS Code의 터미널을 열기 위해 `Ctrl + '` 또는 `Cmd + '`를 누릅니다.
2. 아래의 명령어를 입력하여 Git 설정을 초기화합니다.
    
    ```bash
    git config --global user.name "Your Name"
    git config --global user.email "your.email@example.com"
    
    git config --global user.name
    git config --global user.email
    ```
    

**4.4. Git 리포지토리 초기화 및 커밋**

![Untitled](HTML%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2(%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A9%E1%86%AB)%20cca3d56c854947cfa13dbd1605077247/Untitled%203.png)

1. 프로젝트 폴더에서 Git 리포지토리를 초기화합니다.
    
    ```bash
    git init
    
    ```
    
2. 변경 사항을 스테이징하고 커밋합니다.
    
    ```bash
    git add .
    git commit -m "Initial commit"
    
    ```
    

### gitignore.io에서 .gitignore파일 생성 및 다운로드

**4.5. GitHub 리포지토리와 연결**

1. GitHub에서 새로운 리포지토리를 생성합니다.
2. 아래의 명령어를 사용하여 로컬 리포지토리를 GitHub 리포지토리와 연결합니다.
    
    ```bash
    git remote add origin https://github.com/yourusername/본인레파지토리.git
    git push -u origin master
    
    ```
    
    ```bash
    C:\Users\beomj\OneDrive\OneDrive문서\BJ202407>git push -u origin main
    remote: Permission to comstudyschool/sw20240725.git denied to comstudynews.
    fatal: unable to access 'https://github.com/comstudyschool/sw20240725.git/': The requested URL returned error: 403
    ```
    
    제어판에서 '자격 증명 관리자'를 열고, 'Windows 자격 증명' 탭에서 'Generic Credentials'를 선택합니다. 여기서 `git`과 관련된 항목을 삭제합니다.
    
    ![Untitled](HTML%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2(%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A9%E1%86%AB)%20cca3d56c854947cfa13dbd1605077247/Untitled%204.png)
    

---

## 개발자에게 유용한 DOS(Windows Command Prompt) 명령어

1. dir:
    - 현재 디렉토리의 파일 및 폴더 목록을 보여줍니다.
    - 사용 예: **`dir`**
2. cd:
    - 디렉토리를 변경합니다.
    - 사용 예: **`cd Documents`** (Documents 폴더로 이동)
3. mkdir:
    - 새로운 디렉토리(폴더)를 생성합니다.
    - 사용 예: **`mkdir Project`** (Project라는 이름의 디렉토리 생성)
4. copy:
    - 파일을 복사합니다.
    - 사용 예: **`copy file1.txt file2.txt`** (file1.txt를 file2.txt로 복사)
5. move:
    - 파일 또는 폴더를 이동하거나 이름을 변경합니다.
    - 사용 예: **`move file1.txt C:\Documents`** (file1.txt를 Documents 폴더로 이동)
6. del:
    - 파일을 삭제합니다.
    - 사용 예: **`del file.txt`** (file.txt 파일 삭제)
7. ren:
    - 파일의 이름을 변경합니다.
    - 사용 예: **`ren old_name.txt new_name.txt`** (old_name.txt를 new_name.txt로 변경)
8. type:
    - 파일의 내용을 표시합니다.
    - 사용 예: **`type file.txt`** (file.txt 파일의 내용 표시)
9. tasklist:
    - 실행 중인 프로세스 목록을 보여줍니다.
    - 사용 예: **`tasklist`** (실행 중인 프로세스 목록 표시)
10. ping:
    - 지정된 호스트에 ICMP Echo 요청을 보내 응답 시간을 측정합니다.
    - 사용 예: **`ping www.google.com`** (Google 웹사이트에 대한 응답 시간 측정)

- **DOS 명령어 학습 참고 사이트**
    1. SS64.com:
        - 링크: [**https://ss64.com/nt/**](https://ss64.com/nt/)
        - 내용: SS64는 다양한 운영 체제의 명령어와 도구에 대한 문서와 예제를 제공하는 사이트입니다. 여기서는 DOS 및 Windows 명령어에 대한 자세한 설명과 사용 예제를 확인할 수 있습니다.
    2. Computer Hope:
        - 링크: [**https://www.computerhope.com/msdos.htm**](https://www.computerhope.com/msdos.htm)
        - 내용: Computer Hope는 컴퓨터와 기술 관련 지식을 제공하는 사이트로, 여기서는 MS-DOS 명령어에 대한 설명과 사용 예제를 찾을 수 있습니다.
    3. Ktword:
        - 링크: [http://www.ktword.co.kr/](http://www.ktword.co.kr/)
        - 내용: Ktword는 IT 및 기술 용어 사전을 제공하는 사이트로, 여기에서는 다양한 기술 용어와 함께 DOS 명령어에 대한 설명과 사용 예제를 확인할 수 있습니다.

- **Windows에서 CMD(명령 프롬프트) 창 실행 방법**
1. 시작 메뉴 검색:
    - 시작 메뉴(Windows 아이콘)를 클릭하거나 Windows 키를 누릅니다.
    - 검색 창에 "cmd"를 입력합니다.
    - 검색 결과에서 "명령 프롬프트" 또는 "Command Prompt"를 클릭합니다.
2. 실행 대화상자 사용:
    - Windows 키 + R을 눌러 "실행" 대화상자를 엽니다.
    
    ![Untitled](HTML%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2(%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A9%E1%86%AB)%20cca3d56c854947cfa13dbd1605077247/Untitled%205.png)
    
    - "cmd"를 입력하고 Enter 키를 누릅니다.
3. Windows 탐색기에서 경로로 직접 이동:
    - Windows 탐색기를 엽니다.
    - 상단 주소 표시줄에 "cmd"를 입력합니다.
    - Enter 키를 누르거나 주소 표시줄에서 오른쪽 마우스 버튼을 클릭하여 "명령 프롬프트 열기"를 선택합니다.
4. 작업 관리자 사용:
    - Ctrl + Shift + Esc를 눌러 작업 관리자를 엽니다.
    - "파일" 메뉴에서 "새 작업 실행"을 선택합니다.
    - "cmd"를 입력하고 Enter 키를 누릅니다.
    
    ![Untitled](HTML%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2(%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A9%E1%86%AB)%20cca3d56c854947cfa13dbd1605077247/Untitled%206.png)
    

# HTML 기본문법과 기본태그

## 1. HTML의 정의 및 역사

### **1.1. HTML의 정의**

- **HTML (HyperText Markup Language)**는 웹 페이지를 만들기 위해 사용되는 마크업 언어입니다. HTML은 웹 브라우저가 읽을 수 있는 문서 구조를 정의하고, 텍스트, 이미지, 비디오 등 다양한 콘텐츠를 포함하여 사용자에게 표시합니다.

### **1.2. HTML의 역사**

- **초기 HTML (1991-1994)**: HTML은 1991년에 팀 버너스 리에 의해 최초로 제안되었습니다. 초기 HTML은 단순한 문서 구조를 제공하는데 집중하였고, 18개의 태그만을 포함하고 있었습니다.
- **HTML 2.0 (1995)**: 1995년에 HTML 2.0이 발표되면서 표준화 작업이 본격적으로 시작되었습니다. 이 버전에서는 기존의 태그를 정리하고, 표와 폼을 포함한 새로운 기능들이 추가되었습니다.
- **HTML 3.2 (1997)**: HTML 3.2는 스타일 시트의 개념을 도입하였고, 다양한 태그와 속성들이 추가되었습니다. 이 시기부터 브라우저 간 호환성 문제가 대두되었습니다.
- **HTML 4.01 (1999)**: HTML 4.01은 웹 표준화의 중요한 단계로, 접근성, 국제화, 스타일 시트와의 연동 등 다양한 기능들이 추가되었습니다.
- **HTML5 (2014)**: HTML5는 멀티미디어 콘텐츠와 복잡한 웹 애플리케이션을 지원하기 위해 개발되었습니다. 새로운 시맨틱 태그, 그래픽 기능, API 등이 포함되었습니다.

## 2. HTML 문서 구조 및 기본 태그

### **2.1. HTML 문서 구조**

- HTML 문서는 일반적으로 DOCTYPE 선언, html 요소, head 요소, body 요소로 구성됩니다.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Document Title</title>
    </head>
    <body>
        <h1>Hello, World!</h1>
        <p>This is a sample HTML document.</p>
    </body>
</html>

```

### **2.2. 기본 태그 설명**

- **DOCTYPE 선언**
    - `<!DOCTYPE html>`: HTML5 문서를 선언합니다. 브라우저가 문서의 HTML 버전을 인식하고 적절히 렌더링할 수 있도록 합니다.
- **html 태그**
    - `<html>`: HTML 문서의 루트 요소입니다. 모든 HTML 요소는 이 요소 안에 포함됩니다.
- **head 태그**
    - `<head>`: 문서의 메타데이터를 포함합니다. 브라우저에는 직접 표시되지 않지만, 문서의 제목, 스타일, 스크립트, 기타 메타 정보를 포함합니다.
    - **title 태그**
        - `<title>`: 문서의 제목을 정의합니다. 브라우저의 제목 표시줄이나 탭에 표시되며, 검색 엔진 최적화(SEO)에도 중요한 역할을 합니다.
- **body 태그**
    - `<body>`: 문서의 본문 내용을 포함합니다. 사용자가 브라우저에서 직접 볼 수 있는 모든 콘텐츠(텍스트, 이미지, 비디오 등)가 이 요소 안에 포함됩니다.

### **2.3. 기본 태그 예시**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>컴스터디 스쿨</title>
    </head>
    <body>
        <h1>컴스터디 스쿨에 오신 것을 환영합니다.</h1>
        <p>다양한 기술을 소개하고 강의하는 컴퓨터 교육 플랫폼입니다.</p>
        <a href="<https://www.naver.com>">네이버로 이동</a>
        <img src="image.jpg" alt="Sample Image">
    </body>
</html>

```

### **2.4. 추가 태그 설명**

- **<h1>~<h6> 태그**
    - `<h1>`: 문서의 주요 제목을 정의합니다. HTML에는 `<h1>`부터 `<h6>`까지의 제목 태그가 있으며, 숫자가 작을수록 더 중요한 제목입니다.
    
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <title>Text Tags Example</title>
    </head>
    <body>
      <h1>This is a Heading level 1</h1>
      <h2>This is a Heading level 2</h2>
      <h3>This is a Heading level 3</h3>
      <h4>This is a Heading level 4</h4>
      <h5>This is a Heading level 5</h5>
      <h6>This is a Heading level 6</h6>
    
      <p>This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    
      <p>
        This is another paragraph with some <strong>strong text</strong> and <em>emphasized text</em>.
        <strong><em>Both strong and emphasized</em></strong> styles can be applied together.
      </p>
    </body>
    </html>
    ```
    
    위의 예제 코드에서는:
    
    - **`<h1>~<h6>`** 태그를 사용하여 6개의 제목 레벨을 생성합니다.
    - **`<p>`** 태그를 사용하여 문단을 생성합니다.
    - **`<strong>`** 태그를 사용하여 강조된 텍스트를 표시합니다.
    - **`<em>`** 태그를 사용하여 강조된 텍스트를 이탤릭체로 표시합니다.
    - **`<strong>`**과 **`<em>`** 태그를 함께 사용하여 텍스트를 동시에 강조하고 이탤릭체로 표시합니다.
    
    ![Untitled](HTML%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2(%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A9%E1%86%AB)%20cca3d56c854947cfa13dbd1605077247/Untitled%207.png)
    
- **p 태그**
    - `<p>`: 단락을 정의합니다. 텍스트를 단락으로 구분하여 가독성을 높입니다.
    
    ```html
    <p>This is the first paragraph.</p>
    <p>This is the second paragraph.</p>
    <p>This is the third paragraph.</p>
    ```
    
- **a 태그**
    - `<a>`: 하이퍼링크를 정의합니다. `href` 속성을 사용하여 링크할 URL을 지정합니다.
- **img 태그**
    - `<img>`: 이미지를 삽입합니다. `src` 속성을 사용하여 이미지 파일의 경로를 지정하고, `alt` 속성을 사용하여 대체 텍스트를 제공합니다.

## 단원 체크 타임

1. **HTML의 정의는 무엇입니까?**
    - a) 하이퍼텍스트 마크업 언어
    - b) 하이퍼링크 마크업 언어
    - c) 하이퍼미디어 마크업 언어
    - d) 하이퍼텍스트 마크업 시스템
2. **HTML을 처음 제안한 사람은 누구입니까?**
    - a) 팀 버너스 리
    - b) 스티브 잡스
    - c) 빌 게이츠
    - d) 마크 저커버그
3. **이미지를 삽입할 때 사용하는 태그는 무엇입니까?**
    - a) `<image>`
    - b) `<img>`
    - c) `<picture>`
    - d) `<figure>`
4. **HTML 문서의 기본 구조를 정의하는 태그가 아닌 것은 무엇입니까?**
    - a) `<html>`
    - b) `<head>`
    - c) `<body>`
    - d) `<text>`
5. **HTML 문서의 메타데이터를 포함하는 태그는 무엇입니까?**
    - a) `<body>`
    - b) `<head>`
    - c) `<meta>`
    - d) `<html>`
6. **브라우저의 제목 표시줄이나 탭에 표시되는 문서의 제목을 정의하는 태그는 무엇입니까?**
    - a) `<title>`
    - b) `<header>`
    - c) `<h1>`
    - d) `<caption>`
7. **HTML 문서에서 단락을 정의하는 태그는 무엇입니까?**
    - a) `<div>`
    - b) `<span>`
    - c) `<p>`
    - d) `<section>`
8. **HTML 문서의 DOCTYPE 선언의 역할은 무엇입니까?**
    - a) HTML 문서의 기본 스타일을 설정합니다.
    - b) 브라우저가 문서의 HTML 버전을 인식하게 합니다.
    - c) HTML 문서의 기본 레이아웃을 설정합니다.
    - d) HTML 문서의 글꼴을 정의합니다.

---

# 하이퍼텍스트

## 1. 앵커 태그 (a)와 href 속성

**1.1. 앵커 태그 (a 태그)의 역할**

- 앵커 태그(`<a>`)는 하이퍼링크를 정의하는 HTML 요소입니다. 사용자가 링크를 클릭하면 지정된 URL로 이동하거나, 동일한 페이지 내의 특정 위치로 이동할 수 있습니다.
- 앵커 태그는 다른 문서나 동일 문서 내의 특정 위치, 또는 다양한 프로토콜 (예: 이메일 링크)로 연결할 수 있습니다.
- **`<a>`** 태그: 링크 생성 및 속성 활용
    - **`<a>`** 태그는 HTML에서 링크를 생성하는 데 사용됩니다.
    - **`href`** 속성을 사용하여 링크된 리소스의 URL을 지정합니다.
    - **`target`** 속성을 사용하여 링크를 열 창의 동작을 제어합니다.
    - **`title`** 속성을 사용하여 링크에 대한 추가 정보를 제공할 수 있습니다.

**1.2. href 속성**

- `href` 속성은 하이퍼링크의 대상(URL)을 지정합니다. 링크를 클릭하면 이 URL로 이동합니다.
- href 속성에는 다양한 유형의 URL을 사용할 수 있습니다:
    - 절대 URL: `http://www.example.com`
    - 상대 URL: `/about.html`
    - 같은 페이지 내의 특정 위치: `#section1`
    - 이메일 링크: `mailto:example@example.com`

**1.3. 앵커 태그의 기본 문법**

```html
<a href="URL">링크 텍스트</a>

```

**1.4. 앵커 태그 예시**

- 절대 URL 사용:
    
    ```html
    <a href="<http://www.example.com>">Visit Example</a>
    
    ```
    
- 상대 URL 사용:
    
    ```html
    <a href="/about.html">About Us</a>
    
    ```
    
- 같은 페이지 내의 특정 위치로 이동:
    
    ```html
    <a href="#section1">Go to Section 1</a>
    
    ```
    

## 2. 링크와 네비게이션

**2.1. 네비게이션의 중요성**

- 웹 페이지 내에서 링크를 통해 다른 페이지로 이동하거나, 동일한 페이지 내의 다른 섹션으로 이동하는 것은 사용자 경험을 향상시키는 중요한 요소입니다.
- 효과적인 네비게이션은 사용자가 원하는 정보를 쉽게 찾을 수 있도록 도와줍니다.

**2.2. 네비게이션 바 만들기**

- 네비게이션 바는 웹 사이트의 주요 페이지로의 링크를 모아둔 영역입니다. 일반적으로 웹 페이지 상단에 위치하며, 사용자에게 주요 섹션으로의 빠른 접근을 제공합니다.
- 예시:
    
    ```html
    <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="contact.html">Contact</a>
    </nav>
    
    ```
    

**2.3. 페이지 내 링크로 이동하기**

- 같은 페이지 내의 특정 위치로 이동하는 링크는 사용자에게 특정 섹션으로 빠르게 접근할 수 있는 방법을 제공합니다.
- 예시:
    
    ```html
    <a href="#section1">Go to Section 1</a>
    
    <h2 id="section1">Section 1</h2>
    <p>This is the content of Section 1.</p>
    
    ```
    

**2.4. 이메일 링크 만들기**

- `mailto:` 프로토콜을 사용하여 이메일 클라이언트를 열고 새 이메일 작성을 시작할 수 있습니다.
- 예시:
    
    ```html
    <a href="mailto:example@example.com">Send Email</a>
    
    ```
    

### 실습: 앵커 태그와 네비게이션 만들기

1. **기본 링크 작성**
    - 절대 URL과 상대 URL을 사용하여 링크를 작성합니다.
    
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Hyperlink Example</title>
        </head>
        <body>
            <h1>Hyperlink Example</h1>
            <a href="<http://www.example.com>">Visit Example</a>
            <br>
            <a href="about.html">About Us</a>
        </body>
    </html>
    
    ```
    
2. **네비게이션 바 작성**
    - 네비게이션 바를 만들어 여러 페이지로의 링크를 제공합니다.
    
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Navigation Bar Example</title>
        </head>
        <body>
            <nav>
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="services.html">Services</a>
                <a href="contact.html">Contact</a>
            </nav>
            <h1>Welcome to My Website</h1>
            <p>This is the home page.</p>
        </body>
    </html>
    
    ```
    
3. **페이지 내 링크 작성**
    - 같은 페이지 내의 특정 섹션으로 이동하는 링크를 작성합니다.
    
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Page Section Link Example</title>
        </head>
        <body>
            <h1>Page Section Link Example</h1>
            <a href="#section1">Go to Section 1</a>
            <a href="#section2">Go to Section 2</a>
    
            <h2 id="section1">Section 1</h2>
            <p>This is the content of Section 1.</p>
    
            <h2 id="section2">Section 2</h2>
            <p>This is the content of Section 2.</p>
        </body>
    </html>
    
    ```
    
4. **이메일 링크 작성**
    - `mailto:` 프로토콜을 사용하여 이메일 링크를 작성합니다.
    
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Email Link Example</title>
        </head>
        <body>
            <h1>Email Link Example</h1>
            <a href="mailto:example@example.com">Send Email</a>
        </body>
    </html>
    
    ```
    

### 링크의 스타일링

1. CSS를 활용한 링크 스타일 지정:
    - CSS를 사용하여 링크에 스타일을 지정할 수 있습니다.
    - 선택자를 사용하여 특정 링크에 스타일을 적용하거나, 일괄적으로 모든 링크에 스타일을 적용할 수 있습니다.
    - **`color`**, **`text-decoration`**, **`font-weight`** 등의 속성을 사용하여 링크의 색상, 텍스트 장식, 글꼴 굵기 등을 변경할 수 있습니다.
2. 호버 효과 및 상태별 스타일 적용:
    - **`:hover`** 선택자를 사용하여 링크에 마우스를 올렸을 때의 스타일을 지정할 수 있습니다. 이를 통해 호버(hover) 효과를 구현할 수 있습니다.
    - **`:visited`**, **`:active`**, **`:focus`** 등의 상태 선택자를 사용하여 방문한 링크, 클릭한 링크, 포커스된 링크의 스타일을 지정할 수 있습니다.

아래는 CSS를 사용하여 링크 스타일을 지정하고 호버 효과 및 상태별 스타일을 적용하는 예제입니다:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Styled Links</title>
  <style>
    /* 스타일링된 링크 */
    a {
      color: blue;
      text-decoration: none;
      font-weight: bold;
    }

    /* 호버 효과 */
    a:hover {
      color: red;
      text-decoration: underline;
    }

    /* 방문한 링크 스타일 */
    a:visited {
      color: purple;
    }

    /* 클릭한 링크 스타일 */
    a:active {
      color: green;
    }

    /* 포커스된 링크 스타일 */
    a:focus {
      outline: 2px solid yellow;
    }
  </style>
</head>
<body>
  <h1>Styled Links</h1>
  <a href="#">Normal Link</a>
  <br>
  <a href="#" target="_blank">External Link</a>
</body>
</html>
```

위의 예제 코드에서:

- **`<style>`** 태그 내에서 CSS 스타일을 정의합니다.
- **`a`** 선택자를 사용하여 모든 링크에 스타일을 적용합니다.
- **`:hover`**, **`:visited`**, **`:active`**, **`:focus`** 선택자를 사용하여 호버 효과 및 상태별 스타일을 지정합니다.
- 각 상태별로 색상, 텍스트 장식 등을 변경하여 링크를 스타일링합니다.

![Untitled](HTML%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2(%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A9%E1%86%AB)%20cca3d56c854947cfa13dbd1605077247/Untitled%208.png)

## 단원 체크 타임

**1. 하이퍼링크를 정의하는 태그는 무엇입니까?**

a) `<link>`

b) `<a>`

c) `<nav>`

d) `<url>`

**2.** HTML에서 하이퍼링크를 생성하기 위해 사용하는 태그와 속성에 대한 설명 중 올바른 것은 무엇입니까?

a) `<link>` 태그를 사용하며, `src` 속성을 통해 링크를 지정합니다.
b) `<a>` 태그를 사용하며, `href` 속성을 통해 링크를 지정합니다.
c) `<url>` 태그를 사용하며, `link` 속성을 통해 링크를 지정합니다.
d) `<hyperlink>` 태그를 사용하며, `ref` 속성을 통해 링크를 지정합니다.

**정답:** b) 

**3.** 다음 중 웹 페이지의 네비게이션 바를 구성하기 위해 올바르게 작성된 HTML 코드 블록은 무엇입니까?

a)

```html
<nav>
    <div>Home</div>
    <div>About</div>
    <div>Contact</div>
</nav>

```

b)

```html
<nav>
    <span href="index.html">Home</span>
    <span href="about.html">About</span>
    <span href="contact.html">Contact</span>
</nav>

```

c)

```html
<nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
</nav>

```

d)

```html
<nav>
    <p href="index.html">Home</p>
    <p href="about.html">About</p>
    <p href="contact.html">Contact</p>
</nav>

```

**정답:** c)

---

# 입력 양식(Form)

- 폼(Form)은 웹 페이지에서 사용자로부터 정보를 입력받거나 전송하기 위한 요소입니다. 폼을 사용하면 사용자와 상호작용하여 데이터를 수집하고 서버로 전송할 수 있습니다.
- **폼의 역할과 활용 분야:**
    - 폼은 사용자 입력을 받아 웹 페이지와 서버 간의 데이터 전송을 가능하게 합니다.
    - 주로 회원 가입, 로그인, 검색, 설문 조사, 주문 등 다양한 상황에서 활용됩니다.
    - 폼을 사용하여 사용자 입력을 검증하고 처리함으로써 웹 애플리케이션의 기능을 구현할 수 있습니다.
    - 폼 요소에는 텍스트 입력 필드, 체크박스, 라디오 버튼, 드롭다운 메뉴 등이 있습니다.

### 1. 폼 태그 (form)와 전송 방식 (GET, POST)

**1.1. 폼 태그 (form)**

- 폼 태그(`<form>`)는 사용자로부터 데이터를 입력받기 위한 영역을 정의합니다. 폼 안에는 다양한 입력 요소들이 포함될 수 있으며, 서버로 데이터를 전송하는 방법을 지정할 수 있습니다.
- 기본 문법:
    
    ```html
    <form action="URL" method="전송방식">
        <!-- 입력 요소들 -->
    </form>
    
    ```
    

**1.2. 전송 방식 (GET, POST)**

- **GET 방식**: 데이터를 URL의 쿼리 문자열로 전송합니다. 주로 데이터를 조회할 때 사용하며, 전송된 데이터가 URL에 노출됩니다.
    - 장점: 간단하고, URL에 데이터가 포함되어 북마크할 수 있습니다.
    - 단점: URL 길이 제한이 있으며, 민감한 정보를 전송할 때 부적합합니다.
    - 예시:
        
        ```html
        <form action="/search" method="GET">
            <input type="text" name="query">
            <button type="submit">Search</button>
        </form>
        
        ```
        
- **POST 방식**: 데이터를 HTTP 요청의 본문(body)으로 전송합니다. 주로 데이터를 생성하거나 수정할 때 사용하며, URL에 데이터가 노출되지 않습니다.
    - 장점: 대용량 데이터를 전송할 수 있으며, 민감한 정보 전송에 적합합니다.
    - 단점: URL에 데이터가 포함되지 않아 북마크할 수 없습니다.
    - 예시:
        
        ```html
        <!DOCTYPE html>
        <html>
        <head>
          <title>Registration Form</title>
        </head>
        <body>
          <h1>Registration Form</h1>
          <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <br />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <br />
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <br />
            <input type="submit" value="Register">
          </form>
        </body>
        </html>
        ```
        

![Untitled](HTML%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2(%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A9%E1%86%AB)%20cca3d56c854947cfa13dbd1605077247/Untitled%209.png)

### 2. 입력 태그 (input)와 다양한 타입

**2.1. 입력 태그 (input)**

- `<input>` 태그는 사용자가 데이터를 입력할 수 있는 다양한 필드를 생성합니다. `type` 속성을 통해 입력 필드의 유형을 지정할 수 있습니다.

**2.2. 다양한 타입**

- **text**: 단일 행의 텍스트 입력 필드
    
    ```html
    <input type="text" name="username">
    
    ```
    
- **password**: 비밀번호 입력 필드 (입력한 내용이 표시되지 않음)
    
    ```html
    <input type="password" name="password">
    
    ```
    
- **email**: 이메일 주소 입력 필드 (유효한 이메일 형식 검증)
    
    ```html
    <input type="email" name="email">
    
    ```
    
- **number**: 숫자 입력 필드 (숫자만 입력 가능)
    
    ```html
    <input type="number" name="quantity" min="1" max="10">
    
    ```
    
- **radio**: 라디오 버튼 (여러 옵션 중 하나 선택)
    
    ```html
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female
    
    ```
    
- **checkbox**: 체크박스 (여러 옵션 중 다수 선택 가능)
    
    ```html
    <input type="checkbox" name="subscribe" value="newsletter"> Subscribe to newsletter
    
    ```
    
- **date**: 날짜 선택 필드
    
    ```html
    <input type="date" name="birthday">
    
    ```
    

![Untitled](HTML%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2(%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A9%E1%86%AB)%20cca3d56c854947cfa13dbd1605077247/Untitled%2010.png)

### 3. 텍스트 영역 (textarea)와 버튼 (button)

**3.1. 텍스트 영역 (textarea)**

- `<textarea>` 태그는 여러 행의 텍스트를 입력할 수 있는 영역을 생성합니다. 주로 긴 텍스트나 메모를 입력받을 때 사용됩니다.
- 기본 문법:
    
    ```html
    <textarea name="message" rows="4" cols="50"></textarea>
    
    ```
    
- 예시:
    
    ```html
    <textarea name="comments" rows="5" cols="40">Enter your comments here...</textarea>
    
    ```
    

**3.2. 버튼 (button)**

- `<button>` 태그는 클릭 가능한 버튼을 생성합니다. `type` 속성을 통해 버튼의 유형을 지정할 수 있습니다.
    - **submit**: 폼 데이터를 전송하는 버튼
        
        ```html
        <button type="submit">Submit</button>
        
        ```
        
    - **reset**: 폼의 모든 입력 필드를 초기화하는 버튼
        
        ```html
        <button type="reset">Reset</button>
        
        ```
        
    - **button**: 기본 버튼 (자바스크립트를 통해 다양한 동작을 수행)
        
        ```html
        <button type="button" onclick="alert('Button clicked!')">Click Me</button>
        
        ```
        

### 실습: 입력 양식 만들기

**실습 목표:** 다양한 입력 필드를 포함하는 폼을 작성하고, GET 및 POST 방식을 사용하여 데이터를 전송하는 방법을 실습합니다.

1. **기본 입력 양식 작성**
    - 아래의 코드를 사용하여 기본 입력 양식을 작성합니다.
    
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Form Example</title>
        </head>
        <body>
            <h1>Registration Form</h1>
            <form action="/submit" method="POST">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username">
                <br><br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password">
                <br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email">
                <br><br>
                <label for="comments">Comments:</label>
                <br>
                <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                <br><br>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
        </body>
    </html>
    
    ```
    
2. **브라우저에서 확인하기**
    - 작성한 `form_example.html` 파일을 웹 브라우저에서 열어 입력 양식이 제대로 표시되는지 확인합니다.
    - 다양한 입력 필드에 데이터를 입력하고, 제출 및 초기화 버튼을 클릭하여 동작을 확인합니다.
    
    ![Untitled](HTML%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2(%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A9%E1%86%AB)%20cca3d56c854947cfa13dbd1605077247/Untitled%2011.png)
    

## 단원 체크 타임

### 입력 폼 양식 단원 체크타임 문제

1. HTML에서 사용자 입력 데이터를 서버로 전송하기 위해 폼을 생성할 때 사용하는 기본 태그와 그 속성에 대한 설명으로 올바른 것은 무엇입니까?
    
    a) `<form>` 태그를 사용하며, `action` 속성은 데이터를 전송할 URL을 지정하고, `method` 속성은 데이터를 전송할 방식을 지정합니다.
    
    b) `<input>` 태그를 사용하며, `target` 속성은 데이터를 전송할 URL을 지정하고, `method` 속성은 데이터를 전송할 방식을 지정합니다.
    
    c) `<data>` 태그를 사용하며, `href` 속성은 데이터를 전송할 URL을 지정하고, `method` 속성은 데이터를 전송할 방식을 지정합니다.
    
    d) `<form>` 태그를 사용하며, `src` 속성은 데이터를 전송할 URL을 지정하고, `type` 속성은 데이터를 전송할 방식을 지정합니다.
    
    **정답:** a) 
    
2. 다음 중 사용자로부터 이메일 주소를 입력받기 위해 가장 적합한 입력 필드 타입은 무엇입니까?
    
    a) `<input type="text">`
    
    b) `<input type="email">`
    
    c) `<input type="password">`
    
    d) `<input type="number">`
    
    **정답:** b) 
    
3. 사용자에게 긴 텍스트를 입력받고 제출할 수 있도록 하는 올바른 HTML 코드는 무엇입니까?
    
    a) <textarea name="message"></textarea>
    
    b) <input type="textarea" name="message">
    
    c) <input type="select" name="message">
    
    d) <input type="text" name="message">
    
    **정답:** a) 
    

---

# HTML 리스트, 테이블 등

### 1. 목록 관련 태그

- 순서 없는 리스트 (**`<ul>`**, **`<li>`** 태그):
    - **`<ul>`** 태그는 순서 없는 목록을 생성합니다.
    - **`<li>`** 태그는 각 항목을 정의합니다.
    
    예제:
    
    ```html
    <ul>
      <li>항목 1</li>
      <li>항목 2</li>
      <li>항목 3</li>
    </ul>
    ```
    

- 순서 있는 리스트 (**`<ol>`**, **`<li>`** 태그):
    - **`<ol>`** 태그는 순서 있는 목록을 생성합니다.
    - **`<li>`** 태그는 각 항목을 정의합니다.
    
    예제:
    
    ```html
    <ol>
      <li>첫 번째 항목</li>
      <li>두 번째 항목</li>
      <li>세 번째 항목</li>
    </ol>
    ```
    
    - 위의 예제에서는 순서 있는 목록을 생성하고, **`<li>`** 태그를 사용하여 각 항목을 작성합니다.

- 정의 리스트 (**`<dl>`**, **`<dt>`**, **`<dd>`** 태그):
    - **`<dl>`** 태그는 정의 리스트를 생성합니다.
    - **`<dt>`** 태그는 용어를 정의합니다.
    - **`<dd>`** 태그는 용어에 대한 설명을 작성합니다.
    
    예제:
    
    ```html
    <dl>
      <dt>HTML</dt>
      <dd>웹 페이지 구조를 정의하는 마크업 언어</dd>
      <dt>CSS</dt>
      <dd>웹 페이지 스타일링을 담당하는 스타일 시트 언어</dd>
    </dl>
    
    ```
    
    - 위의 예제에서는 정의 리스트를 생성하고, **`<dt>`** 태그로 용어를 작성하고, **`<dd>`** 태그로 해당 용어에 대한 설명을 작성합니다.
    
    **예제 실행 결과**
    
    ![Untitled](HTML%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2(%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A9%E1%86%AB)%20cca3d56c854947cfa13dbd1605077247/Untitled%2012.png)
    

### <ol>, <ul>, <dl>의 차이점

1. **`<ol>`** 태그 (Ordered List):
    - **`<ol>`** 태그는 순서가 있는 목록을 생성합니다. 순서가 중요 할 때 사용.
    - 목록의 각 항목은 숫자나 알파벳으로 표시됩니다.
    - 주로 순차적인 정보를 나열할 때 사용됩니다.
    - 각 항목은 **`<li>`** (List Item) 태그로 감싸집니다.
2. **`<ul>`** 태그 (Unordered List):
    - **`<ul>`** 태그는 순서가 없는 목록을 생성합니다.
    - 목록의 각 항목은 점, 원, 혹은 다른 기호로 표시됩니다.
    - 순서가 중요하지 않은 목록을 표현할 때 사용됩니다.
    - 각 항목은 **`<li>`** (List Item) 태그로 감싸집니다.
3. **`<dl>`** 태그 (Definition List):
    - **`<dl>`** 태그는 정의 목록을 생성합니다.
    - 목록의 각 항목은 용어와 해당 용어의 정의로 구성됩니다.
    - 각 용어는 **`<dt>`** (Definition Term) 태그로, 해당 용어의 정의는 **`<dd>`** (Definition Description) 태그로 감싸집니다.
    - 주로 용어집이나 용어와 정의를 함께 나타내는 목록을 표현할 때 사용됩니다.

### 2. 테이블 관련 태그

- **`<table>`** 태그: 테이블 생성
    - **`<table>`** 태그는 테이블을 생성합니다.
    - 테이블은 행과 열로 구성되며, **`<tr>`**(행) 태그로 각 행을 정의합니다.
    
    예제:
    
    ```html
    <table>
      <tr>
        <!-- 테이블 셀 -->
      </tr>
      <tr>
        <!-- 테이블 셀 -->
      </tr>
    </table>
    ```
    
    - 위의 예제에서는 **`<table>`** 태그로 테이블을 생성하고, **`<tr>`** 태그로 각 행을 작성합니다.

- **`<tr>`**, **`<td>`** 태그: 행(row)과 셀(cell) 생성
    - **`<tr>`** 태그는 테이블의 행을 생성합니다.
    - **`<td>`** 태그는 각 행의 셀(데이터)을 정의합니다.
    
    예제:
    
    ```html
    <table>
      <tr>
        <td>셀 1</td>
        <td>셀 2</td>
      </tr>
      <tr>
        <td>셀 3</td>
        <td>셀 4</td>
      </tr>
    </table>
    ```
    
    - 위의 예제에서는 **`<table>`** 태그로 테이블을 생성하고, **`<tr>`** 태그로 각 행을 작성합니다. 그리고 **`<td>`** 태그로 각 행의 셀(데이터)을 작성합니다.

- **`<th>`** 태그: 테이블 헤더 셀 생성
    - **`<th>`** 태그는 테이블의 헤더 셀(열 제목)을 정의합니다. **`<th>`** 태그는 일반 셀인 **`<td>`** 태그와 다르게 굵은 글꼴로 표시됩니다.
    
    예제:
    
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <title>Styled Table</title>
    </head>
    <body>
      <h1>Styled Table</h1>
      <table border="1">
        <tr>
          <th>이름</th>
          <th>나이</th>
        </tr>
        <tr>
          <td>John</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Jane</td>
          <td>30</td>
        </tr>
      </table>
    </body>
    </html>
    ```
    
    - 위의 예제에서는 **`<table>`** 태그로 테이블을 생성하고, **`<tr>`** 태그로 각 행을 작성합니다. 헤더 셀로 **`<th>`** 태그를 사용하고, 데이터 셀로 **`<td>`** 태그를 사용합니다.
    
    ![Untitled](HTML%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2(%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A9%E1%86%AB)%20cca3d56c854947cfa13dbd1605077247/Untitled%2013.png)
    

---

### 3. 테이블 스타일링

- CSS를 활용한 테이블 스타일 지정:
    - CSS 선택자를 사용하여 테이블의 특정 요소에 스타일을 적용할 수 있습니다.
    - **`border`**, **`background-color`**, **`padding`**, **`margin`** 등의 속성을 사용하여 테이블의 모양과 간격을 지정할 수 있습니다.
- 테이블 간격, 셀 경계선, 셀 배경 등 설정:
    - **`border-spacing`** 속성을 사용하여 테이블 셀 사이의 간격을 조절할 수 있습니다.
    - **`border`** 속성을 사용하여 셀 경계선의 스타일을 지정할 수 있습니다.
    - **`background-color`** 속성을 사용하여 셀 배경색을 지정할 수 있습니다.
    
    아래는 테이블 스타일링을 위한 실습 예제입니다:
    
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <title>Styled Table</title>
      <style>
        table {
          border-collapse: collapse;
          width: 100%;
        }
    
        th, td {
          border: 1px solid black;
          padding: 8px;
          text-align: left;
        }
    
        th {
          background-color: lightgray;
        }
      </style>
    </head>
    <body>
      <h1>Styled Table</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>John</td>
          <td>25</td>
          <td>USA</td>
        </tr>
        <tr>
          <td>Jane</td>
          <td>30</td>
          <td>Canada</td>
        </tr>
      </table>
    </body>
    </html>
    ```
    
    위의 예제 코드에서:
    
    - **`<style>`** 태그 내에서 CSS 스타일을 정의합니다.
    - **`table`** 선택자를 사용하여 테이블에 스타일을 적용합니다.
    - **`th`**, **`td`** 선택자를 사용하여 테이블 헤더와 데이터 셀에 스타일을 적용합니다.
    - **`border-collapse`** 속성을 **`collapse`**로 설정하여 테이블 셀 경계를 병합합니다.
    - **`border`**, **`padding`** 속성을 사용하여 경계선과 셀 내용의 간격을 조절합니다.
    - **`text-align`** 속성을 **`left`**로 설정하여 텍스트를 왼쪽 정렬합니다.
    - **`background-color`** 속성을 사용하여 테이블 헤더의 배경색을 지정합니다.
    
    ![Untitled](HTML%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2(%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A9%E1%86%AB)%20cca3d56c854947cfa13dbd1605077247/Untitled%2014.png)
    

## Tip)

### <table> 태그와 CSS 그리드의 바른 용도와 차이점

**`<table>`** 태그는 HTML에서 표를 생성하고 데이터를 구조화하는 데 사용되며, CSS 그리드는 CSS에서 요소들을 그리드 형태로 배치하고 정렬하는 데 사용됩니다. **`<table>`** 태그는 표 형태의 정적인 데이터를 표현하는 데 주로 사용되고, CSS 그리드는 유연하고 동적인 레이아웃을 제공하여 요소들을 유연하게 배치할 수 있습니다.

**`<table>`** 태그는 본질적으로 정적인 표 형태이므로 레이아웃을 잡을 표를 사용하는 것은 바람직한 방법이 아니다.

# HTML5

## 1. HTML5의 등장 배경 및 특징

**1.1. HTML5의 등장 배경**

- **기술 발전과 요구사항 증가**: 웹 기술의 발전과 함께 사용자가 요구하는 기능이 점점 복잡해지면서, 기존 HTML4로는 이러한 요구를 충족하기 어려웠습니다.
- **멀티미디어 콘텐츠의 필요성**: 비디오, 오디오, 그래픽 등 멀티미디어 콘텐츠를 웹에서 쉽게 처리할 수 있는 표준이 필요했습니다.
- **웹 애플리케이션의 등장**: 더 복잡한 웹 애플리케이션이 등장하면서, 브라우저에서 바로 실행할 수 있는 보다 강력한 기능들이 요구되었습니다.
- **시맨틱 웹의 중요성**: 웹 페이지의 의미를 명확히 하고, 검색 엔진 및 다른 기술이 콘텐츠를 보다 쉽게 이해할 수 있도록 하는 시맨틱 웹의 필요성이 대두되었습니다.

**1.2. HTML5의 특징**

- **시맨틱 태그**: 의미론적 구조를 정의하는 새로운 태그들 (예: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)이 도입되었습니다.
- **멀티미디어 지원**: 비디오와 오디오를 쉽게 삽입할 수 있는 `<video>` 및 `<audio>` 태그가 도입되었습니다.
- **그래픽 기능**: 2D 및 3D 그래픽을 렌더링할 수 있는 `<canvas>` 및 `<svg>` 태그가 추가되었습니다.
- **폼 기능 향상**: 다양한 입력 타입과 속성들이 추가되어, 폼의 유효성 검사를 더 쉽게 할 수 있게 되었습니다.
- **로컬 저장소**: 클라이언트 측 데이터 저장을 위한 `localStorage` 및 `sessionStorage` API가 도입되었습니다.
- **기타 API**: 다양한 브라우저 API (예: Geolocation, Web Workers, WebSockets)들이 추가되어 웹 애플리케이션 개발을 더욱 용이하게 했습니다.

## 2. 주요 HTML5 시맨틱 태그

**2.1. 시맨틱 태그의 중요성**

- 시맨틱 태그는 HTML 문서의 구조와 의미를 보다 명확히 나타냅니다.
- 검색 엔진 최적화(SEO)와 접근성 향상에 도움을 줍니다.

**2.2. 주요 시맨틱 태그**

**2.2.1. `<header>` 태그**

- 문서나 섹션의 머리말을 정의합니다. 일반적으로 제목, 로고, 네비게이션 메뉴 등을 포함합니다.
- 예시:
    
    ```html
    <header>
        <h1>My Website</h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
        </nav>
    </header>
    
    ```
    

**2.2.2. `<nav>` 태그**

- 네비게이션 링크를 정의합니다. 주로 사이트 내의 주요 링크들을 그룹화하는 데 사용됩니다.
- 예시:
    
    ```html
    <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="contact.html">Contact</a>
    </nav>
    
    ```
    

**2.2.3. `<section>` 태그**

- 문서의 독립적인 섹션을 정의합니다. 일반적으로 제목을 포함하며, 문서의 주요 부분을 나누는 데 사용됩니다.
- 예시:
    
    ```html
    <section>
        <h2>Our Services</h2>
        <p>We offer a wide range of services to meet your needs.</p>
    </section>
    
    ```
    

**2.2.4. `<article>` 태그**

- 독립적인 콘텐츠를 정의합니다. 뉴스 기사, 블로그 포스트, 사용자 리뷰 등 독립적으로 구분될 수 있는 콘텐츠를 포함합니다.
- 예시:
    
    ```html
    <article>
        <h2>Latest News</h2>
        <p>This is a news article about recent events.</p>
    </article>
    
    ```
    

**2.2.5. `<footer>` 태그**

- 문서나 섹션의 바닥글을 정의합니다. 일반적으로 저작권 정보, 연락처 정보, 관련 링크 등을 포함합니다.
- 예시:
    
    ```html
    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
    
    ```
    

# 웹 Semantic의 장/단점

웹의 Semantic(의미론적) 요소는 웹 페이지에서 HTML 태그를 사용하여 콘텐츠의 의미와 구조를 설명하는 방법을 말합니다. Semantic 요소는 웹 페이지의 가독성, 접근성, 검색 엔진 최적화 등에 영향을 미치는 장점이 있습니다. 이제 웹 Semantic의 장단점을 설명하겠습니다:

장점:

1. 가독성 향상: Semantic 요소는 적절한 의미를 갖는 태그를 사용하여 콘텐츠를 구조화합니다. 이는 개발자와 사용자 모두에게 페이지의 구조를 명확하게 전달하여 가독성을 향상시킵니다.
2. 접근성 개선: Semantic 요소는 스크린 리더, 키보드 네비게이션 등 보조 기술을 사용하는 사용자에게 웹 페이지를 더 쉽게 이해할 수 있는 구조로 제공합니다. 적절한 태그 사용은 웹 페이지의 접근성을 향상시킵니다.
3. 검색 엔진 최적화(Search Engine Optimization***,*** SEO): Semantic 요소는 검색 엔진에게 웹 페이지의 의미와 구조를 명확하게 전달합니다. 이는 검색 엔진이 페이지를 더 잘 이해하고 색인화하여 검색 결과에서 상위에 노출시키는 데 도움을 줍니다.
4. 유지 보수 용이성: Semantic 요소를 사용하면 콘텐츠의 구조가 명확해지므로, 웹 페이지의 디자인 변경이나 콘텐츠의 수정에도 쉽게 대응할 수 있습니다.

단점:

1. 브라우저 호환성: 일부 오래된 브라우저는 Semantic 요소를 지원하지 않을 수 있습니다. 이 경우 CSS 스타일링이나 JavaScript를 사용하여 호환성을 보완해야 할 수 있습니다.
2. 학습 곡선: Semantic 요소를 제대로 활용하려면 개발자들이 이를 이해하고 사용하는 데 시간이 필요합니다. 적절한 Semantic 태그를 선택하고 적용하는 방법에 대한 학습이 필요합니다.
3. 코드의 복잡성: Semantic 요소를 사용하면 더 많은 태그를 사용하게 됩니다. 이는 코드의 양이 늘어나고 가독성이 향상되지만, 코드의 복잡성이 증가할 수 있습니다.

요약하자면, 웹 Semantic의 장점은 가독성, 접근성, 검색 엔진 최적화 등을 향상시키며, 유지 보수 용이성을 제공합니다. 하지만 브라우저 호환성과 학습 곡선, 코드의 복잡성 등의 단점이 있을 수 있습니다. 전반적으로 웹 Semantic은 웹 페이지의 품질과 사용자 경험을 개선하는 데 도움을 줍니다.

![Untitled](HTML%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2(%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A9%E1%86%AB)%20cca3d56c854947cfa13dbd1605077247/Untitled%2015.png)

참고 : [https://blog.eunsukim.me/posts/understanding-semantic-html](https://blog.eunsukim.me/posts/understanding-semantic-html)

### 스크린 리더란?

스크린 리더(Screen Reader)는 시각적으로 콘텐츠를 볼 수 없는 시각 장애인을 위해 개발된 보조 기술입니다. 스크린 리더는 컴퓨터나 모바일 장치에 설치되어, 화면에 표시되는 콘텐츠를 음성이나 브라일 조판, 점자 등의 형태로 읽어주는 소프트웨어입니다.

스크린 리더는 사용자가 컴퓨터나 모바일 장치를 조작하면서 화면에 표시된 텍스트, 이미지, 링크, 버튼, 양식 등을 읽어주고 탐색할 수 있게 해줍니다. 시각적으로 표시된 콘텐츠를 음성으로 변환하여 시각 장애인이 정보에 접근할 수 있도록 도와줍니다.

스크린 리더는 웹 페이지, 응용 프로그램, 전자 문서 등 다양한 디지털 콘텐츠에서 사용될 수 있습니다. 웹 페이지에서는 웹 표준과 웹 접근성 가이드라인을 준수하여 구현된 콘텐츠를 스크린 리더가 정확하게 인식하고 읽어줄 수 있도록 해야 합니다.

스크린 리더는 시각 장애인에게 정보의 독립성과 접근성을 제공하여 디지털 세계의 다양한 콘텐츠에 대한 동등한 이용을 가능케 합니다.

### 웹 표준이란?

웹 표준은 웹 개발의 일관성, 접근성, 검색 엔진 최적화 등을 위해 정의된 기술과 규약들의 모음입니다. 웹 표준을 준수하는 것은 웹 페이지의 호환성, 접근성, 유지 보수성을 향상시키는 데 도움을 줍니다.

웹 표준(Web Standard)은 월드 와이드 웹(World Wide Web)에서 사용되는 기술과 규약들의 모음을 말합니다. 이러한 웹 표준은 웹 페이지와 웹 애플리케이션의 개발과 관련된 기술과 규칙을 정의하며, 웹의 구성 요소인 HTML, CSS, JavaScript, XML 등과 관련된 규약과 권고안을 포함합니다.

웹 표준은 여러 조직과 커뮤니티에 의해 개발되며, 주요 조직으로는 웹 표준을 개발하는 국제 기구인 W3C(World Wide Web Consortium)가 있습니다. W3C는 웹의 발전과 표준화를 촉진하기 위해 웹 표준을 개발하고 유지 관리합니다.

웹 표준을 준수하는 것은 웹 개발자들에게 여러 가지 이점을 제공합니다:

1. 크로스 플랫폼 호환성: 웹 표준을 준수하면 다양한 웹 브라우저 및 기기에서 동일한 방식으로 웹 콘텐츠가 표시될 수 있습니다. 이는 사용자 경험의 일관성을 유지하고 모든 사용자가 콘텐츠에 접근할 수 있도록 합니다.
2. 검색 엔진 최적화(SEO): 웹 표준 준수는 검색 엔진에게 웹 페이지의 구조와 의미를 명확하게 전달할 수 있도록 도와줍니다. 이는 검색 엔진에서 웹 페이지를 더 잘 인식하고 색인화하여 검색 결과에서 상위에 노출시키는 데 도움을 줍니다.
3. 접근성 향상: 웹 표준 준수는 웹 콘텐츠의 접근성을 향상시킵니다. 스크린 리더, 보조 기술, 모바일 장치 등을 사용하는 사용자들이 웹 콘텐츠에 더 쉽게 접근하고 사용할 수 있도록 도와줍니다.
4. 유지 보수 용이성: 웹 표준을 준수하면 코드의 구조와 의미가 명확해지므로, 웹 페이지의 디자인 변경이나 기능 수정에도 쉽게 대응할 수 있습니다. 이는 유지 보수 비용을 줄이고 개발자들의 작업 효율성을 향상시킵니다.

# 웹 접근성과 웹 표준에 대한 법적 제재

1. 장애인차별금지 및 권리구제 등에 관한 법률(장차법):
    - 장차법은 장애인의 권리를 보호하고 차별을 금지하는 법률입니다.
    - 웹 접근성에 관한 내용을 다루는데, 장애인이 웹 콘텐츠에 접근하고 이용할 수 있도록 웹 사이트와 애플리케이션을 제작 및 제공하는 자에게 웹 접근성 준수를 요구합니다.
2. 정보통신보호법:
    - 정보통신보호법은 정보통신 서비스 제공자의 의무와 사용자의 권리를 규정하는 법률입니다.
    - 정보통신 서비스 제공자는 웹 사이트와 애플리케이션을 제작 및 제공할 때 웹 표준과 웹 접근성을 준수해야 합니다.
    - 웹 접근성 및 웹 표준 준수에 대한 세부 사항은 관련 기관이 지침을 제시하고 있습니다.

## <i>태그와 <em>태그의 차이 점

- **`<i>`** 태그:
    - **`<i>`** 태그는 기본적으로 텍스트를 이탤릭체로 표시하는 데 사용됩니다.
    - **`<i>`** 태그는 주변 텍스트와 구분하기 위해 일반적으로 이탤릭체로 렌더링됩니다.
    - **`<i>`** 태그는 시각적인 스타일링을 위한 용도로 사용되지만, 본질적인 의미나 중요성을 나타내지 않습니다.
    - 예를 들어, 문학 작품의 제목, 용어, 기술적 용어 등을 강조할 때 **`<i>`** 태그를 사용할 수 있습니다.
- **`<em>`** 태그:
    - **`<em>`** 태그는 의미적으로 중요한 부분을 강조하기 위해 사용됩니다. "emphasized"의 약자로 강조된 텍스트를 나타냅니다.
    - **`<em>`** 태그는 주변 텍스트와 구분하기 위해 일반적으로 이탤릭체로 렌더링됩니다.
    - **`<em>`** 태그는 시각적인 스타일링보다는 의미적인 강조에 중점을 둡니다.
    - 예를 들어, 문장에서 강조되어야 할 의미적인 요소, 중요한 키워드, 강조해야 할 문구 등을 **`<em>`** 태그를 사용하여 표시할 수 있습니다.

## <b>태그와 <strong> 태그의 차이점

**`<b>`** 태그와 **`<strong>`** 태그는 모두 텍스트를 굵게 표시하는 데 사용되는 HTML 태그입니다. 하지만 그들은 의미적인 측면에서 차이가 있습니다.

- **`<b>`** 태그:
    - **`<b>`** 태그는 텍스트를 굵게 표시하는 데 사용됩니다.
    - **`<b>`** 태그는 주로 시각적인 스타일링을 위해 사용됩니다.
    - **`<b>`** 태그는 본질적인 의미나 중요성을 나타내지 않습니다.
    - 예를 들어, 문단 내에서 텍스트를 굵게 강조하거나 주목을 끌기 위해 **`<b>`** 태그를 사용할 수 있습니다.
- **`<strong>`** 태그:
    - **`<strong>`** 태그는 의미적으로 중요한 부분을 강조하기 위해 사용됩니다.
    - **`<strong>`** 태그는 강한 강조를 나타내는 의미적인 표현을 강조합니다.
    - **`<strong>`** 태그는 주변 텍스트와 구분하기 위해 일반적으로 굵게 렌더링됩니다.
    - 예를 들어, 중요한 정보, 경고, 경고 문구 등을 강조할 때 **`<strong>`** 태그를 사용할 수 있습니다.

요약하자면, **`<b>`** 태그는 텍스트를 굵게 표시하며 시각적인 스타일링에 중점을 둡니다. 반면, **`<strong>`** 태그는 의미적으로 중요한 부분을 강조하며, 주변 텍스트와 구분하기 위해 굵게 렌더링됩니다. **`<strong>`** 태그는 시각적인 스타일링보다는 의미적인 강조에 초점을 둡니다.

## **`font-size`** 속성과 **`<h1>`** 태그의 차이점

- **`font-size`** 속성:
    - **`font-size`** 속성은 CSS(Cascading Style Sheets)에서 사용되며, 특정 요소의 텍스트 크기를 지정합니다.
    - **`font-size`** 속성은 텍스트의 크기를 상대적인 단위(예: px, em, rem) 또는 절대적인 단위(예: %)로 설정할 수 있습니다.
    - **`font-size`** 속성은 특정 요소에 직접 적용되므로 해당 요소의 모든 텍스트 크기가 변경됩니다.
- **`<h1>`** 태그:
    - **`<h1>`** 태그는 HTML에서 사용되는 헤더(제목) 태그 중 하나로, 문서의 구조를 나타내기 위해 사용됩니다.
    - **`<h1>`** 태그는 기본적으로 큰 제목을 나타내며, 다른 **`<h>`** 태그(예: **`<h2>`**, **`<h3>`**)는 상대적으로 작은 제목을 나타냅니다.
    - **`<h1>`** 태그는 문서의 구조를 나타내기 위한 의미론적인 역할을 하며, 디자인적인 목적으로만 크기를 조정하는 것은 권장되지 않습니다.

## 실습: HTML5 시맨틱 태그 사용하기

**실습 목표:** HTML5 시맨틱 태그를 사용하여 웹 페이지를 구조화합니다.

1. **기본 시맨틱 구조 작성**
    - 아래의 코드를 사용하여 시맨틱 태그를 포함하는 웹 페이지를 작성합니다.
    
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Semantic HTML Example</title>
        </head>
        <body>
            <header>
                <h1>My Website</h1>
                <nav>
                    <a href="index.html">Home</a>
                    <a href="about.html">About</a>
                    <a href="services.html">Services</a>
                    <a href="contact.html">Contact</a>
                </nav>
            </header>
            <main>
                <section>
                    <h2>About Us</h2>
                    <p>We are a company that values excellence and innovation.</p>
                </section>
                <article>
                    <h2>Latest News</h2>
                    <p>This is a news article about recent events.</p>
                </article>
            </main>
            <footer>
                <p>&copy; 2024 My Website. All rights reserved.</p>
            </footer>
        </body>
    </html>
    ```
    
2. **브라우저에서 확인하기**
    - 작성한 `semantic_example.html` 파일을 웹 브라우저에서 열어 시맨틱 태그가 적용된 구조를 확인합니다.

## 단원 체크 타임

1. HTML5의 주요 목표 중 하나가 아닌 것은 무엇입니까?
    
    a) 멀티미디어 콘텐츠의 통합 지원
    
    b) 기존 브라우저와의 호환성 유지
    
    c) 플래시와 같은 플러그인의 필요성 증가
    
    d) 시맨틱 태그를 통한 문서 구조의 명확화
    
    **정답:** c) 
    
2. 다음 중 HTML5에서 새롭게 도입된 시맨틱 태그가 아닌 것은 무엇입니까?
    
    a) `<header>`
    
    b) `<footer>`
    
    c) `<section>`
    
    d) `<bold>`
    
    **정답:** d)
    
3. HTML5의 `<video>` 태그에 대한 설명으로 올바르지 않은 것은 무엇입니까?
    
    a) `<video>` 태그는 비디오 콘텐츠를 삽입하는 데 사용됩니다.
    
    b) `src` 속성은 비디오 파일의 경로를 지정합니다.
    
    c) `controls` 속성은 사용자 인터페이스를 제공하여 비디오 재생을 제어할 수 있게 합니다.
    
    d) `<video>` 태그는 반드시 `type` 속성을 포함해야 합니다.
    
    **정답:** d) 
    

---

# 웹 프론트엔드 학습에 도움이 될 인터넷 사이트 안내

### 1. W3Schools

- **사이트 주소:** [W3Schools](https://www.w3schools.com/)
- **설명:** HTML, CSS, JavaScript 등 웹 기술에 대한 기초부터 고급까지 학습할 수 있는 튜토리얼과 예제가 풍부합니다. 실습할 수 있는 온라인 편집기도 제공하여, 코드를 작성하고 즉시 결과를 확인할 수 있습니다.

### 2. MDN Web Docs

- **사이트 주소:** [MDN Web Docs](https://developer.mozilla.org/)
- **설명:** Mozilla에서 제공하는 웹 개발 및 웹 기술에 관한 포괄적인 문서입니다. HTML, CSS, JavaScript 및 기타 웹 표준에 대한 심도 있는 설명과 예제를 제공합니다.

### 3. FreeCodeCamp

- **사이트 주소:** [FreeCodeCamp](https://www.freecodecamp.org/)
- **설명:** 무료로 웹 개발을 배울 수 있는 온라인 플랫폼입니다. HTML, CSS, JavaScript 등을 포함한 다양한 과정을 제공하며, 실제 프로젝트를 통해 실습할 수 있습니다.

### 4. Codecademy

- **사이트 주소:** [Codecademy](https://www.codecademy.com/)
- **설명:** 대화형 학습을 통해 HTML, CSS, JavaScript 및 기타 프로그래밍 언어를 배울 수 있는 플랫폼입니다. 기초부터 고급 과정까지 다양한 학습 경로를 제공합니다.

### 5. CSS-Tricks

- **사이트 주소:** [CSS-Tricks](https://css-tricks.com/)
- **설명:** CSS와 웹 디자인에 대한 다양한 팁, 트릭, 기사, 튜토리얼을 제공하는 블로그입니다. CSS에 대한 깊이 있는 지식을 얻을 수 있습니다.

### 6. Frontend Mentor

- **사이트 주소:** [Frontend Mentor](https://www.frontendmentor.io/)
- **설명:** 실제 프론트엔드 프로젝트를 기반으로 한 챌린지를 제공하여, 실무에서 필요한 기술을 연습할 수 있습니다. 디자인 파일을 제공하여 실제 프로젝트와 유사한 환경에서 작업할 수 있습니다.

### 7. LeetCode

- **사이트 주소:** [LeetCode](https://leetcode.com/)
- **설명:** 알고리즘과 데이터 구조 문제를 풀 수 있는 플랫폼입니다. 프론트엔드 개발에 필요한 JavaScript 실력을 향상시키는 데 도움이 됩니다.

### 8. Stack Overflow

- **사이트 주소:** [Stack Overflow](https://stackoverflow.com/)
- **설명:** 전 세계 개발자들이 모여 질문하고 답변하는 Q&A 사이트입니다. 문제 해결에 도움이 되는 다양한 질문과 답변을 찾을 수 있습니다.

### 9. Smashing Magazine

- **사이트 주소:** [Smashing Magazine](https://www.smashingmagazine.com/)
- **설명:** 웹 디자인과 개발에 관한 기사, 튜토리얼, 뉴스 등을 제공하는 사이트입니다. 최신 웹 기술과 디자인 트렌드에 대해 배울 수 있습니다.

### 10. CodePen

- **사이트 주소:** [CodePen](https://codepen.io/)
- **설명:** HTML, CSS, JavaScript로 작성한 코드를 공유하고 실험할 수 있는 온라인 커뮤니티입니다. 다른 개발자들의 작품을 보고 배우거나, 자신의 코드를 실험해 볼 수 있습니다.

---

# 웹 프론트엔드 학습에 도움이 될 동영상 강의 사이트

### 1. 인프런 (Inflearn)

- **사이트 주소:** [인프런](https://www.inflearn.com/)
- **설명:** 한국어로 제공되는 다양한 IT 강의를 수강할 수 있는 플랫폼입니다. 웹 프론트엔드, 백엔드, 데이터 사이언스, 인공지능 등 다양한 분야의 강좌를 제공합니다. 웹 퍼블리싱 및 프론트엔드 관련 강좌도 풍부하게 제공됩니다.

### 2. 유데미 (Udemy)

- **사이트 주소:** [유데미](https://www.udemy.com/)
- **설명:** 전 세계적으로 유명한 온라인 학습 플랫폼으로, 다양한 언어로 제공되는 수많은 강좌가 있습니다. 웹 개발, 디자인, 비즈니스 등 다양한 분야의 강의를 저렴한 가격에 수강할 수 있습니다. 많은 프론트엔드 강좌들이 있으며, 할인 기간을 이용하면 저렴하게 수강할 수 있습니다.

### 3. 에듀캐스트 (Educast)

- **사이트 주소:** [에듀캐스트](https://educast.pro/)
- **설명:** 한국의 온라인 학습 플랫폼으로, 다양한 분야의 전문가들이 제공하는 강의를 수강할 수 있습니다. 웹 개발, 프로그래밍, 디자인 등 다양한 주제의 강의를 제공하며, 실무에서 바로 활용할 수 있는 기술을 배울 수 있습니다.

### 4. 생활코딩 (Life Coding)

- **사이트 주소:** [생활코딩](https://opentutorials.org/course/1)
- **설명:** 한국어로 제공되는 무료 온라인 코딩 교육 사이트입니다. HTML, CSS, JavaScript를 포함한 다양한 프로그래밍 언어와 웹 개발 관련 강좌를 제공합니다. 초보자도 쉽게 따라 할 수 있는 튜토리얼 형식으로 구성되어 있습니다.

### 5. 플루럴사이트 (Pluralsight)

- **사이트 주소:** [플루럴사이트](https://www.pluralsight.com/)
- **설명:** IT 전문가를 위한 온라인 학습 플랫폼으로, 심화된 기술 강좌를 제공합니다. 웹 개발, 소프트웨어 개발, 데이터 과학 등 다양한 분야의 강좌가 있으며, 전문가 수준의 강의를 통해 깊이 있는 지식을 배울 수 있습니다.

### 6. 커세라 (Coursera)

- **사이트 주소:** [커세라](https://www.coursera.org/)
- **설명:** 세계적인 대학과 기업이 제공하는 온라인 강좌를 수강할 수 있는 플랫폼입니다. 웹 개발, 컴퓨터 과학, 데이터 과학 등 다양한 분야의 강의를 제공하며, 수료증을 받을 수 있는 강좌도 많이 있습니다.

### 7. 칸아카데미 (Khan Academy)

- **사이트 주소:** [칸아카데미](https://www.khanacademy.org/)
- **설명:** 무료로 다양한 교육 콘텐츠를 제공하는 플랫폼으로, 컴퓨터 프로그래밍 섹션에서 HTML, CSS, JavaScript 등 웹 개발 관련 강의를 수강할 수 있습니다. 비영리 단체로 운영되어 모든 강의가 무료로 제공됩니다.

### 8. 팀 트리하우스 (Team Treehouse)

- **사이트 주소:** [팀 트리하우스](https://teamtreehouse.com/)
- **설명:** 웹 개발, 모바일 개발, 게임 개발 등 다양한 분야의 기술을 배울 수 있는 온라인 학습 플랫폼입니다. 인터랙티브한 학습 방식과 프로젝트 기반의 강의를 통해 실무에서 필요한 기술을 배울 수 있습니다.

### 9. 넷트라이브 아카데미 (NetTuts+)

- **사이트 주소:** [Tuts+](https://tutsplus.com/)
- **설명:** 웹 개발, 디자인, 사진, 비디오 등 다양한 주제의 강의를 제공하는 플랫폼입니다. 초보자부터 전문가까지 모두를 위한 강좌가 있으며, 실습을 통해 배운 내용을 직접 적용해 볼 수 있습니다.

### 10. 린다닷컴 (LinkedIn Learning)

- **사이트 주소:** [LinkedIn Learning](https://www.linkedin.com/learning/)
- **설명:** LinkedIn에서 제공하는 온라인 학습 플랫폼으로, 비즈니스, 기술, 창의력 분야의 강의를 제공합니다. 웹 개발 관련 강좌도 많이 있으며, 실무에서 바로 활용할 수 있는 기술을 배울 수 있습니다.

### 11. Devlec.com 소개

- **사이트 주소:** [Devlec.com](http://www.devlec.com/)
- **설명:** Devlec.com은 다양한 IT 및 프로그래밍 관련 강의를 제공하는 온라인 학습 플랫폼입니다. 초보자부터 전문가까지 다양한 수준의 학습자가 웹 개발, 모바일 개발, 데이터베이스, 머신러닝 등 다양한 기술을 배울 수 있도록 도와줍니다.

---

# 개발자를 위한 ChatGPT 활용 요령

### Generative AI can increase developer speed, but less so for complex tasks.

![[https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/unleashing-developer-productivity-with-generative-ai](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/unleashing-developer-productivity-with-generative-ai)](%E1%84%86%E1%85%A5%E1%86%AF%E1%84%90%E1%85%B5%E1%84%8F%E1%85%A2%E1%86%B7%E1%84%91%E1%85%A5%E1%84%89%E1%85%B3%20%E1%84%8E%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A8%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%BC%20%E1%84%80%E1%85%AD%E1%84%8B%E1%85%A1%E1%86%AB%20d3a971ad3a7748ddb989c6f74e9224e7/8%20NCP%20%E1%84%86%E1%85%B5%E1%86%BE%20AI%20%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%2068a9cd53d1304aa99540cbfd0bd276d1/Day%204%20NCP%20AI%20%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3%20%E1%84%90%E1%85%A1%E1%86%B7%E1%84%89%E1%85%A2%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%90%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A1%E1%86%B8%204bd8cd09a1264268995e296356a00d5a/%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8C%E1%85%A1%20AI%20%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%208c6b4df1e6794e149d221e9f5a8eac7d/Untitled.png)

[https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/unleashing-developer-productivity-with-generative-ai](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/unleashing-developer-productivity-with-generative-ai)

생성적 AI 기반 도구는 많은 일반적인 개발자 작업에 대해 인상적인 속도 향상을 제공합니다(사이드바 "About the research" 참조). 유지 관리 용이성을 위한 코드 기능 문서화는 절반의 시간 안에 완료할 수 있고, 새 코드를 작성하는 데는 거의 절반의 시간이 걸리며, 기존 코드를 코드 리팩토링 하는 데는 거의 2/3의 시간이 소요됩니다. 

적절한 기술 향상과 기업 지원을 통해 이러한 속도 향상은 새로운 도구와 프로세스를 통해 과거의 엔지니어링 생산성 향상을 능가하는 생산성 향상으로 이어질 수 있습니다.

개발자는 이제 생성형 AI를 활용 가능하기 때문에 언어의 장벽이 그만큼 무너진 시대. 가능하면 풀스텍으로 학습하는 것을 추천 한다.

---

### 개발자는 개발만 하지 않는다.

코드 유지 관리에는 평균 개발자 일주일의 30%가 소요되며, 그 중 4분의 1은 그들이 사용하는 오픈 소스 패키지와 관련되어 있습니다.

![[https://blog.tidelift.com/developers-spend-30-of-their-time-on-code-maintenance-our-latest-survey-results-part-3](https://blog.tidelift.com/developers-spend-30-of-their-time-on-code-maintenance-our-latest-survey-results-part-3)](%E1%84%86%E1%85%A5%E1%86%AF%E1%84%90%E1%85%B5%E1%84%8F%E1%85%A2%E1%86%B7%E1%84%91%E1%85%A5%E1%84%89%E1%85%B3%20%E1%84%8E%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A8%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%BC%20%E1%84%80%E1%85%AD%E1%84%8B%E1%85%A1%E1%86%AB%20d3a971ad3a7748ddb989c6f74e9224e7/8%20NCP%20%E1%84%86%E1%85%B5%E1%86%BE%20AI%20%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%2068a9cd53d1304aa99540cbfd0bd276d1/Day%204%20NCP%20AI%20%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3%20%E1%84%90%E1%85%A1%E1%86%B7%E1%84%89%E1%85%A2%E1%86%A8%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%90%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A1%E1%86%B8%204bd8cd09a1264268995e296356a00d5a/%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8C%E1%85%A1%20AI%20%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%208c6b4df1e6794e149d221e9f5a8eac7d/Untitled%201.png)

[https://blog.tidelift.com/developers-spend-30-of-their-time-on-code-maintenance-our-latest-survey-results-part-3](https://blog.tidelift.com/developers-spend-30-of-their-time-on-code-maintenance-our-latest-survey-results-part-3)

설문조사에 따르면 대부분의 응답자(70%)가 코드 유지 관리에 시간의 11~50%를 소비하는 것으로 나타났습니다. 주 40시간 근무의 경우 이는 주당 4.4~20시간에 해당합니다.

주로 개발자는 일의 대부분은 이해관계를 따지거나 요구 분석과 테스트 및 보고서 작성이나 문서 작업에 많은 시간이 할애 됩니다. 개발자는 코딩만 하지 않는다. 문제 해결 및 유지 관리에 점점 더 많은 비중을 차지하게 될 것입니다.

---

### 긍정적인 효과

1. **생산성 향상**: 생성형 AI는 반복적이거나 기초적인 코딩 작업을 자동화함으로써 개발자가 더 복잡하고 창의적인 문제 해결에 집중할 수 있도록 돕습니다. 예를 들어, 소스 코드를 생성하거나 수정하는 데 AI를 사용할 수 있습니다.
2. **오류 감소**: AI는 코드를 작성할 때 일관성을 유지하고, 기존 코드베이스와 일치하는 방식으로 새 코드를 제안할 수 있습니다. 이는 실수를 줄이고 코드 품질을 향상시킬 수 있습니다.
3. **창의적인 아이디어 및 솔루션 제공**: AI는 기존 데이터와 패턴에서 학습하여 새로운 아이디어와 접근 방식을 제안할 수 있습니다. 이는 개발 프로젝트에 신선한 관점을 더하고 혁신을 촉진할 수 있습니다.
4. **교육 및 학습 지원**: AI는 초보 개발자가 코딩 기술을 배우고 실습할 수 있는 플랫폼을 제공할 수 있습니다. 예를 들어, 코드 작성을 연습하거나 디버깅 기술을 개발하는 데 도움을 줄 수 있습니다.

### 바람직한 활용 방법

1. **보조 도구로서 활용**: AI를 주된 결정자나 독립적인 개발자로 사용하기보다는 보조 도구로 활용하여 인간 개발자의 결정을 보완하는 방식으로 사용하는 것이 바람직합니다.
2. **투명성 유지**: AI가 생성한 코드나 콘텐츠에 대해서는 그 출처와 생성 과정을 명확히 하여 팀 내의 다른 구성원들이 이해할 수 있도록 해야 합니다.
3. **윤리적 기준 설정**: 생성형 AI를 사용할 때는 저작권, 개인정보 보호, 데이터 보안 등 윤리적인 기준을 엄격히 준수해야 합니다. AI의 출력물이 타인의 권리를 침해하지 않도록 주의해야 합니다.
4. **지속적인 검토와 평가**: AI가 생성한 결과물은 항상 인간의 검토를 거쳐야 합니다. AI가 아직 완벽하지 않기 때문에 잠재적 오류나 문제를 사전에 발견하고 수정할 필요가 있습니다.

ChatGPT는 프로그래밍 학습 및 소프트웨어 개발 과정에서 다양한 방식으로 활용될 수 있습니다. 아래는 웹 프론트엔드 및 백엔드 개발을 포함한 소프트웨어 개발 학습을 위해 ChatGPT를 효과적으로 활용하는 요령입니다.

### 1. 코드 예제 및 설명 요청

**1.1. 특정 기능 구현 예제**

- 특정 기능을 구현하는 방법을 코드 예제로 요청할 수 있습니다.
- 예시: "JavaScript로 배열을 오름차순으로 정렬하는 코드를 보여주세요."

**1.2. 코드 설명 및 해석**

- 이해하기 어려운 코드나 문법에 대해 설명을 요청할 수 있습니다.
- 예시: "이 Python 코드가 하는 일을 설명해 주세요."

### 2. 코드 리뷰 및 피드백

**2.1. 코드 리뷰 요청**

- 작성한 코드에 대한 리뷰를 요청하여 개선점을 제안받을 수 있습니다.
- 예시: "아래의 React 컴포넌트에 대해 코드 리뷰를 해주세요."

**2.2. 성능 최적화 조언**

- 코드의 성능을 최적화할 수 있는 방법에 대해 조언을 받을 수 있습니다.
- 예시: "이 Python 코드의 성능을 어떻게 개선할 수 있을까요?"

### 3. 디버깅 및 문제 해결

**3.1. 오류 메시지 해결**

- 코드에서 발생한 오류 메시지에 대한 해결 방법을 요청할 수 있습니다.
- 예시: "이 오류 메시지를 해결하는 방법을 알려주세요: 'TypeError: undefined is not a function'."

**3.2. 디버깅 도움**

- 코드에서 발생하는 문제를 디버깅하는 데 도움을 받을 수 있습니다.
- 예시: "이 JavaScript 함수가 예상대로 작동하지 않는 이유를 알려주세요."

### 4. 개념 이해 및 학습 자료 추천

**4.1. 개념 설명 요청**

- 특정 프로그래밍 개념이나 기술에 대한 설명을 요청할 수 있습니다.
- 예시: "Node.js의 이벤트 루프가 어떻게 작동하는지 설명해 주세요."

**4.2. 학습 자료 추천**

- 학습에 도움이 되는 온라인 강의, 책, 튜토리얼 등의 자료를 추천받을 수 있습니다.
- 예시: "React를 배우기 위한 좋은 온라인 강의를 추천해 주세요."

### 5. 프로젝트 아이디어 및 실습 과제

**5.1. 프로젝트 아이디어 제안**

- 학습 수준에 맞는 프로젝트 아이디어를 제안받아 실습할 수 있습니다.
- 예시: "초보자를 위한 간단한 웹 프론트엔드 프로젝트 아이디어를 주세요."

**5.2. 실습 과제 제공**

- 특정 기술을 연습할 수 있는 실습 과제를 요청할 수 있습니다.
- 예시: "JavaScript의 배열 메서드를 연습할 수 있는 과제를 주세요."

### 6. 학습 계획 및 커리큘럼

**6.1. 학습 계획 수립**

- 단계별 학습 계획을 세우는 데 도움을 받을 수 있습니다.
- 예시: "웹 프론트엔드 개발을 배우기 위한 학습 계획을 세워 주세요."

**6.2. 커리큘럼 제안**

- 특정 기술이나 언어를 학습하기 위한 커리큘럼을 제안받을 수 있습니다.
- 예시: "백엔드 개발을 위한 학습 커리큘럼을 제안해 주세요."

### ChatGPT 활용 예시

**코드 예제 요청 예**

```
Q: JavaScript로 간단한 Todo 리스트 앱을 만드는 예제를 보여주세요.
```

```
Q: 아래 코드가 작동하지 않습니다. 이유를 알려주세요.
```javascript
const element = document.getElementById('myElement');
element.style.color = 'blue';
```

```
Q: Javascript를 배우기 위한 좋은 자료를 추천해 주세요.
```

Ch atGPT는 개발 과정에서 필요한 다양한 도움을 제공 받을 수 있으나 가능하면 처음 프로그래밍을 처음 배울 때는 독이 될 수도 있으니 먼저 스스로 많은 경험과 문제 해결을 해 보는 것을 권장 합니다."# coco" 
