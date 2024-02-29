export default defineAppConfig({
    title: 'DreamLab.Solutions',
    theme: {
        dark: true,
    },
    ui: {
        primary: "emerald",
        gray: "slate",

        /* COMPONENTS */
        card: {
            base: 'w-full max-w-screen-sm min-h-[60svh] flex flex-col',
            background: 'bg-white dark:bg-slate-900',
            divide: 'divide-y divide-slate-200 dark:divide-slate-800',
            ring: 'ring-1 ring-slate-200 dark:ring-slate-800',
            rounded: 'rounded-lg',
            shadow: 'shadow',
            body: {
                base: 'grid gap-6 flex-1',
                background: '',
                padding: '',
            },
            header: {
                base: 'font-headings text-2xl md:text-center',
                background: '',
                padding: 'px-2',
            },
            footer: {
                base: 'py-4',
                background: '',
                padding: '',
            },
        },
        carousel:{
            wrapper: 'relative grid max-w-screen-xl mx-auto',
            container: 'relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth',
            item: 'flex flex-none snap-center px-4',
            arrows: {
                wrapper: 'absolute place-self-center flex w-full items-center justify-between',
            },
            indicators: {
                wrapper: 'absolute flex items-center justify-center gap-3 bottom-4 inset-x-0',
                base: 'rounded-full h-3 w-3',
                active: 'bg-primary-500 dark:bg-primary-400',
                inactive: 'bg-slate-100 dark:bg-slate-800 mix-blend-overlay',
            },
            default: {
                prevButton: {
                    color: 'black',
                    class: 'rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full',
                    icon: 'i-heroicons-chevron-left-20-solid',
                },
                nextButton: {
                    color: 'black',
                    class: 'rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full',
                    icon: 'i-heroicons-chevron-right-20-solid ',
                },
            },
        },
        slideover: {
            overlay: {
                background: "bg-slate-200/75 dark:bg-slate-900/75"
            }
        },
        verticalNavigation: {
            wrapper: 'border-s border-slate-200 dark:border-slate-800 space-y-2 px-4 pt-8',
            base: 'group block border-s -ms-px mb-4 leading-6 before:hidden',
            padding: 'p-0 ps-4',
            rounded: '',
            font: 'font-headings text-lg',
            ring: '',
            active: 'text-primary-500 dark:text-primary-400 border-current font-semibold',
            inactive: 'border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900' +
                ' dark:text-slate-400 dark:hover:text-slate-300'
        }
    }
})
