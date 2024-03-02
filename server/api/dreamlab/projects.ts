export default defineEventHandler(async (event) => {

    return JSON.stringify({
        items: [
            {title: "A"},
            {title: "B"},
            {title: "C"},
        ]
    });
})
