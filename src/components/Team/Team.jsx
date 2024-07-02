import React, { useState } from 'react';
import './Team.scss';

const TeamMember = ({ image, name, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`team-member ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="team-member-inner">
        <div className="team-member-front">
          <img src={image} alt={name} />
          <span>{name}</span>
        </div>
        <div className="team-member-back">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Team = ({ members }) => {
  return (
    <div className="team">
      {members.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  );
};

export default Team;
