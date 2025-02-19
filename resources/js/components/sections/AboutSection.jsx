import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "../ui/accordion";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="min-h-[100vh] flex items-center w-full px-4 lg:px-20 bg-gray-50"
        >
            <div className="container w-full px-2 pb-20 lg:mx-16 lg:pb-0">
                <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Map Section */}
                    <div className="flex">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.595569536127!2d107.01426959999999!3d-6.316736599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69918b9891c727%3A0xe713054533bc7acb!2sSMK%20Karya%20Bahana%20Mandiri%201!5e0!3m2!1sid!2sid!4v1739732256325!5m2!1sid!2sid"
                            width="100%"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            className="shadow-lg rounded-2xl"
                        ></iframe>
                    </div>

                    {/* Content Section */}
                    <div className="w-full">
                        <h1 className="mb-4 text-4xl font-bold text-gray-800">
                            Tentang Kami
                        </h1>
                        <p className="mb-6 text-lg text-gray-600">
                            Kami adalah perusahaan yang berdedikasi untuk
                            memberikan solusi terbaik untuk kebutuhan Anda.
                        </p>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-4"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg font-semibold text-gray-800">
                                    Apa visi kami?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    Visi kami adalah menjadi pemimpin di
                                    industri dengan inovasi berkelanjutan.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg font-semibold text-gray-800">
                                    Apa misi kami?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    Misi kami adalah memberikan pelayanan
                                    terbaik dan menciptakan nilai tambah bagi
                                    pelanggan.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg font-semibold text-gray-800">
                                    Apa nilai-nilai kami?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    Integritas, Inovasi, dan Kepuasan Pelanggan.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
