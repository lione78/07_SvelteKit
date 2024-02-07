import { db } from "$lib/database";
import { json } from "@sveltejs/kit";

async function updateUser(obj){
    try{
        const user = await db.user.update({
            where : { id: obj.id },
                data: {
                email: obj.email,
                name: obj.name
                },
            });
            return user;
    } catch(error) {

    }
}

async function deleteUser(userId){
    try{
        const user = await db.user.delete({
            where : {id: userId},
        });
        return user;
    } catch(error) {

    }
}

// const { request, params } = requestEvent; 
// const { pathname, search, searchParams } = $page.url;

export async function PATCH({ request, params }) {
    const { userId } = params;

    console.log(userId);
    const obj = await request.json(); // json() object로 변경
    const newObj = {
        id: parseInt(userId),
        email: obj.email,
        name: obj.name
    }

    const res = await updateUser(newObj);

    return json(res);
}


export async function DELETE( { params }) {
    const { userId } = params;

    console.log(userId);
    const res = await deleteUser(parseInt(userId));
    return json(res);
}