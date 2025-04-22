import { useLocation, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState, useEffect } from "react";

import { background, DKGLogo } from "../assets";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import ProfileDropdown from "./ProfileDropdown"; // Import ProfileDropdown

const navigation = [
    { id: "0", title: "Industries", url: "#features" },
    { id: "1", title: "AI as a Service Pricing", url: "#pricing" },
    {  id: "2", title: "AI as a Service", url: "/ai-consulting" },
    { id: "3", title: "Gen AI Solutions", url: "#roadmap" },
    { id: "4", title: "Contact", url: "#contact", onlyMobile: true },
];

const Header = () => {
    const { hash } = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);
    const [user, setUser] = useState(null);

    //  Load the currently logged-in user
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("currentUser")); // ✅ Fetch session user
        setUser(savedUser);

        // Listen for storage changes (real-time login/logout updates)
        const handleStorageChange = () => {
            const updatedUser = JSON.parse(localStorage.getItem("currentUser"));
            setUser(updatedUser);
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    // Logout only removes the current session, not all users
    const handleLogout = () => {
        localStorage.removeItem("currentUser"); // Only remove active user
        localStorage.removeItem("authStatus");
        window.dispatchEvent(new Event("storage"));
        setUser(null);
        alert("Logged out successfully!");
    };

    const toggleNavigation = () => {
        setOpenNavigation((prev) => !prev);
        openNavigation ? enablePageScroll() : disablePageScroll();
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <img src={DKGLogo} className="measure" width={120} alt="DKG Labs" />
                </a>

                {/* Navigation Links */}
                <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                className={`block relative font-code text-2xl uppercase text-white transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                                    item.url === hash ? "z-2 lg:text-white" : "lg:text-white/50"
                                } lg:leading-5 lg:hover:text-white xl:px-12`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </nav>

                <a href="#contact" className="button hidden mr-8 text-white/50 transition-colors hover:text-white lg:block">
                    Contact
                </a>

                {/*  Show ProfileDropdown if logged in, otherwise show Sign In button */}
                {user ? (
                    <ProfileDropdown user={user} onLogout={handleLogout} />
                ) : (
                    <Link to="/auth">
                        <Button className="hidden lg:flex">Sign in</Button>
                    </Link>
                )}

                <Button className="ml-auto lg:hidden" onClick={toggleNavigation} aria-label="Toggle Navigation">
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
};

export default Header;
