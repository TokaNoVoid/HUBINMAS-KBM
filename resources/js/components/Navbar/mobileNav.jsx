import navLink from "@/constant/navLink";
import { CgClose } from "react-icons/cg";

const MobileNav = ({ closeNav, showNav }) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

    return (
        <div className="block lg:hidden">
            {/* Overlay: klik di sini juga untuk menutup navigasi */}
            <div
                className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen`}
                aria-hidden="true"
            ></div>

            {/* Navigation Menu */}
            <nav
                className={`fixed ${navOpen} flex flex-col justify-center h-full text-white transition-all duration-500 delay-300 transform w-[80%] sm:w-[60%] bg-blue-600 space-y-6 z-[10006]`}
                aria-label="Mobile Navigation"
            >
                {navLink.map((item) => (
                    <a
                        href={item.url}
                        key={item.id}
                        className="block ml-12 pb-1 text-[20px] sm:text-[30px] nav__link"
                    >
                        {item.label}
                    </a>
                ))}

                {/* Close Button */}
                <CgClose
                    onClick={closeNav}
                    aria-label="Close Navigation"
                    className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
                />
            </nav>
        </div>
    );
};

export default MobileNav;
