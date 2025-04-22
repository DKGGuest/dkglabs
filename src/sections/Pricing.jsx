import Section from "../components/Section";
import { smallSphere, stars, lines, check } from "../assets";
import Button from "../components/Button";

const pricing = [
    {
        title: "Base",
        description: "Plug-and-play IoT support, No custom development",
        price: "FREE ",
        features: ["Standard AI/Gen AI tools", "Monitoring, alerts, and basic reporting"],
    },
    {
        title: "Growth",
        description: "IoT dashboards, Minor customizations (e.g., branding, workflows)",
        price: "$199/month  $2,000/year",
        features: ["Advanced analytics", "Pre-built industry templates"],
    },
    {
        title: "Pro",
        description: "IoT analytics, Moderate custom development (e.g., apps, tailored workflows)",
        price: "$499/month  $5,000/year + resource fees",       
        features: ["Predictive insights", "Domain-specific optimizations"],
    },
    {
        title: "Enterprise",
        description: "End-to-end IoT solutions, Extensive custom software development",
        price: "$999/month  $10,000/year + customization fees + resource costs",        
        features: ["Real-time AI optimization", "Enterprise-grade scalability"],
    },
    {
        title: "Futurist",
        description: "Autonomous IoT ecosystems, Co-creation of next-gen solutions",
        price: "Custom pricing based on project or co-revenue sharing",    
        features: ["Experimental AI & IoT", "Strategic innovation partnerships"],
    },
];

const Pricing = () => {
    return (
        <Section className="overflow-hidden" id="pricing">
            <div className="container relative z-2">
                {/* <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img src={smallSphere} className="relative z-1" width={255} height={255} alt="" />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img src={stars} className="w-full" width={950} height={400} alt="" />
                    </div>
                </div> */}

                {/* Pricing Boxes */}
                <div className="relative">
                    {/* Grid layout for pricing boxes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[1rem] justify-center lg:justify-start">
                        {pricing.map((item, i) => (
                            <div key={i} className="w-full h-full px-6 py-8 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto mb-6">
                                <h4 className="h4 mb-4">{item.title}</h4>
                                <div className="flex items-center h-[6.0rem] mb-6">
                                    {item.price && (
                                        <>
                                            <div className="h3 text-[0.75rem] sm:text-[1rem] md:text-[1.25rem]"></div>
                                            <div className="text-[1.125rem] sm:text-[1.25rem] md:text-[1.8rem] leading-none font-bold">
                                                {item.price}
                                            </div>
                                        </>
                                    )}
                                </div>
                                 {/* Centering the OR text */}
            <div className="flex justify-center items-center h-[2rem]">
                <span className="text-[1.125rem] sm:text-[1.25rem] md:text-[2.0rem] leading-none font-bold">
                    
                </span>
            </div>
                             

                                <p className="body-2 min-h-[4rem] mb-3 text-white/50">{item.description}</p>

                                {/* <Button className="w-full mb-6" href={item.price ? "/pricing" : "mailto:your-email@domain.com"} white={item.price}>
                                    {item.price ? "Get started" : "Contact us"}
                                </Button> */}

                                {/* <Button className="w-full mb-6" white={item.price}>
                                    {item.price ? "Get started" : "Contact us"}
                                </Button> */}

                                <Button className="w-full mb-6" href="#contact" white={item.price}>
                                    Interested
                                </Button>

                                <ul>
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="flex items-start py-5 border-t border-n-6">
                                            <img src={check} width={24} height={24} alt="" />
                                            <p className="body-2 ml-4">{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Decorative lines */}
                    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
                        <img className="w-full" src={lines} width={1480} height={177} alt="" />
                    </div>
                    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
                        <img className="w-full" src={lines} width={1480} height={177} alt="" />
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <a className="text-xs font-code font-bold tracking-wider uppercase border-b" href="#pricing">
                        See the full details
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Pricing;
