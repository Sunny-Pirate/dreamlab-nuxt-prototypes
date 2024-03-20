import type {NuxtLinkProps} from "#app";
import type {ButtonProps} from "primevue/button";

export default function () {
    return [
        {to: "/", icon: "pi pi-home"},
        {to: "/contact-us", label: "Contact Us"},
        {to: "/portfolio", label: "Portfolio"},
    ] as (NuxtLinkProps & ButtonProps)[]
}
