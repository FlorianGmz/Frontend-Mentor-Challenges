import React from "react";
import IconHamburger from "./IconHamburger";
import IconClose from "./IconClose";

interface FrontendMentorHeaderProps {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FrontendMentorHeader: React.FC<FrontendMentorHeaderProps> = ({
  sidebarIsOpen,
  setSidebarIsOpen,
}) => {
  const handleClick = () => {
    setSidebarIsOpen((sidebarIsOpen) => !sidebarIsOpen);
  };
  return (
    <div className="flex h-[72px] w-screen items-center justify-between bg-[url('src/assets/suggestions/desktop/background-header.png')] bg-cover px-[24px] py-[15px]">
      <div className="flex flex-col">
        <p className="text-body-4 text-bt-white_def">Frontend Mentor</p>
        <p className="text-body-3 text-feedback-board">Feedback Board</p>
      </div>
      <div onClick={handleClick}>
        {sidebarIsOpen ? <IconClose /> : <IconHamburger />}
      </div>
    </div>
  );
};

export default FrontendMentorHeader;
