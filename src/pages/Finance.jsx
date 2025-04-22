import React from 'react';
import { Link } from "react-router-dom";
import Button from "../components/Button";

const cardData = [
  {
    category: "Credit Scoring & Risk Assessment",
    subCategories: [
      {
        title: "Creditworthiness Evaluation",
        details: [
          { technology: "IoT", description: "Devices like payment terminals, smart meters, and telematics provide real-time customer usage data, enhancing risk models." },
          { technology: "Generative AI", description: "Analyzes transactional and behavioral data to generate customer insights." },
          { technology: "Software Development", description: "Builds integrated credit scoring platforms with AI-driven analytics." }
        ]
      },
      {
        title: "Risk Assessment",
        details: [
          { technology: "IoT", description: "Monitors collateral and real-time transactions to improve risk management." },
          { technology: "Generative AI", description: "Predicts risk by generating models based on past financial data." },
          { technology: "Software Development", description: "Designs risk management dashboards and assessment tools." }
        ]
      },
      {
        title: "Loan Default Prediction",
        details: [
          { technology: "IoT", description: "Tracks borrower activity to assess financial health and forecast defaults." },
          { technology: "Generative AI", description: "Develops predictive models to assess default risks." },
          { technology: "Software Development", description: " Implements early warning systems with real-time analytics." }
        ]
      }
    ]
  },
  {
    category: "Customer Acquisition & Engagement",
    subCategories: [
      {
        title: "Personalized Marketing",
        details: [
          { technology: "Generative AI", description: "Crafts targeted marketing content based on user behavior and profiles." },
          { technology: "Software Development", description: "Creates automated marketing tools for multichannel campaigns." }
        ]
      },
      {
        title: "Digital Onboarding & KYC",
        details: [
          
          { technology: "Software Development", description: "Implements digital onboarding solutions with AI-enhanced KYC processes." },
          { technology: "Generative AI", description: "Automates document verification, reducing manual effort." }
        ]
      },
      {
        title: "Targeted Customer Acquisition",
        details: [
          { technology: "Generative AI", description: "Segments potential customers by analyzing trends in financial behavior." },
          { technology: "Software Development", description: "Develops customer targeting systems for precision marketing." }
        ]
      },
    ]
  },
  {
    category: "Enhanced Customer Experience",
    subCategories: [
      {
        title: "Smart Chatbots",
        details: [
          { technology: "Generative AI", description: "Powers AI-based chatbots to handle customer queries and tasks in natural language." },
          { technology: "Software Development", description: "Integrates chatbots into customer support systems." }
        ]
      },
     
       {
        title: "Personalized Financial Guidance",
        details: [
          { technology: "Generative AI", description: "Delivers tailored financial advice and savings recommendations." },
          { technology: "Software Development", description: "Builds customer-facing apps for managing personal finances." }
        ]
      },
      {
        title: "Query Resolution Automation",
        details: [
          { technology: "Generative AI", description: "Provides intelligent responses to customer questions." },
          { technology: "Software Development", description: "Embeds AI into customer service platforms." }
        ]
      },
    ]
  },
  {
    category: "Customer Retention & Loyalty",
    subCategories: [
      {
        title: "Customer Churn Prediction",
        details: [
          { technology: "Generative AI", description: "Predicts customer churn using behavioral data analysis." },
          { technology: "Software Development", description: "Implements real-time monitoring tools for tracking churn indicators." }
        ]
      },
      {
        title: "Cross-Selling & Upselling",
        details: [
          { technology: "Generative AI", description: "Recommends personalized products based on customer history." },
          { technology: "Software Development", description: "Builds systems that optimize cross-selling strategies." }
        ]
      },
      {
        title: "Customer Sentiment Analysis",
        details: [
          { technology: "Generative AI", description: "Analyzes social media and feedback to track customer sentiment." },
          { technology: "Software Development", description: "Develops sentiment tracking and analysis tools." }
        ]
      },
    ]
  },
  {
    category: " Operational Efficiency & Automation",
    subCategories: [
      {
        title: "Document Processing Automation",
        details: [
          { technology: "Generative AI", description: "Summarizes long reports and documents for faster decision-making." },
          { technology: "Software Development", description: "Creates document ingestion and management solutions." }
        ]
      },
      {
        title: "Email Classification & Response",
        details: [
          { technology: "Generative AI", description: "Classifies and drafts email replies automatically." },
          { technology: "Software Development", description: "Integrates automated email response systems into existing platforms." }
        ]
      },
      {
        title: "Robotic Process Automation (RPA)",
        details: [
          { technology: "Software Development", description: " Automates routine back-office tasks, improving operational efficiency." }
        ]
      },
    ]
  },
  {
    category: " Fraud Detection & Prevention",
    subCategories: [
      {
        title: "Transaction Monitoring",
        details: [
          { technology: "IoT", description: "Monitors real-time transaction devices for anomalies." },
          { technology: "Generative AI", description: "Detects suspicious patterns in transactions to prevent fraud." },
          { technology: "Software Development", description: " Builds fraud detection platforms and security monitoring systems." }
        ]
      },
      {
        title: "Account Takeover Prevention",
        details: [
          { technology: "Generative AI", description: "Monitors user behaviors to detect signs of account compromise." },
          { technology: "Software Development", description: "Enhances authentication and detection protocols." }
        ]
      },
      {
        title: "Payments Fraud Detection",
        details: [
          { technology: "Generative AI", description: "Analyzes payment transactions for potential fraud." },
          { technology: "Software Development", description: "Secures payment gateways with fraud detection algorithms." }
        ]
      },
    ]
  },
  {
    category: "Regulatory Compliance & AML",
    subCategories: [
      {
        title: "Anti-money Laundering (AML)",
        details: [
          { technology: "Generative AI", description: "Analyzes transaction patterns to identify illicit activities." },
          { technology: "Software Development", description: "Implements compliance tools and real-time reporting systems." }
        ]
      },
      {
        title: "Regulatory Reporting",
        details: [
          { technology: "Generative AI", description: "Automates the generation of regulatory reports." },
          { technology: "Software Development", description: "Builds regulatory reporting platforms." }
        ]
      },
    ]
  },
  {
    category: "Synthetic Data Generation for Model Training",
    subCategories: [
      {
        title: "Model Development",
        details: [
          { technology: "Generative AI", description: "Creates synthetic datasets to enhance machine learning models." },
          { technology: "Software Development", description: "Builds testing environments for training AI models." }
        ]
      },
      {
        title: "Test Data & Simulations",
        details: [
          { technology: "Generative AI", description: "Generates realistic financial scenarios for testing." },
          { technology: "Software Development", description: "Develops simulation platforms for product testing." }
        ]
      },
    ]
  },
  {
    category: "Data Architecture & Management",
    subCategories: [
      {
        title: "Data Summarization",
        details: [
          { technology: "Generative AI", description: "Summarizes large datasets for quicker insights." },
          { technology: "Software Development", description: "Builds data management and visualization tools for real-time analysis." }
        ]
      },
    ]
  },
  {
    category: "Knowledge Management & Collaboration",
    subCategories: [
      {
        title: "Semantic Search",
        details: [
          { technology: "Generative AI", description: "Enhances internal search capabilities with AI-driven insights." },
          { technology: "Software Development", description: " Develops internal tools for knowledge management and information retrieval." }
        ]
      },
      {
        title: "Programming Assistance",
        details: [
          { technology: "Generative AI", description: "Supports developers with code generation and debugging." },
          { technology: "Software Development", description: "Integrates AI into development environments to streamline coding efforts." }
        ]
      },
    ]
  },
  
  // Add more categories...
];

function Finance() {
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

export default Finance;