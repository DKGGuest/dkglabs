import React from 'react';
import { Link } from "react-router-dom";
import Button from "../components/Button";

const cardData = [
  {
    category: "Predictive Maintenance",
    subCategories: [
      {
        title: "Real-time Monitoring",
        details: [
          { technology: "IoT", description: "Sensors on machinery and vehicles collect real-time operational data to monitor equipment health." },
          { technology: "Generative AI", description: "Analyzes data to predict potential failures and recommend maintenance before breakdowns." },
          { technology: "Software Development", description: "Develops platforms for monitoring machine performance, alert systems, and scheduling maintenance." }
        ]
      },
      {
        title: "Asset Life Cycle Management",
        details: [
          { technology: "IoT", description: "Tracks wear and tear of components across the production line." },
          { technology: "Generative AI", description: "Models degradation patterns to predict remaining useful life of machinery." },
          { technology: "Software Development", description: "Builds dashboards to visualize asset performance and manage lifecycle operations." }
        ]
      },
    ]
  },
  {
    category: "Smart Manufacturing Operations",
    subCategories: [
      {
        title: "Production Optimization",
        details: [
          { technology: "IoT", description: "Collects data from production lines to track efficiency and detect bottlenecks." },
          { technology: "Generative AI", description: "Generates models to optimize production schedules and resource allocation." },
          { technology: "Software Development", description: "Develops control systems to automate production line adjustments in real-time." }
        ]
      },
      {
        title: "Quality Control",
        details: [
          { technology: "IoT", description: "Sensors monitor the quality of products at each stage of production." }, 
          { technology: "Generative AI", description: "Identifies anomalies in product quality and generates recommendations for process improvements." },
          { technology: "Software Development", description: "Implements quality management systems to ensure compliance with industry standards." }
        ]
      },
    ]
  },
  {
    category: "Supply Chain Optimization",
    subCategories: [
      {
        title: "Inventory Management",
        details: [
          { technology: "IoT", description: "Tracks inventory levels in real-time through RFID and other sensors." },
          { technology: "Generative AI", description: "Predicts demand patterns and suggests optimal inventory levels to reduce costs and avoid shortages." },
          { technology: "Software Development", description: "Builds inventory management platforms integrating AI-driven insights." }
        ]
      },
      {
        title: "Logistics and Fleet Management",
        details: [
          { technology: "IoT", description: "Monitors vehicle conditions and route efficiency using GPS and telematics." },
          { technology: "Generative AI", description: "Optimizes delivery routes and fleet maintenance based on real-time data." },
          { technology: "Software Development", description: "Develops fleet management software for scheduling, routing, and maintenance." }
        ]
      },
    ]
  },
  {
    category: "Customer Experience",
    subCategories: [
      {
        title: "Personalized Vehicle Customization",
        details: [
          { technology: "Generative AI", description: "Suggests personalized vehicle configurations based on customer preferences and behaviors." },
          { technology: "Software Development", description: "Builds online configurators for customers to design their ideal vehicle." }
        ]
      },
      {
        title: "Customer Support (Automated Assistance)",
        details: [
          { technology: "Generative AI", description: "Powers customer service chatbots for technical support and inquiries." },
          { technology: "Software Development", description: "Creates chat interfaces integrated with CRM systems for seamless customer interactions." }
        ]
      },
    ]
  },
  {
    category: "Process Automation",
    subCategories: [
      {
        title: "Robotic Process Automation (RPA)",
        details: [
          { technology: "Software Development", description: "Automates repetitive administrative tasks such as procurement, reporting, and payroll processing." }
        ]
      },
      {
        title: "Document Management",
        details: [
          { technology: "Generative AI", description: "Summarizes and classifies operational documents such as work orders and invoices." },
          { technology: "Software Development", description: "Builds document management systems for fast retrieval and processing." }
        ]
      },
    ]
  },
  {
    category: "Product Development & Design",
    subCategories: [
      {
        title: "Prototyping and Testing",
        details: [
          { technology: "Generative AI", description: "Generates design variations based on specific parameters for faster prototyping." },
          { technology: "Software Development", description: "Creates platforms for digital twin simulations and virtual testing environments." }
        ]
      },
      {
        title: "Product Lifecycle Management (PLM)",
        details: [
          { technology: "IoT", description: "Tracks products from development through production and into post-sales support." },
          { technology: "Generative AI", description: "Offers insights into product performance and customer feedback for iterative improvements." },
          { technology: "Software Development", description: "Implements PLM systems for managing the entire lifecycle of a product." }
        ]
      },
    ]
  },
  {
    category: "Safety and Compliance",
    subCategories: [
      {
        title: "Workplace Safety Monitoring",
        details: [
          { technology: "IoT", description: "Sensors detect unsafe conditions on the production floor, such as equipment malfunctions or hazardous emissions." },
          { technology: "Generative AI", description: "Generates predictive safety alerts and models potential accident scenarios." },
          { technology: "Software Development", description: "Develops real-time safety monitoring dashboards and compliance reporting tools." }
        ]
      },
      {
        title: "Regulatory Compliance",
        details: [
          { technology: "Generative AI", description: "Analyzes operational data to ensure compliance with safety and environmental regulations." },
          { technology: "Software Development", description: "Builds compliance management systems to streamline audits and reporting." }
        ]
      },
    ]
  },
  {
    category: "Connected Vehicles",
    subCategories: [
      {
        title: "Vehicle-to-Everything (V2X) Communication",
        details: [
          { technology: "IoT", description: "Enables real-time communication between vehicles, infrastructure, and cloud systems for enhanced safety and traffic management." },
          { technology: "Generative AI", description: "Models traffic patterns and predicts congestion, optimizing route suggestions." },
          { technology: "Software Development", description: "Develops V2X systems for data exchange and coordination among connected vehicles." }
        ]
      },
      {
        title: "Autonomous Driving",
        details: [
          { technology: "IoT", description: "Collects data from cameras, LIDAR, and other sensors to guide autonomous vehicles." },
          { technology: "Generative AI", description: "Processes sensor data to make real-time driving decisions and enhance navigation." },
          { technology: "Software Development", description: "Builds the software stack required for autonomous vehicle systems." }
        ]
      },
    ]
  },
  {
    category: "Sustainability and Energy Management",
    subCategories: [
      {
        title: "Energy Optimization",
        details: [
          { technology: "IoT", description: "Tracks energy consumption across factories or vehicle fleets to identify inefficiencies." },
          { technology: "Generative AI", description: "Suggests energy-saving measures by analyzing usage patterns." },
          { technology: "Software Development", description: "Creates platforms for monitoring and controlling energy use in real-time." }
        ]
      },
      {
        title: "Carbon Footprint Monitoring",
        details: [
          { technology: "IoT", description: "Sensors measure emissions from manufacturing processes and vehicles." },
          { technology: "Generative AI", description: "Models strategies to reduce carbon output and improve sustainability." },
          { technology: "Software Development", description: "Implements dashboards for tracking and reporting environmental impact." }
        ]
      },
    ]
  },
  {
    category: "Fraud and Risk Management",
    subCategories: [
      {
        title: "Real-time Anomaly Detection (Manufacturing/Logistics)",
        details: [
          { technology: "IoT", description: "Monitors systems for deviations from expected operational parameters." },
          { technology: "Generative AI", description: "Identifies patterns indicating potential fraud or risk scenarios." },
          { technology: "Software Development", description: "Develops alert systems to notify managers of anomalies." }
        ]
      },
    ]
  },
  
  // Add more categories...
];

function  ManufacturingAndAutomotive() {
  return (
    <div className="app-container">
      {cardData.map((category, index) => (
        <div key={index} className="category-card">
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

export default ManufacturingAndAutomotive;