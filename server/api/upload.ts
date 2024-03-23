export default defineEventHandler((event) => {

    console.log('upload', `Uloading ${event.node.req}`)
    return {
        hello: 'world'
    }
})
