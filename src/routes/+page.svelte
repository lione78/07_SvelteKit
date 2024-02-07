<script>
    import TestComponent from "./testComponent.svelte";
    const name = 'richard';
</script>

<h1>SvelteKit</h1>
<p>Visit 
<br> 
    <a href="/user">User</a>
<br>
User List</p>

<!-- <TestComponent data={name}/> -->

<!--name= 생략 가능/ export된 name가 이파일의 name가 binding-->
<TestComponent {name}/>