import React from "react";
import GoBackLink from "../ui/GoBackLink";
import NavButton from "../ui/NavButton";

interface HeaderProps {
  id: string | undefined;
}

const Header: React.FC<HeaderProps> = ({ id }) => {
  return (
    <div className="mx-auto flex h-[40px] w-full items-center justify-between md:h-[44px] md:w-[689px] xl:w-[730px]">
      <GoBackLink page="detail" />
      <NavButton to={`/feedback/${id}/edit`} type="edit" />
    </div>
  );
};

export default Header;
