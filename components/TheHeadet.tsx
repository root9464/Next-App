import Link from "next/link"
import { Navigation, NavLink } from "./Nabigation"

const TheHeader = () => {
    const NavItem:NavLink[] = [
        {label: 'Home', href: '/'},
        {label: 'Blog', href: '/blog'},
        {label: 'About', href: '/about'},
    ]
    return(
        <header>
            <Navigation navLinks={NavItem}/>
        </header>
    )
}

export {TheHeader}