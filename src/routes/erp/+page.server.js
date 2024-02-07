import { db } from "$lib/database";

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

export const actions = {

    form1 : async (requestEvent) => {

        const { request } = requestEvent;
        const body = await request.formData();
        
        const id = body.get('formId');
        const email = body.get('formEmail');
        const name = body.get('formName');
        
        console.log(`id : ${id}`);
        console.log(`email : ${email}`);
        console.log(`name : ${name}`);

        const newObj = {
            email: email,
            name: name
        }

        const res = await createUser(newObj);
    },

    form2 : async (requestEvent) => {
        const { request, url } = requestEvent;
        const { searchParams } = url;
        const body = await request.formData();
        const age = body.get('formAge');

        console.log(`age : ${age}`);
        console.log(url);
    }
}