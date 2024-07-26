import GoBackLink from "../ui/GoBackLink";
import NavButton from "../ui/NavButton";

const RoadmapPage = () => {
  return (
    <div>
      <div className="flex h-[100px] w-full items-center justify-between bg-bt-dark-blue_back px-[24px] py-[26px] text-bt-white_def">
        <div>
          <GoBackLink page="roadmap" />
          <h3 className="text-h3">Roadmap</h3>
        </div>
        <NavButton to="/feedback/create" type="create" />
      </div>
    </div>
  );
};

export default RoadmapPage;
