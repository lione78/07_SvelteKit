<script>
    import { page } from '$app/stores';
    // const { params } = $page;    $ getter : page 객체를 불러옴
    // const { userId } = params;   $ page의 params 가져옴.

    const { userId } = $page.params;
    const { ko } = $page.params;

    console.log(userId);
    console.log(ko);
    console.log($page.params.userId);
</script>

{#if ko === 'en'}
    <h1>user id : {userId}</h1>
{:else}
    <h1>유저아이디 : {userId}</h1>
{/if}