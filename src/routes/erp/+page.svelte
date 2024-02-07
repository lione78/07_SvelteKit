<h1>SvelteKit Form Control</h1>
<form action="?/form1" method="post">
    <div class="mb-3">
        <label for="inputId" class="form-label">Id</label>
        <input
            type="text"
            class="form-control"
            id="inputId"
            style="width: 50%"
            aria-describedby="emailHelp"
            name="formId"
        />
    </div>
    <div class="mb-3">
        <label for="inputEmail" class="form-label">email</label>
        <input
            type="email"
            class="form-control"
            id="inputEmail"
            style="width: 50%"
            aria-describedby="emailHelp"
            name="formEmail"
        />
    </div>
    <div class="mb-3">
        <label for="inputName" class="form-label">Name</label>
        <input
            type="text"
            class="form-control"
            id="inputName"
            style="width: 50%"
            name="formName"
        />
    </div>
    <input class="form-control" type="submit" style="width: 50%">
</form>

<form action="?/form2" method="post">
    <div class="mb-3">
        <label for="inputAge" class="form-label">Age</label>
        <input
        type="text"
        class="form-control"
        id="inputAge"
        style="width: 50%"
        aria-describedby="emailHelp"
        name="formAge"
        />
    </div>
    <input class="form-control" type="submit" style="width: 50%">
</form>
<!-- <button type="submit" class="btn btn-primary" onclick="getJsonData()">
    Get
</button>
<button type="submit" class="btn btn-primary" onclick="postJsonData()">
    Post
</button>
<button type="submit" class="btn btn-primary" onclick="putJsonData()">
    Put
</button>
<button
    type="submit"
    class="btn btn-primary"
    onclick="deleteJsonData()"
>
    Delete
</button> -->



<br />