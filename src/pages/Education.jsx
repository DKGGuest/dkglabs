import React from 'react';
import { Link } from "react-router-dom";
import Button from "../components/Button";

const cardData = [
  {
    category: "Personalized Learning",
    subCategories: [
      {
        title: "Adaptive Learning Platforms",
        details: [
          { technology: "Generative AI", description: "Tailors educational content based on individual student performance and learning styles." },
          { technology: "Software Development", description: "Builds adaptive learning management systems (LMS) that track student progress and customize curricula." }
        ]
      },
      {
        title: "Real-Time Student Performance Tracking",
        details: [
          { technology: "IoT", description: "Integrates wearables and smart devices to monitor student engagement and physical well-being." },
          { technology: "Software Development", description: "Develops dashboards to analyze and visualize student data for educators." }
        ]
      },
      {
        title: "Content Creation",
        details: [
          { technology: "Generative AI", description: "Automatically generates personalized study guides, quizzes, and assignments." },
          { technology: "Software Development", description: "Builds content generation tools that integrate seamlessly with LMS platforms." }
        ]
      }
    ]
  },
  {
    category: "Student Engagement",
    subCategories: [
      {
        title: "Interactive Classroom Tools",
        details: [
          { technology: "IoT", description: "Uses interactive whiteboards, smart desks, and connected devices to enhance collaboration." },
          { technology: "Generative AI", description: "Facilitates virtual teaching assistants that answer questions and provide instant feedback." },
          { technology: "Software Development", description: "Creates interactive platforms for students to collaborate on projects and assignments." }
        ]
      },
      {
        title: "Gamified Learning",
        details: [
          { technology: "Generative AI", description: "Develops educational games and simulations to make learning more engaging." },
          { technology: "Software Development", description: "Builds game-based learning platforms that integrate with school systems." }
        ]
      }
    ]
  },
  {
    category: "Teacher Support and Automation",
    subCategories: [
      {
        title: "Automated Grading Systems",
        details: [
          { technology: "Generative AI", description: "Grades exams and assignments automatically, providing feedback to students." },
          { technology: "Software Development", description: "Develops grading platforms that integrate with course management tools." }
        ]
      },
      {
        title: "Lesson Planning Assistance",
        details: [
          { technology: "Generative AI", description: "Suggests lesson plans and teaching materials based on curriculum standards and student needs." },
          { technology: "Software Development", description: "Creates intuitive lesson-planning tools with AI-driven recommendations." }
        ]
      },
      {
        title: "Classroom Analytics",
        details: [
          { technology: "IoT", description: "Monitors classroom conditions (e.g., air quality, lighting) to optimize learning environments." },
          { technology: "Software Development", description: "Develops real-time analytics dashboards for teachers to monitor classroom dynamics." }
        ]
      }
    ]
  },
  {
    category: "Student Recruitment and Onboarding",
    subCategories: [
      {
        title: "Personalized Admission Process",
        details: [
          { technology: "Generative AI", description: "Creates personalized messages and content for student recruitment based on their interests and profiles." },
          { technology: "Software Development", description: "Builds automated onboarding systems that streamline admissions, including digital verification and document submission." }
        ]
      },
      {
        title: "Targeted Marketing",
        details: [
          { technology: "Generative AI", description: "Identifies potential students by analyzing demographic and academic data." },
          { technology: "Software Development", description: "Develops campaign management tools for educational marketing teams." }
        ]
      }
    ]
  },
  {
    category: "Virtual Classrooms",
    subCategories: [
      {
        title: "Immersive Learning",
        details: [
          { technology: "Generative AI", description: "Develops virtual teaching assistants and mentors in virtual classrooms." },
          { technology: "Software Development", description: "Builds virtual reality (VR) and augmented reality (AR) classrooms for distance learning." }
        ]
      },
      {
        title: "Interactive Lessons",
        details: [
          { technology: "IoT", description: "Integrates smart classroom tools for remote access and real-time interaction with students." },
          { technology: "Software Development", description: "Develops platforms that support live streaming, recording, and resource sharing in virtual classrooms." }
        ]
      }
    ]
  },
  {
    category: "Student Retention",
    subCategories: [
      {
        title: "Early Intervention Systems",
        details: [
          { technology: "Generative AI", description: "Predicts students at risk of dropping out by analyzing engagement and performance data." },
          { technology: "Software Development", description: "Implements monitoring systems that alert educators and advisors to intervene early." }
        ]
      },
      {
        title: "Personalized Counseling",
        details: [
          { technology: "Generative AI", description: "Provides personalized career and academic counseling based on student profiles." },
          { technology: "Software Development", description: "Builds tools to track student well-being and academic progress for counselors." }
        ]
      }
    ]
  },
  {
    category: "Administrative Efficiency",
    subCategories: [
      {
        title: "Automated Scheduling",
        details: [
          { technology: "Generative AI", description: "Optimizes timetables and resource allocation for classes and events." },
          { technology: "Software Development", description: "Creates scheduling tools that integrate across departments." }
        ]
      },
      {
        title: "Document Processing",
        details: [
          { technology: "Generative AI", description: "Automates the review and summarization of administrative documents." },
          { technology: "Software Development", description: "Builds platforms for document management and automation." }
        ]
      }
    ]
  },
  {
    category: "Security and Privacy",
    subCategories: [
      {
        title: "Data Protection",
        details: [
          { technology: "Generative AI", description: "Detects potential data breaches and monitors for unauthorized access to student records." },
          { technology: "Software Development", description: "Implements secure data management systems and protocols to protect student information." }
        ]
      },
      {
        title: "Real-Time Monitoring",
        details: [
          { technology: "IoT", description: "Monitors school premises with connected cameras and sensors to ensure physical security." },
          { technology: "Software Development", description: "Develops real-time monitoring platforms that notify staff of potential security threats." }
        ]
      }
    ]
  },
  {
    category: "Knowledge Management",
    subCategories: [
      {
        title: "Smart Search Tools",
        details: [
          { technology: "Generative AI", description: "Enhances the searchability of educational materials, allowing teachers and students to find relevant content faster." },
          { technology: "Software Development", description: "Builds knowledge management systems that store, categorize, and retrieve educational resources." }
        ]
      },
      {
        title: "Document Summarization",
        details: [
          { technology: "Generative AI", description: "Summarizes complex academic papers, research, or textbooks for quick reference." },
          { technology: "Software Development", description: "Develops document management tools that allow educators and students to access summarized information quickly." }
        ]
      }
    ]
  },
  {
    category: "Process Automation",
    subCategories: [
      {
        title: "Email Management",
        details: [
          { technology: "Generative AI", description: "Automatically sorts and responds to common student and parent queries." },
          { technology: "Software Development", description: "Implements AI-driven communication platforms for administrative tasks." }
        ]
      },
      {
        title: "Form Processing",
        details: [
          { technology: "Generative AI", description: "Automates form processing for admissions, scholarships, and financial aid applications." },
          { technology: "Software Development", description: "Builds systems for streamlined form submission, processing, and approval." }
        ]
      }
    ]
  },
  {
    category: "Compliance and Reporting",
    subCategories: [
      {
        title: "Regulatory Compliance",
        details: [
          { technology: "Generative AI", description: "Assists in generating compliance reports for accreditation and educational standards." },
          { technology: "Software Development", description: "Builds reporting tools that integrate with educational institutions’ data systems for efficient compliance management." }
        ]
      },
    ]
  },
  
  // Add more categories...
];

function  Education() {
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

export default Education;