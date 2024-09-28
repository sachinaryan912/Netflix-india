import React from 'react';
import './PlanCard.css';

const PlanCard = ({ plan, isPopular }) => {
  return (
    <div className={`plan-card ${isPopular ? 'popular' : ''}`}>
      <h3>{plan.name}</h3>
      <p>{plan.resolution}</p>
      <div className="plan-details">
        <p><strong>Monthly price:</strong> ₹{plan.price}</p>
        <p><strong>Video and sound quality:</strong> {plan.quality}</p>
        <p><strong>Resolution:</strong> {plan.resolution}</p>
        <p><strong>Supported devices:</strong> {plan.devices}</p>
        <p><strong>Devices at the same time:</strong> {plan.devicesAtSameTime}</p>
        <p><strong>Download devices:</strong> {plan.downloadDevices}</p>
      </div>
    </div>
  );
};

export default PlanCard;
