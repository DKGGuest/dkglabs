import Button from "../components/Button";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4 } from "../assets";
import benefitImage2WebP from "../assets/benefits/benefitImage2.webp";
import { useNavigate } from "react-router-dom";

const benefits = [
    {
        title: "Healthcare",
        text: "At DKG Labs, we leverage Generative AI to revolutionize healthcare and life sciences with cutting-edge solutions in personalized content creation, seamless onboarding, quality assurance, and fraud detection—empowering enterprises to deliver secure, efficient, and innovative services.",
        backgroundUrl: "./src/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        url: "/healthcareDetails",
    },
    {
        title: "Finance",
        text: "Revolutionize the finance industry with Generative AI, delivering advanced fraud detection, personalized financial planning, and predictive market insights. Automate decision-making, enhance risk management, and drive profitability with AI-powered solutions that redefine financial services.",
        backgroundUrl: "./src/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        light: true,
        url: "/financeDetails"
    },
    {
        title: "Manufacturing & Automotive",
        text: "DKG Labs is leading the generative AI revolution in manufacturing, driving groundbreaking innovations that optimize product development, streamline supply chains, and enhance worker safety—empowering manufacturers to boost productivity and sustainability.",
        backgroundUrl: "./src/assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        url: '/manufacturingAndAutomotiveDetails',
    },
    {
        title: "Education",
        text: "Our cutting-edge Generative AI is transforming EdTech by delivering unmatched accuracy, personalization, and engagement across assessments, tutoring, and content creation, crafting powerful, data-driven learning experiences.",
        backgroundUrl: "./src/assets/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        light: true,
        url: '/educationDetails',
    },
    {
        title: "Entertainment & Media",
        text: "Harnessing the power of Generative AI, we empower media and entertainment companies to build innovative digital ecosystems across OTT platforms, theme parks, gaming, sports, and sponsorships, igniting transformative change across the industry.",
        backgroundUrl: "./src/assets/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        url: '/entertainmentAndMediaDetails',
    },
    {
        title: "B2C",
        text: "Transform the way you live with our AI agents—designed to assist, automate, and elevate your daily experiences. From managing tasks to personalizing recommendations, we bring intelligence and convenience to your fingertips. Embrace the\u00a0future,\u00a0today.",
        backgroundUrl: "./src/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        url: "#",
    },
];

const Benefits = () => {

    const navigate = useNavigate();
    const handleNavigation = (navigateTo) => {
        navigate(navigateTo);
    };
    return (
        <Section id="features">
            <div className="container relative z-2">
                <Heading className="md:max-w-md lg:max-w-2xl" title="Transforming industries with Gen AI, Computer Vision, IoT, and seamless system integration." />

                <div className="flex flex-wrap gap-10 mb-10">
                    {benefits.map((item, i) => (
                        <div
                            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] group"
                            style={{ backgroundImage: `url(${item.backgroundUrl})` }}
                            key={i}
                        >
                            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                                <h5 className="h5 mb-5">{item.title}</h5>
                                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                                <div className="flex items-center mt-auto">
                                    <img src={item.iconUrl} width={48} height={48} alt={item.title} />
                                    <Button className="ml-auto font-code text-xs font-bold text-white uppercase tracking-wider" onClick={() => handleNavigation(item?.url)} >


                                        {item.linkText || " Explore more "} {/* Use dynamic text */}


                                    </Button>
                                    <a href={item?.url}>
                                        <Arrow />
                                    </a>
                                </div>
                            </div>

                            {item.light && (
                                <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />
                            )}

                            <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
                                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10">
                                    <img
                                        src={benefitImage2WebP}
                                        width={380}
                                        height={362}
                                        alt={`AI solution for ${item.title} industry`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Benefits;
