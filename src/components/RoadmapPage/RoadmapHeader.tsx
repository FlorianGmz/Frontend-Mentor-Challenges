import GoBackLink from "../ui/GoBackLink";
import NavButton from "../ui/NavButton";

const RoadmapHeader = () => {
  return (
    <div className="mx-auto flex h-[100px] w-full items-center justify-between bg-bt-dark-blue_back px-[24px] py-[26px] text-bt-white_def md:mt-[40px] md:h-[113px] md:w-[689px] md:rounded-xl xl:w-[1110px] xl:px-[32px] xl:py-[27px]">
      <div>
        <GoBackLink page="roadmap" />
        <h3 className="text-h3 xl:text-h1">Roadmap</h3>
      </div>
      <NavButton to="/feedback/create" type="create" />
    </div>
  );
};

export default RoadmapHeader;
