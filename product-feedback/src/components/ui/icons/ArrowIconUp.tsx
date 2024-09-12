import React from "react";

interface ArrowIconUpProps {
  color: string;
}

const ArrowIconUp: React.FC<ArrowIconUpProps> = ({ color }) => {
  return (
    <div>
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 6l4-4 4 4"
          stroke={color}
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default ArrowIconUp;
