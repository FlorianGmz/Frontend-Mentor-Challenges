import React, { useState } from "react";
import FrontendMentorHeader from "./FrontendMentorSticker";
import SideBar from "./SideBar";

interface SideSectionProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SideSection: React.FC<SideSectionProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <FrontendMentorHeader
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      {sidebarIsOpen && (
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
    </div>
  );
};

export default SideSection;
