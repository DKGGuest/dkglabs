import { Link } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Section from "../components/Section";
import benefitImage2WebP from "../assets/benefits/benefitImage2.webp";


const benefits = [
  { title: "Healthcare", url: "/healthcareDetails/" },
  { title: "Finance", url: "/financeDetails" },
  { title: "Manufacturing & Automotive", url: "/manufacturingAndAutomotiveDetails" },
  { title: "Education", url: "/educationDetails" },
  { title: "Entertainment & Media", url: "/entertainmentAndMediaDetails" }
];

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container">
        <Heading title="Transforming industries with AI" />
        <div className="flex flex-wrap gap-10">
          {benefits.map((item, i) => (
            <div key={i} className="category-card">
              <h5>{item.title}</h5>
              <a href={item.url}>
                <Button>Explore More</Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
