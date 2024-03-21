/**
 * Scroll the Viewport to the specified TAG ID.
 * @param id: The destination of the viewport scroll: `#tag-id` or `tag-id`
 * @param scrollBehavior: The behavior while the viewport is scrolling; default to 'smooth'
 * */
export default  function (id: string, scrollBehavior?: ScrollBehavior) {
    console.log(`Scrolling to the TAG ${id}`)
    if (id === null) return;
    const element = document.querySelector(id.startsWith('#') ? id : `#${id}`);
    if (element) {
        element.scrollIntoView({behavior: scrollBehavior || 'smooth'});
    }

    return;

}
