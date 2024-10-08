import React from "react";

interface StatusCircleProps {
  color: string;
}
const StatusCircle: React.FC<StatusCircleProps> = ({ color }) => {
  return (
    <svg width="8" height="8" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="4" r="4" fill={color} />
    </svg>
  );
};

export default StatusCircle;
