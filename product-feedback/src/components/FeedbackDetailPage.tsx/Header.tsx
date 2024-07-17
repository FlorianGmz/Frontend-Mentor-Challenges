import GoBackLink from "../ui/GoBackLink";
import NavButton from "../ui/NavButton";

const Header = () => {
  return (
    <div className="mx-auto flex h-[40px] w-[327px] items-center justify-between md:h-[44px] md:w-[689px]">
      <GoBackLink />
      <NavButton
        to="/feedback/edit"
        bgColor="bt-blue_def"
        bgHoverColor="bt-blue_hover"
      />
    </div>
  );
};

export default Header;
