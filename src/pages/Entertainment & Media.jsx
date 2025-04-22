import React from 'react';
import { Link } from "react-router-dom";
import Button from "../components/Button";

const cardData = [
  {
    category: "Content Creation & Personalization",
    subCategories: [
      {
        title: "Content Recommendation",
        details: [
          { technology: "Generative AI", description: "Personalizes content suggestions by analyzing viewing behavior and preferences." },
          { technology: "Software Development", description: "Builds recommendation engines for streaming platforms." }
        ]
      },
      {
        title: "Automated Scriptwriting & Idea Generation",
        details: [
          { technology: "Generative AI", description: "Generates scripts, storylines, and creative ideas based on existing media and cultural trends." },
          { technology: "Software Development", description: "Integrates AI models into content management systems to streamline creative processes." }
        ]
      },
      {
        title: "Personalized Advertising",
        details: [
          { technology: "Generative AI", description: "Tailors ads by analyzing audience data and generating targeted campaigns." },
          { technology: "Software Development", description: "Develops advertising platforms for dynamic, real-time ad insertions." }
        ]
      },
    ]
  },
  {
    category: "Immersive Viewer Experiences",
    subCategories: [
      {
        title: "Interactive Content",
        details: [
          { technology: "IoT", description: "Integrates smart devices (e.g., VR headsets, haptic devices) for enhanced interactive experiences." },
          { technology: "Generative AI", description: "Creates dynamic, personalized interactive storylines for immersive experiences." },
          { technology: "Software Development", description: "Builds platforms that integrate AI-driven storytelling and IoT devices." }
        ]
      },
      {
        title: "Virtual & Augmented Reality (VR/AR)",
        details: [
          { technology: "IoT", description: "Enables immersive experiences using wearables and VR devices." },
          { technology: "Software Development", description: "Develops AR/VR applications for live events, concerts, and media experiences." }
        ]
      },
      {
        title: "Real-time Engagement with Audience",
        details: [
          { technology: "Generative AI", description: "Analyzes live viewer feedback and generates real-time interactive content (e.g., polls, discussions)." },
          { technology: "Software Development", description: "Builds interactive platforms for viewer engagement during live broadcasts." }
        ]
      },
    ]
  },
  {
    category: "Audience Acquisition & Retention",
    subCategories: [
      {
        title: "Audience Segmentation",
        details: [
          { technology: "Generative AI", description: "Generates audience profiles based on viewing patterns and demographic data." },
          { technology: "Software Development", description: "Develops tools for advanced audience segmentation and targeted marketing." }
        ]
      },
      {
        title: "Churn Prediction",
        details: [
          { technology: "Generative AI", description: "Analyzes user behavior to predict viewer churn and retention strategies." },
          { technology: "Software Development", description: "Implements automated systems to monitor audience engagement metrics." }
        ]
      },
      {
        title: "Cross-selling & Upselling",
        details: [
          { technology: "Generative AI", description: "Identifies opportunities for upselling subscriptions or premium services based on audience behavior." },
          { technology: "Software Development", description: "Builds platforms to manage subscription services and product offerings." }
        ]
      },
    ]
  },
  {
    category: "Process Automation",
    subCategories: [
      {
        title: "Content Moderation",
        details: [
          { technology: "Generative AI", description: "Automates content moderation, detecting inappropriate content, and maintaining platform standards." },
          { technology: "Software Development", description: "Builds automated content moderation tools for social platforms and media networks." }
        ]
      },
      {
        title: "Automated Editing",
        details: [
          { technology: "Generative AI", description: "Generates video summaries, captions, or highlights from raw footage." },
          { technology: "Software Development", description: "Integrates AI into editing suites for automated content processing." }
        ]
      },
      {
        title: "Social Media Management",
        details: [
          { technology: "Generative AI", description: "Generates social media posts and responses based on trends and audience sentiment." },
          { technology: "Software Development", description: "Builds platforms for automated social media scheduling and analysis." }
        ]
      },
    ]
  },
  {
    category: "Data & Analytics",
    subCategories: [
      {
        title: "Audience Sentiment Analysis",
        details: [
          { technology: "Generative AI", description: "Analyzes viewer feedback and social media chatter to gauge audience sentiment." },
          { technology: "Software Development", description: "Develops tools to visualize and interpret sentiment data for content creators and marketers." }
        ]
      },
      {
        title: "Content Performance Analytics",
        details: [
          { technology: "Generative AI", description: "Generates insights into content performance based on viewer engagement data." },
          { technology: "Software Development", description: "Builds real-time dashboards to monitor content success across platforms." }
        ]
      },
      {
        title: "Predictive Analytics for Viewership Trends",
        details: [
          { technology: "Generative AI", description: "Predicts future content trends by analyzing historical viewership data." },
          { technology: "Software Development", description: "Implements predictive tools for media planning and content development." }
        ]
      },
    ]
  },
  {
    category: "Security & Compliance",
    subCategories: [
      {
        title: "Digital Rights Management (DRM)",
        details: [
          { technology: "IoT", description: "Monitors the distribution of content to prevent unauthorized usage or piracy." },
          { technology: "Generative AI", description: "Detects content infringements using image and video recognition models." },
          { technology: "Software Development", description: "Develops secure DRM platforms for content creators and distributors." }
        ]
      },
      {
        title: "Fraud Detection",
        details: [
          { technology: "Generative AI", description: "Identifies fraudulent activities, such as fake accounts and view-botting, by analyzing user behavior." },
          { technology: "Software Development", description: "Builds fraud detection systems to monitor and protect streaming platforms." }
        ]
      },
    ]
  },
  {
    category: "Live Events & Streaming",
    subCategories: [
      {
        title: "Real-time Performance Optimization",
        details: [
          { technology: "IoT", description: "Monitors bandwidth and device usage to optimize live streaming quality." },
          { technology: "Generative AI", description: "Adjusts streaming parameters in real-time based on audience size and engagement." },
          { technology: "Software Development", description: "Builds streaming platforms that dynamically adjust to network conditions." }
        ]
      },
      {
        title: "Personalized Event Experiences",
        details: [
          { technology: "Generative AI", description: "Creates tailored experiences during live events (e.g., personalized camera angles or commentary)." },
          { technology: "Software Development", description: "Develops user interfaces for customizing live event viewing." }
        ]
      },
    ]
  },
  {
    category: "Synthetic Data Generation",
    subCategories: [
      {
        title: "Simulated Audience Testing",
        details: [
          { technology: "Generative AI", description: "Generates synthetic datasets to simulate audience behavior for testing new content." },
          { technology: "Software Development", description: "Develops platforms to simulate audience engagement for content pilots and previews." }
        ]
      },
      {
        title: "Test Environments for Media Platforms",
        details: [
          { technology: "Generative AI", description: "Creates test scenarios for new content rollouts and platform updates." },
          { technology: "Software Development", description: "Builds environments for testing media platform scalability and performance." }
        ]
      },
    ]
  },
  {
    category: "Talent Management & Collaboration",
    subCategories: [
      {
        title: "Automated Contract Generation",
        details: [
          { technology: "Generative AI", description: "Drafts contracts and agreements for talent management based on predefined templates." },
          { technology: "Software Development", description: "Implements platforms to manage talent contracts and workflows." }
        ]
      },
      {
        title: "Collaboration Tools for Content Creation",
        details: [
          { technology: "Generative AI", description: "Assists in generating content ideas and collaborative projects by analyzing team dynamics." },
          { technology: "Software Development", description: "Develops integrated tools for collaborative content creation and remote working environments." }
        ]
      },
    ]
  }, 
  // Add more categories...
];

function  EntertainmentAndMedia() {
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

export default EntertainmentAndMedia;