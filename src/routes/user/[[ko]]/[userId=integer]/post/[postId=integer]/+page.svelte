<script>
    import { page } from "$app/stores";

    const { userId, postId } = $page.params;

    console.log(userId);
    console.log(postId);
</script>

<h1>User {userId}번 님의 Post {postId} 번 내용입니다.</h1>
<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eveniet! Consequuntur magnam ea aut vitae voluptate praesentium, molestiae voluptatum expedita similique adipisci, magni facere. Ut dolorem maxime et vitae alias!</h3>