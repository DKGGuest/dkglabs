import React from "react";
import WideRectangularBox from "../components/WideRectangularBox";
import { img1, img2, img3, img4, img5, img6 } from "../assets";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const ExploreMorePage = () => {
  const boxesData = [
    {
      heading: "AI-Powered Real-Time Defect Judgment: Spot Flaws Before They Happen",
      subheadings: [
        {
          title: "Description",
          content: "This system uses AI-driven image recognition and sensor data to identify defects in manufacturing components in real-time, ensuring quality control during the production process"
        },
        {
          title: "USP",
          content: "Significantly reduces downtime by detecting defects instantly, allowing immediate corrective action"
        },
        {
          title: "Core Features",
          content: "AI-powered defect detection using high-speed cameras and sensors"
        },
        {
          title: "ROI",
          content: "Reduces costs associated with recalls and rework by up to 30%"
        },
      ],
      imageSrc: img1,
      imageAlt: "Image 1"
    },
   {
      heading: "Generative AI in Dimensional Analysis: Precision Meets Innovation",
      subheadings: [
        {
          title: "Description",
          content: "Dimensional analysis systems leverage AI and precision measurement tools to assess the physical dimensions of components against specified tolerances"
        },
        {
          title: "USP",
          content: "Provides unmatched accuracy and consistency in dimensional validation, reducing manual errors"
        },
        {
          title: "Core Features",
          content: "Automated tolerance checks using high-resolution scanners or laser measurement systems"
        },
        {
          title: "ROI",
          content: "Reduces waste and scrap material by ensuring dimensional conformity"
        },
      ],
      imageSrc: img2,
      imageAlt: "Image 1"
    }, 
    {
      heading: "Smart Loans, Faster Approvals: AI-Driven FinTech Powered by Generative AI!",
      subheadings: [
        {
          title: "Description",
          content: "A digital platform enabling individuals and businesses to apply for and manage loans seamlessly through an intuitive and paperless process"
        },
        {
          title: "USP",
          content: "Instant loan approval and disbursement using AI and machine learning for real-time credit risk evaluation"
        },
        {
          title: "Core Features",
          content: "Automated Credit Scoring: AI-powered algorithms for accurate risk profiling"
        },
        {
          title: "ROI",
          content: "Increased customer retention by offering personalized loan products, boosting cross-selling opportunities"
        },
      ],
      imageSrc: img3,
      imageAlt: "Image 1"
    },
    {
      heading: "Revolutionize Costing: AI-Powered Price Build-Up UI with Generative AI Precision!",
      subheadings: [
        {
          title: "Description",
          content: "A dynamic user interface for configuring and calculating comprehensive price breakdowns for automotive components or services"
        },
        {
          title: "USP",
          content: "Intuitive drag-and-drop functionality with customizable templates for seamless cost structure management"
        },
        {
          title: "Core Features",
          content: "Cost Component Visualization: Interactive dashboards showing detailed cost breakdowns"
        },
        {
          title: "ROI",
          content: "Enhanced decision-making through transparent pricing insights, leading to cost optimization"
        },
      ],
      imageSrc: img4,
      imageAlt: "Image 1"
    },
    {
      heading: "Transform Business Operations: AI-Enabled ERP Powered by Generative AI for Smarter Decisions!",
      subheadings: [
        {
          title: "Description",
          content: "An intelligent ERP system leveraging AI to optimize business operations, automate workflows, and provide actionable insights"
        },
        {
          title: "USP",
          content: "Predictive analytics for demand forecasting, inventory management, and financial planning"
        },
        {
          title: "Core Features",
          content: "AI-Powered Insights: Advanced reporting and real-time dashboards driven by machine learning"
        },
        {
          title: "ROI",
          content: "Reduced operational costs through automation and minimized errors"
        },
      ],
      imageSrc: img5,
      imageAlt: "Image 1"
    },
    {
      heading: "Optimize Asset Performance: AI-Driven Management Powered by Generative AI Insights!",
      subheadings: [
        {
          title: "Description",
          content: "A comprehensive solution for tracking, monitoring, and optimizing physical and digital assets across their lifecycle"
        },
        {
          title: "USP",
          content: "AI-driven insights for proactive maintenance and reduced downtime"
        },
        {
          title: "Core Features",
          content: "Predictive Analytics: Machine learning algorithms forecast asset failures and optimize maintenance schedules"
        },
        {
          title: "ROI",
          content: "Prolonged asset lifespan and reduced maintenance costs through predictive insights"
        },
      ],
      imageSrc: img6,
      imageAlt: "Image 1"
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to Explore More Page</h1>
      {/* <p className="mb-8">
        This is the content of the Explore More page. Below are several wide rectangular boxes.
      </p> */}

      {boxesData.map((box, index) => (
        <WideRectangularBox
          key={index}
          heading={box.heading}
          subheadings={box.subheadings}
          imageSrc={box.imageSrc}
          imageAlt={box.imageAlt}
          className="mb-8"
        />
      ))}

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Link to="/">
          <Button>Go to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreMorePage;