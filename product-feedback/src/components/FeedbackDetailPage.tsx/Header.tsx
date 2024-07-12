import { NavLink } from "react-router-dom";
import IconArrowLeft from "../ui/icons/IconArrowLeft";
import NavButton from "../ui/NavButton";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[16px]">
        <IconArrowLeft />
        <NavLink to={"before"} className="text-h4 text-bt-white_font">
          Go Back
        </NavLink>
      </div>
      <NavButton
        to="/feedback/edit"
        bgColor="bt-blue_def"
        bgHoverColor="bt-blue_hover"
      />
    </div>
  );
};

export default Header;
