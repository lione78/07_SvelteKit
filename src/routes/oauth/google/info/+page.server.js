// form 방식 전송, loadData 참조
export const actions = {
    default: async ({ request }) => {
        const body = await request.formData();
        console.log(body);
        const credential = body.get('credential');
        const g_csrf_token = body.get('g_csrf_token');

        return { credential, g_csrf_token };
    }
}