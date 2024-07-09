import { NavLink } from "react-router-dom";
import NavButton from "../NavButton";

const Header = () => {
  return (
    <div>
      <NavLink to={"before"}>Go Back</NavLink>
      <NavButton
        to="/feedback/edit"
        bgColor="bt-blue_def"
        bgHoverColor="bt-blue_hover"
      />
    </div>
  );
};

export default Header;
