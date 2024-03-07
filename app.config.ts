export default defineAppConfig({
    title: 'DreamLab.Solutions',
    theme: {
        dark: true,
    },
    ui: {
        primary: "emerald",
        gray: "slate",
        strategy: "override",

        /* COMPONENTS */
        breadcrumb: {
            wrapper: 'relative',
            ol: 'flex items-center gap-x-1.5',
            li: 'flex items-center gap-x-1.5 text-gray-500 dark:text-gray-400 text-sm leading-6 min-w-0',
            base: 'flex items-center gap-x-1.5 group font-semibold min-w-0',
            label: 'block truncate',
            icon: {
                base: 'flex-shrink-0 w-5 h-5',
                active: '',
                inactive: '',
            },
            divider: {
                base: 'flex-shrink-0 w-5 h-5',
            },
            active: 'text-primary-500 dark:text-primary-400',
            inactive: ' hover:text-gray-700 dark:hover:text-gray-200',
            default: {
                divider: 'i-heroicons-chevron-right',
            },
        },
        button: {
            base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0',
            font: 'font-medium',
            rounded: 'rounded-md',
            truncate: 'text-left break-all line-clamp-1',
            block: 'w-full flex justify-center items-center',
            inline: 'inline-flex items-center',
            size: {
                '2xs': 'text-xs',
                xs: 'text-xs',
                sm: 'text-sm',
                md: 'text-sm',
                lg: 'text-sm',
                xl: 'text-base',
            },
            gap: {
                '2xs': 'gap-x-1',
                xs: 'gap-x-1.5',
                sm: 'gap-x-1.5',
                md: 'gap-x-2',
                lg: 'gap-x-2.5',
                xl: 'gap-x-2.5',
            },
            padding: {
                '2xs': 'px-2 py-1',
                xs: 'px-2.5 py-1.5',
                sm: 'px-2.5 py-1.5',
                md: 'px-3 py-2',
                lg: 'px-3.5 py-2.5',
                xl: 'px-3.5 py-2.5',
            },
            square: {
                '2xs': 'p-1',
                xs: 'p-1.5',
                sm: 'p-1.5',
                md: 'p-2',
                lg: 'p-2.5',
                xl: 'p-2.5',
            },
            color: {
                white: {
                    solid: 'shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 text-slate-900 dark:text-white bg-white hover:bg-slate-50 disabled:bg-white dark:bg-slate-900 dark:hover:bg-slate-800/50 dark:disabled:bg-slate-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
                    ghost: 'text-slate-900 dark:text-white hover:bg-white dark:hover:bg-slate-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
                },
                gray: {
                    solid: 'shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 text-slate-700 dark:text-slate-200 bg-slate-50 hover:bg-slate-100 disabled:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700/50 dark:disabled:bg-slate-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
                    ghost: 'text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
                    link: 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
                },
                black: {
                    solid: 'shadow-sm text-white dark:text-slate-900 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-900 dark:bg-white dark:hover:bg-slate-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
                    link: 'text-slate-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
                },
            },
            variant: {
                solid: 'shadow-sm text-white dark:text-slate-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
                outline: 'ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
                soft: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
                ghost: 'text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
                link: 'text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
            },
            icon: {
                base: 'flex-shrink-0',
                loading: 'animate-spin',
                size: {
                    '2xs': 'h-4 w-4',
                    xs: 'h-4 w-4',
                    sm: 'h-5 w-5',
                    md: 'h-5 w-5',
                    lg: 'h-5 w-5',
                    xl: 'h-6 w-6',
                },
            },
            default: {
                size: 'sm',
                variant: 'solid',
                color: 'primary',
                loadingIcon: 'i-heroicons-arrow-path-20-solid',
            },
        },
        card: {
            base: 'p-2 max-w-md mx-auto flex flex-col leading-7',
            background: 'bg-white dark:bg-slate-900',
            divide: 'divide-y divide-slate-200 dark:divide-slate-700',
            ring: 'ring-1 ring-slate-200 dark:ring-slate-900',
            rounded: 'rounded',
            shadow: 'shadow-md dark:shadow-md dark:shadow-slate-900/50',
            body: {
                base: 'card-body',
                background: '',
                padding: 'pb-2',
            },
            header: {
                base: 'card-header font-headings',
                background: '',
                padding: 'py-2',
            },
            footer: {
                base: 'card-footer',
                background: '',
                padding: 'pt-2',
            },
        },
        carousel:{
            wrapper: 'relative w-full h-full flex justify-center flex-nowrap max-w-screen-lg mx-auto',
            container: 'relative overflow-x-auto snap-x snap-mandatory inline-flex flex-nowrap scroll-smooth items-center',
            item: 'flex flex-none snap-center w-full px-2',
            arrows: {
                wrapper: 'hidden sm:flex items-center justify-between',
            },
            indicators: {
                wrapper: 'absolute flex items-center justify-center gap-3 bottom-4 inset-x-0',
                base: 'rounded-full h-3 w-3',
                active: 'bg-emerald-500 dark:bg-emerald-400',
                inactive: 'bg-slate-200 dark:bg-slate-900 mix-blend-normal',
            },
            default: {
                prevButton: {
                    color: 'primary',
                    class: "rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",
                    icon: 'i-fa6-solid-angle-left',
                },
                nextButton: {
                    color: 'primary',
                    class: "rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",
                    icon: 'i-fa6-solid-angle-right',
                },
            },
        },
        container:{
            base: 'mx-auto',
            padding: 'p-2 pb-4',
            constrained: 'max-w-7xl',
        },
        horizontalNavigation:{
            wrapper: 'relative w-full flex items-center justify-between',
            container: 'flex items-center min-w-0',
            inner: 'min-w-0',
            base: 'group relative w-full flex items-center gap-1.5 px-2.5 py-3.5 rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75',
            before: 'before:absolute before:inset-x-0 before:inset-y-2 before:inset-px before:rounded-md hover:before:bg-slate-50 dark:hover:before:bg-slate-800/50',
            after: 'after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2',
            active: 'text-emerald-600 dark:text-emerald-400 after:bg-primary-500 dark:after:bg-primary-400 after:rounded-full',
            inactive: 'text-slate-500 dark:text-slate-400 hover:text-emerald-800 dark:hover:text-emerald-300',
            label: 'truncate relative',
            icon: {
                base: 'flex-shrink-0 w-5 h-5 relative',
                active: 'text-slate-700 dark:text-slate-200',
                inactive: 'text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-200',
            },
            avatar: {
                base: 'flex-shrink-0',
                size: '2xs',
            },
            badge: {
                base: 'flex-shrink-0 ml-auto relative rounded',
                color: 'gray',
                variant: 'solid',
                size: 'xs',
            },
        },
        icons: {
            dynamic: true
        },
        slideover: {
            overlay: {
                background: "bg-slate-200/75 dark:bg-slate-900/75"
            }
        },
        tabs:{
            wrapper: 'relative space-y-2',
            container: 'relative w-full',
            base: 'focus:outline-none',
            list: {
                base: 'relative',
                background: 'bg-slate-100 dark:bg-slate-800',
                rounded: 'rounded-lg',
                shadow: '',
                padding: 'p-1',
                height: 'h-10',
                width: 'w-full',
                marker: {
                    wrapper: 'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
                    base: 'w-full h-full',
                    background: 'bg-white dark:bg-slate-900',
                    rounded: 'rounded-md',
                    shadow: 'shadow-sm',
                },
                tab: {
                    base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
                    background: '',
                    active: 'text-slate-900 dark:text-white',
                    inactive: 'text-slate-500 dark:text-slate-400',
                    height: 'h-8',
                    padding: 'px-2',
                    size: 'text-sm',
                    font: 'font-headings font-medium text-xs',
                    rounded: 'rounded-md',
                    shadow: '',
                },
            },
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
