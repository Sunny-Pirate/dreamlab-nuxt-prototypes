interface Service {
    id: string,
    uiClass: string,
    name: string,
    description: string
}

export default function () {
    return ([
        {
            id: "ux",
            uiClass: "gradient-after-primary",
            name: "UX Design",
            description: "We map out the user journey to create seamless, memorable experiences that resonate with your audience.",
        },
        {
            id: "ui",
            uiClass: "gradient-after-secondary",
            name: "UI Development",
            description: "Merging aesthetics with functionality, we build interfaces that are both beautiful and robust, ensuring they perform across all devices and platforms."
        },
        {
            id: "consulting",
            uiClass: "gradient-after-accent",
            name: "IT Consulting",
            description: "With a holistic approach, we provide strategic guidance to navigate the complexities of technology in business."
        }
    ]) as Service[];
}
