const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full py-4 bg-transparent border-t backdrop-blur-md border-white/40">
            <div className="container mx-auto text-center">
                <p className="text-xs text-black">
                    © {new Date().getFullYear()} Bursa Kerja Khusus. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
