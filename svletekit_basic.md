# sveltekit 특성
    - +page.svlete => html 파일 가능
    - +page.server.js => javascript 분리

# Routing

    - Linked Routes
    - Nested Routes

## Linked Routes
    
- HTML `<a>` tag와 동일

## Default Routes

    - root
        - src/routes => '/'
            - http://localhost:5173/+page.svelte 파일에서 요청 처리
    - default
        - 폴더명 구조
    - queryString
        - /path_url?key1=value1&key2=value2
        - $page.url.searchParams의 get method 사용하여 값
    - pathParameter
        - 폴더명을 [] 로 감싸 준다.
            - /path_url/path
            - /path_url/[Id](예)
            - $page.params에서 구조 분해 할당으로 값 추출.

## Nested Routes

    - 중첩 구조
        -root/path/[pathParameter]/path/[pathParameter]

## Rest Routes

    - 통합 구조
        - [] 안에 ... 연산자를 넣어 표현

## Optional Routes

    - 조건 분기 구조
        [[ ]] 로 표현

## Matching

    - 필터링 구조
        - 폴더명 : src/params 폴더명 고정 컨벤션
        - 파일 내부 method name -> match : 고정 컨벤션
        - 정규 표현식을 / ~~~ / 내부에 사용
        - JS 에서 제공하는 정규식 처리 함수 -> test()
        - match method 파일명을 적용하려는 path parameter 에 적용
            - [userId = integer]

## requestEvent

    - 활용 key
        - cookies, fetch, params, request, route, url

## Layout