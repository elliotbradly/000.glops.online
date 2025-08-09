





export const onRequestGet = async (context) => {

    var request = context.request

    const { searchParams } = new URL(request.url)
    let idx = searchParams.get('idx')

    if (idx == null) {
        var bitNow = { idx: 'request-error', src: "no idx present" }
        return new Response(JSON.stringify(bitNow));
    }

    var queryFn = async () => {

        const response = await fetch('https://okwierdo.onrender.com/api/0kwierdo/funfoot/open?idx=' + idx)
        if (!response.ok) {
            throw new Error('Network response was not ok : okwierdo.onrender.com/api/okwierdo/open')
        }
        return response.json()

    }

    const bit = await queryFn()

    return new Response(JSON.stringify(bit));
};






