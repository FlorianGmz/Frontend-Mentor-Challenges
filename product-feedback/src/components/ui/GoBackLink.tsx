import { NavLink } from "react-router-dom";
import IconArrowLeft from "../ui/icons/IconArrowLeft";

const GoBackLink = () => {
  return (
    <div className="flex items-center gap-[16px]">
      <IconArrowLeft />
      <NavLink to={"before"} className="text-h4 text-bt-white_font">
        Go Back
      </NavLink>
    </div>
  );
};

export default GoBackLink;
