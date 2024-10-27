import React from 'react';
import '../../styles/Timeline.css';
import Lottie from 'lottie-react';
import animationData from '../../Assets/Animation2.json'; // Replace with your actual animation file

function Education() {
  const educationData = [
    {
      date: '2022 - 2024',
      title: 'Master of Computer Applications',
      description: 'Techno International Newtown, specialized in Computer Applications and software development.',
    },
    {
      date: '2019 - 2022',
      title: 'Bachelor of Computer Applications',
      description: 'Techno India Institute of Technology, specialized in software development and Computer Applications.',
    },
    {
      date: '2018 - 2019',
      title: 'High School',
      description: 'DAV Public School, with a focus on science and mathematics.',
    },
  ];

  return (
    <div className="education-timeline-wrapper">
      <h1 className="project-heading">
        My <strong className="purple">Education </strong>
      </h1>
      <div className="education-timeline-content">
        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div key={index} className="education-timeline-item">
              <div className="education-timeline-date">{item.date}</div>
              <div className="education-timeline-details">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Right Side Animation */}
        <div className="education-animation">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
}

export default Education;
