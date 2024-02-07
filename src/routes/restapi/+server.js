import { db } from "$lib/database";
import { json } from "@sveltejs/kit";
import { page } from "$app/stores";

async function getUser(){
    try{
        const user = await db.user.findMany();
        console.log(user);
        return user;
    } catch(error) {

    }
}

async function createUser(obj){
    try{
        const user = await db.user.create({
                data: {
                email: obj.email,
                name: obj.name
                },
            });
            return user;
    } catch(error) {

    }
}

// const { request, params } = requestEvent; 
// const { pathname, search, searchParams } = $page.url;

export async function GET() {
    const user = await getUser();
    // return json(user);
    return new Response(JSON.stringify(user));
}

export async function POST(requestEvent) {
    const { request } = requestEvent;
    const obj= await request.json();

    const newObj = {
        email: obj.email,
        name: obj.name
    }

    const res = await createUser(newObj);

    return json(res);
}