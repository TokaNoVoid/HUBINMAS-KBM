import { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./mobileNav";

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);
    const handleNavShow = () => {
        setShowNav(true);
    };
    const handleNavHide = () => {
        setShowNav(false);
        console.log("ppp");
    };
    return (
        <div>
            <Nav openNav={handleNavShow} />
            <MobileNav showNav={showNav} closeNav={handleNavHide} />
        </div>
    );
};

export default ResponsiveNav;
