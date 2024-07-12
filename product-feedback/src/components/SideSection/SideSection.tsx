import React, { useState } from "react";
import FrontendMentorHeader from "./FrontendMentorHeader";
import SideBar from "./SideBar";
import CategoryPicker from "./CategoryPicker/CategoryPicker";
import RoadmapNav from "./RoadmapNav/RoadmapNav";

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
    <div className="gd flex flex-col md:mx-auto md:my-[40px] md:w-[689px] md:flex-row md:gap-[10px]">
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
      <div className="hidden md:block">
        <CategoryPicker
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="hidden md:block">
        <RoadmapNav />
      </div>
    </div>
  );
};

export default SideSection;
