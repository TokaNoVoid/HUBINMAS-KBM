import navLink from "@/constant/navLink";
import { useEffect, useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const Nav = ({ openNav }) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <header
            className={`fixed ${
                navBg ? "bg-white shadow-xl" : "fixed"
            } w-full transition-all duration-200 h-[12vh] z-[1000]`}
        >
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto container">
                {/* Logo dengan link ke homepage */}
                <a href="/" className="flex items-center" aria-label="Homepage">
                    <div className="flex items-center space-x-3">
                        <img
                            src="images/logo.jpeg"
                            className="rounded-full w-14 h-14"
                            alt=""
                        />
                        <h1 className="text-xl font-extrabold leading-[5px] md:text-3xl font-roboto">
                            <span className="text-3xl text-blue-600 md:text-4xl">
                                H
                            </span>
                            UBINMAS
                            <span className="block text-xs font-roboto">
                                SMK KARYA BAHANA MANDIRI I
                            </span>
                        </h1>
                    </div>
                </a>
                {/* Nav Link */}
                <div className="items-center hidden space-x-10 lg:flex">
                    {navLink.map((link, index) => (
                        <a href={link.url} key={index}>
                            <p className="nav__link">{link.label}</p>
                        </a>
                    ))}
                </div>
                {/* Burger menu */}
                <HiOutlineBars3BottomRight
                    className="block w-8 h-8 text-black cursor-pointer lg:hidden"
                    onClick={openNav}
                />
            </div>
        </header>
    );
};

export default Nav;
