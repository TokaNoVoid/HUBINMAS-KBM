import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            when: "beforeChildren",
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

const HeroSection = () => {
    return (
        <motion.div
            className="flex items-center w-full min-h-screen pt-[10vh] px-4 sm:px-6 md:px-10 lg:px-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="container w-full px-2 pb-20 lg:mx-16 lg:pb-0">
                <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
                    {/* Konten Teks */}
                    <motion.div
                        className="order-2 space-y-6 lg:order-1"
                        variants={itemVariants}
                    >
                        <h1 className="text-3xl font-extrabold text-gray-800 md:text-4xl">
                            Halo, Selamat Datang <br />
                            di{" "}
                            <span className="text-blue-500">Bursa Kerja</span>
                        </h1>
                        <p className="text-lg text-gray-600 md:text-xl">
                            Temukan peluang karir terbaik dan mulailah
                            perjalanan sukses Anda bersama perusahaan ternama.
                        </p>
                        <motion.button
                            className="px-6 py-3 font-bold text-white transition duration-300 ease-in-out bg-blue-500 rounded-full shadow-lg hover:bg-blue-700"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href="lowongan-kerja">Lowongan Kerja</a>
                        </motion.button>
                    </motion.div>

                    {/* Gambar */}
                    <motion.div
                        className="flex items-center justify-center order-1 p-4 bg-blue-500 rounded-full shadow-xl rounded-tl-[1000%] rounded-br-[880%] lg:order-2"
                        variants={itemVariants}
                    >
                        <img
                            src="images/interview.svg"
                            alt="Ilustrasi Bursa Kerja"
                            className="w-4/5 lg:w-full lg:max-w-md"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default HeroSection;
