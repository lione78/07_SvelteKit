<script>
    // sveltekit에서 browser에서 get방식으로 server에 보내서 browser로 다시 보냄 > server 역할
    import { page } from "$app/stores";

    import ComponentTest from "./ComponentTest.svelte";

    const { pathname, search, searchParams } = $page.url;
    // sveltekit에서는 console.log 의 값은 : browser와 server에서 출력됨. > rendering 2번 발생
    console.log(pathname);
    // ?key1=value1&key2=value2 불필요한 자료가 browser로 간다.
    console.log(search);
    console.log(searchParams);
    console.log(searchParams.get("key1"));  // searchParams의 value를 가져옴.
    const key1 = searchParams.get("key1");
</script>

<h1>User List</h1>

<div>
    <h3>pathname : {pathname}</h3>
    <h3>query String : {search}</h3>
    <h3>query String key1 : {key1}</h3>

    <ComponentTest />
</div>