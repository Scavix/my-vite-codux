exports.handler = async (event, context) => {
    const body = JSON.parse(event.body);
    console.log(body);
    return {
        statusCode: 200,
        body: JSON.stringify({ body }),
    };
};