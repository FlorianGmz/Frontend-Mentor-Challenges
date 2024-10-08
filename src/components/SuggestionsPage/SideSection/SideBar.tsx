import React from "react";
import CategoryPicker from "./CategoryPicker/CategoryPicker";
import RoadmapNav from "./RoadmapNav/RoadmapNav";

interface SideBarProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarProps> = ({
  selectedCategory,
  setSelectedCategory,
  setSidebarIsOpen,
}) => {
  return (
    <div className="absolute left-0 top-[72px] z-10 flex h-screen w-screen justify-end bg-[#000000] bg-opacity-60">
      <div className="flex w-auto animate-slideIn flex-col items-center gap-[24px] bg-body-bg p-[24px] opacity-100">
        <CategoryPicker
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSidebarIsOpen={setSidebarIsOpen}
        />
        <RoadmapNav />
      </div>
    </div>
  );
};

export default SideBar;
