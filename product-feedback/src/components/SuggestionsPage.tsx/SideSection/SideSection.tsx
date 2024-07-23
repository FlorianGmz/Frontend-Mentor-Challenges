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
  console.log(sidebarIsOpen);
  return (
    <div className="flex flex-col md:mx-auto md:my-[40px] md:w-[689px] md:flex-row md:gap-[10px] xl:mx-0 xl:my-0 xl:h-[529px] xl:w-[255px] xl:flex-col xl:gap-[24px]">
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
          setSidebarIsOpen={setSidebarIsOpen}
        />
      </div>
      <div className="hidden md:block">
        <RoadmapNav />
      </div>
    </div>
  );
};

export default SideSection;
