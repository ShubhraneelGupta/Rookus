import React, { useState } from 'react';
import './Team.scss';

const TeamMember = ({ image, name, description, size }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`team-member ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
      style={{ width: size, height: size }}
    >
      <div className="team-member-inner">
        <div className="team-member-front">
          <img src={image} alt={name} />
          <div className="polaroid-caption">{name}</div>
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
  const numMembers = members.length;
  const size = `calc(${100 / Math.sqrt(numMembers)}vh - 20px)`;

  return (
    <div className="team">
      {members.map((member, index) => (
        <TeamMember key={index} {...member} size={size} />
      ))}
    </div>
  );
};

export default Team;
