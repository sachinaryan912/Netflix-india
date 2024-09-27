import React from 'react';
import './RankCard.css';

const RankCard = ({ imageSrc, rank, title }) => {
  return (
    <div className="container1">
      <img src={imageSrc} alt={title} />
      <div className="number">{rank}</div>
    </div>
  );
};

export default RankCard;
