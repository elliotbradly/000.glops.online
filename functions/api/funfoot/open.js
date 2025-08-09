


export const onRequestGet = async (request) => {

    const url = new URL(request.url);
    const idx = url.searchParams.get('idx');

    var bit = { idx: "on request get " + idx }

    return new Response(JSON.stringify(bit));

};






