import Footer from "@/components/Footer";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";

const Layout = ({ children }) => {
    return (
        <>
            <ResponsiveNav />
            <div>
                {children}
                <Footer />
            </div>
        </>
    );
};

export default Layout;
