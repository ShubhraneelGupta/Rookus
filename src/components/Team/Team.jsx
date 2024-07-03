import React from 'react';
import './Team.scss';

const TeamMember = ({ image, name, role, description, email, linkedIn }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} className="member-image" />
      <div className="member-details">
        <div className="member-info">
          <span className="member-name">{name}</span>
          <span className="member-role">{role}</span>
        </div>
        <p className="member-description">{description}</p>
        <p className="member-contact">
          <span>Email: <a href={`mailto:${email}`}>{email}</a></span>
          <span>LinkedIn: <a href={linkedIn} target="_blank" rel="noopener noreferrer">View Profile</a></span>
        </p>
      </div>
    </div>
  );
};

const Team = () => {
  const members = [
    {
      image: 'https://via.placeholder.com/80',
      name: 'John Doe',
      role: 'Software Engineer',
      description: 'John is a skilled developer with 5 years of experience in web development.',
      email: 'john.doe@example.com',
      linkedIn: 'https://www.linkedin.com/in/johndoe'
    },
    {
      image: 'https://via.placeholder.com/80',
      name: 'Jane Smith',
      role: 'Project Manager',
      description: 'Jane has a knack for keeping projects on track and ensuring client satisfaction.',
      email: 'jane.smith@example.com',
      linkedIn: 'https://www.linkedin.com/in/janesmith'
    },
    {
      image: 'https://via.placeholder.com/80',
      name: 'Alice Johnson',
      role: 'UI/UX Designer',
      description: 'Alice is passionate about creating user-friendly interfaces and experiences.',
      email: 'alice.johnson@example.com',
      linkedIn: 'https://www.linkedin.com/in/alicejohnson'
    },
    {
      image: 'https://via.placeholder.com/80',
      name: 'Bob Brown',
      role: 'DevOps Engineer',
      description: 'Bob ensures our infrastructure is robust and scalable.',
      email: 'bob.brown@example.com',
      linkedIn: 'https://www.linkedin.com/in/bobbrown'
    },
    {
      image: 'https://via.placeholder.com/80',
      name: 'Charlie Green',
      role: 'Data Scientist',
      description: 'Charlie specializes in data analysis and machine learning.',
      email: 'charlie.green@example.com',
      linkedIn: 'https://www.linkedin.com/in/charliegreen'
    },
  ];

  return (
    <div className="team-section">
      <div className="about">
        <h2>About Us</h2>
        <p>
          Welcome to our team page! We are a group of dedicated professionals committed to delivering the best results.
          Our diverse team brings a wealth of experience and expertise to every project we undertake. We believe in
          collaboration, innovation, and excellence in everything we do.
        </p>
        <p>
          Our team is composed of talented individuals from various fields, each bringing unique skills and perspectives
          to the table. From software development to project management, our combined expertise allows us to tackle any
          challenge and deliver exceptional outcomes.
        </p>
      </div>
      <div className="team">
        {members.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
