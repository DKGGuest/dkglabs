import React from 'react';
import { Link } from "react-router-dom";
import Button from "../components/Button";

const cardData = [
  {
    category: "Patient Monitoring & Care",
    subCategories: [
      {
        title: "Remote Patient Monitoring",
        details: [
          { technology: "IoT", description: "Wearable devices and sensors continuously monitor vital signs (e.g., heart rate, glucose levels) and send real-time data to healthcare providers." },
          { technology: "Generative AI", description: "Analyzes patterns in patient data to predict health deterioration." },
          { technology: "Software Development", description: "Builds platforms that display patient data for healthcare professionals, enabling remote diagnostics." }
        ]
      },
      {
        title: "Chronic Disease Management",
        details: [
          { technology: "IoT", description: "Devices like blood pressure cuffs, glucose monitors, and smart inhalers transmit data for ongoing care." },
          { technology: "Generative AI", description: "Offers personalized care plans based on historical data." },
          { technology: "Software Development", description: "Develops chronic care management tools that integrate AI insights and patient history." }
        ]
      },
      {
        title: "Post-operative Monitoring",
        details: [
          { technology: "IoT", description: "Sensors track post-surgery recovery parameters, sending alerts for irregularities." },
          { technology: "Generative AI", description: "Predicts complications like infections or blood clots based on post-operative data." },
          { technology: "Software Development", description: "Creates dashboards for real-time recovery monitoring, alerting physicians of potential issues." }
        ]
      }
    ]
  },
  {
    category: "Patient Engagement & Experience",
    subCategories: [
      {
        title: "Personalized Health Advice",
        details: [
          { technology: "Generative AI", description: "Provides personalized lifestyle and treatment recommendations based on patient profiles." },
          { technology: "Software Development", description: "Builds patient portals with tailored content and health management tools." }
        ]
      },
      {
        title: "Virtual Health Assistants",
        details: [
          { technology: "Generative AI", description: "Powers chatbots that answer patient queries, schedule appointments, and provide medication reminders." },
          { technology: "Software Development", description: "Develops intuitive interfaces for these virtual assistants to interact with patients seamlessly." }
        ]
      },
      {
        title: "Remote Consultations",
        details: [
          { technology: "IoT", description: "Video conferencing tools with integrated diagnostic data sharing (e.g., wearable data)." },
          { technology: "Generative AI", description: "Analyzes patient history to suggest questions and potential diagnoses to physicians." },
          { technology: "Software Development", description: "Implements secure, HIPAA-compliant telemedicine platforms." }
        ]
      },
    ]
  },
  {
    category: "Medical Imaging & Diagnostics",
    subCategories: [
      {
        title: "Image Analysis & Diagnostics",
        details: [
          { technology: "Generative AI", description: "Analyzes medical images (e.g., MRI, X-rays) to detect anomalies like tumors or fractures." },
          { technology: "Software Development", description: "Builds imaging software that integrates AI for enhanced diagnostic accuracy." }
        ]
      },
      {
        title: "Predictive Diagnostics",
        details: [
          { technology: "IoT", description: "Collects continuous patient data from diagnostic devices." },
          { technology: "Generative AI", description: "Predicts disease onset by generating insights from historical data." },
          { technology: "Software Development", description: "Develops tools for predictive diagnostics and automated reporting." }
        ]
      },
    ]
  },
  {
    category: "Operational Efficiency",
    subCategories: [
      {
        title: "Automated Medical Billing",
        details: [
          { technology: "Generative AI", description: "Generates accurate billing codes based on diagnosis and treatment data." },
          { technology: "Software Development", description: "Creates automated billing systems for healthcare providers." }
        ]
      },
      {
        title: "Resource Allocation",
        details: [
          { technology: "Generative AI", description: "Predicts the demand for resources (e.g., beds, staff, equipment) based on historical and real-time data." },
          { technology: "Software Development", description: "Builds hospital resource management platforms to optimize allocation." }
        ]
      },
      {
        title: "Inventory Management (Supplies & Medication)",
        details: [
          { technology: "IoT", description: "Monitors real-time stock levels in healthcare facilities." },
          { technology: "Generative AI", description: "Forecasts supply needs based on historical usage patterns." },
          { technology: "Software Development", description: "Creates inventory management systems with automated ordering features." }
        ]
      },
    ]
  },
  {
    category: " Clinical Decision Support",
    subCategories: [
      {
        title: "Real-time Decision-making",
        details: [
          { technology: "Generative AI", description: "Analyzes patient data in real-time to offer treatment suggestions and flag potential drug interactions." },
          { technology: "Software Development", description: "Develops decision support tools integrated into electronic health record (EHR) systems." }
        ]
      },
      {
        title: "Treatment Optimization",
        details: [
          { technology: "Generative AI", description: "Personalizes treatment plans by analyzing genetic, environmental, and lifestyle factors." },
          { technology: "Software Development", description: "Builds platforms for treatment plan management, leveraging AI insights." }
        ]
      },
    ]
  },
  {
    category: " Fraud Detection & Compliance",
    subCategories: [
      {
        title: "Medical Fraud Detection",
        details: [
          { technology: "Generative AI", description: "Detects unusual billing patterns and possible fraud in claims." },
          { technology: "Software Development", description: " Develops fraud detection systems that continuously monitor healthcare transactions." }
        ]
      },
      {
        title: "Regulatory Compliance",
        details: [
          { technology: "Generative AI", description: "Ensures compliance with healthcare regulations by analyzing patient data handling and documentation." },
          { technology: "Software Development", description: "Builds tools for compliance management and audit reporting." }
        ]
      },
    ]
  },
  {
    category: "Process Automation",
    subCategories: [
      {
        title: "Administrative Automation",
        details: [
          { technology: "Generative AI", description: "Automatically classifies medical documents and extracts relevant data." },
          { technology: "Software Development", description: "Implements workflow automation systems to reduce administrative burden." }
        ]
      },
      {
        title: "Appointment Scheduling",
        details: [
          { technology: "Generative AI", description: "Predicts optimal appointment times based on patient and provider availability." },
          { technology: "Software Development", description: "Creates scheduling systems integrated with patient data and clinic workflows." }
        ]
      },
      {
        title: "Claims Processing",
        details: [
          { technology: "Generative AI", description: "Assesses and validates insurance claims through automated data analysis." },
          { technology: "Software Development", description: "Builds claims management platforms to speed up reimbursement processes." }
        ]
      },
    ]
  },
  {
    category: "Research & Development",
    subCategories: [
      {
        title: "Synthetic Data Generation for Clinical Trials",
        details: [
          { technology: "Generative AI", description: "Creates synthetic patient datasets for training and testing models in R&D." },
          { technology: "Software Development", description: "Builds environments for simulation and synthetic data testing in clinical research." }
        ]
      },
      {
        title: "Drug Discovery",
        details: [
          { technology: "Generative AI", description: "Identifies potential drug compounds and predicts their efficacy." },
          { technology: "Software Development", description: "Develops platforms for virtual drug testing and molecular analysis." }
        ]
      },
    ]
  },
  {
    category: "Patient Data Security & Privacy",
    subCategories: [
      {
        title: "Real-time Anomaly Detection (Cybersecurity)",
        details: [
          { technology: "IoT", description: "Monitors connected devices for unauthorized access or tampering." },
          { technology: "Generative AI", description: "Detects unusual behavior patterns in network activity." },
          { technology: "Software Development", description: "Builds security systems for real-time monitoring and threat detection." }
        ]
      },
    ]
  },
  {
    category: "Data Management & Insights",
    subCategories: [
      {
        title: "Data Summarization",
        details: [
          { technology: "Generative AI", description: "Summarizes large datasets from clinical trials and patient records." },
          { technology: "Software Development", description: "Builds data visualization and reporting tools for healthcare analytics." }
        ]
      },
      {
        title: "Insight Generation for Research",
        details: [
          { technology: "Generative AI", description: "Generates actionable insights from medical data for use in clinical research and policy-making." },
          { technology: "Software Development", description: "Develops research tools that integrate AI-driven insights." }
        ]
      },
    ]
  },
  
  // Add more categories...
];

function Healthcare() {
  const handleCardClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="app-container">
      {cardData.map((category, index) => (
        <div key={index} className="category-card"
        onClick={handleCardClick} // Attach the scroll function
>
          <h2>{category.category}</h2>
          {category.subCategories.map((subCategory, subIndex) => (
            <div key={subIndex} className="sub-category">
              <h3>{subCategory.title}</h3>
              <ul>
                {subCategory.details.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <strong>{item.technology}: </strong>{item.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        <hr></hr>
        </div>
      ))}
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Link to="/">
            <Button>Go to Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default Healthcare;
