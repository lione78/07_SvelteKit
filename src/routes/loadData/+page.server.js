import { db } from "$lib/database";

async function getUser(){
    try{
        const users = await db.user.findMany();
        console.log(users);
        return users;
    } catch(error) {

    }
}

export const load = async () => {

    const users = await getUser();
    console.log(users);
    return {users};
    
}