import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "@emotion/styled";

export const ExperienceContainer = styled.div`
  margin-top: 5rem;
`;

export const ExperienceCard = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
`;

export const ExperienceTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const ExperienceDetails = styled.p`
  font-size: 16px;
  margin-bottom: 0.5rem;
  color: #555;
`;

export const ExperienceTasks = styled.ul`
  font-size: 14px;
  color: #777;
  padding-left: 20px;
  list-style-type: disc;
`;

export const ExperienceDate = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 0.5rem;
`;

const experiences = [
  {
    title: "Software Engineer - DEFTeam Private Limited, Hyderabad",
    dateRange: "August 2022 - July 2024",
    details: "Designed and implemented modules for goal management, performance analysis, and email automation. Developed role-based access controls, secure API solutions, and chatbot functionality.",
    tasks:[
      "Designed and implemented APIs and developed dynamic, user-friendly front-end interfaces using modern frameworks, ensuring  seamless integration, scalability, and responsive user experiences across devices.",
      "Developed and managed both SQL and NoSQL databases, optimizing data storage, retrieval, and security to enhance  application performance and data integrity. ",
      "Managed AWS EC2 instances for deploying scalable web applications, ensuring high availability, fault tolerance, and optimal  performance through effective monitoring and resource management. ",
      "Collaborated using version control systems like Git, actively participating in code reviews, sprint planning, and agile workflows to  ensure the delivery of high-quality software solutions.",
      "Worked closely with stakeholders to gather and analyze requirements, ensuring alignment with project goals and delivering solutions tailored to business needs. ",
      "Coordinated with leads and team members to obtain necessary approvals and incorporate feedback, ensuring the seamless  integration of new features while maintaining system functionality and usability. "
    ],
  },
  {
    title: "Freelance Web Developer",
    dateRange: "July 2024 - Present",
    details: "Worked on various freelance projects, creating dynamic and user-friendly websites for clients using modern web technologies.",
    tasks: [
      
      "Specializing in developing personalized portfolios for clients and developers to effectively showcase their skills, achievements, and unique value in the best possible way."
    ],
  },
];

function Experience() {
  return (
    <>
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <ExperienceContainer id="experience">
        <div className="Container">
          <div className="SectionTitle">Experience</div>
          <div className="BigCard">
            {experiences.map((exp, index) => (
              <ScrollAnimation animateIn="fadeInLeft" key={index}>
                <ExperienceCard>
                  <ExperienceTitle>{exp.title}</ExperienceTitle>
                  <ExperienceDate>{exp.dateRange}</ExperienceDate>
                  <ExperienceDetails>{exp.details}</ExperienceDetails>
                  <ExperienceTasks>
                    {exp.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ExperienceTasks>
                </ExperienceCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ExperienceContainer>
    </>
  );
}

export default Experience;
