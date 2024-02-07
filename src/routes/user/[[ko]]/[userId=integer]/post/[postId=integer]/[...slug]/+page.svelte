<script>
    import { page } from "$app/stores";
    import { createEventDispatcher } from "svelte";

    const { slug } = $page.params;

    const slugArr = $page.params.slug.split('/');

    // console.log(slug);
    console.log(slugArr);
</script>

<h1>Rest Parameters</h1>
<h2>...slug = {slug}</h2>
{#each slugArr as slug, i}  <!--i (index): loop과 같은 역할/ defalut 지정-->
<h4> {i+1} : {slug}</h4>
{/each}