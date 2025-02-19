import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import Partnership from "@/components/sections/Partnership";
import Layout from "@/layout/layout";

const Home = () => {
    return (
        <Layout>
            <HeroSection />
            <Partnership />
            <AboutSection />
        </Layout>
    );
};

export default Home;
