import type {MenuItem} from "primevue/menuitem";

export default function () {
    const homeMenuItem: MenuItem = {label: 'Home', icon: "pi pi-home", url: '/', command: () => navigateTo('/')};
    const contactusMenuItem: MenuItem = {
        label: "Contact Us",
        icon: "pi pi-pencil",
        url: "/contact-us",
        command: () => navigateTo("/contact-us")
    };
    const portfolioMenuItem: MenuItem = {
        label: "Portfolio",
        icon: 'pi pi-wallet',
        url: "/portfolio",
        command: () => navigateTo("/portfolio")
    };
    const servicesMenuItem: MenuItem = {
        label: "Services",
        icon: 'pi pi-sync',
        url: "/services",
        command: () => navigateTo("/services")
    };
    return [
        homeMenuItem,
        servicesMenuItem,
        portfolioMenuItem,
        contactusMenuItem
    ] as MenuItem[]
}
