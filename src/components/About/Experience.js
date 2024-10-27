import React from 'react';
import '../../styles/Timeline.css';

function Experience() {
  const experienceData = [
    {
      date: 'Jul 2024 - Present',
      title: 'Intern',
      description: 'Working at Cloud Counselage Pvt. Ltd., focusing on front-end and back-end development.',
    },
    {
      date: 'Nov 2023 - Mar 2024',
      title: 'Artificial Intelligence Engineer Intern',
      description: 'Internship at RadicalX, where I gained experience to integrate AI algorithms into software.',
    },
    {
      date: 'Sep 2021 - Nov 2021',
      title: 'Associate',
      description: 'Internship at Flipkart, where I gained experience in Buisness and Project Management.',
    },
  ];

  return (
    <div className="experience-timeline">
      <h1 className="project-heading">
          Some <strong className="purple">Experiences </strong>
        </h1>
      <div className="experience-timeline-container">
        {experienceData.map((item, index) => (
          <div key={index} className="experience-timeline-item">
            <div className="experience-timeline-date">{item.date}</div>
            <div className="experience-timeline-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
