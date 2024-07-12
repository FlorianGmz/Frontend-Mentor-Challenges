import { NavLink } from "react-router-dom";
import RoadmapStatus from "./RoadmapStatus";

const RoadmapNav = () => {
  const roadmapStatus = [
    {
      id: 1,
      color: "#F49F85",
      statusName: { label: "Planned", value: "planned" },
    },
    {
      id: 2,
      color: "#AD1FEA",
      statusName: { label: "In-Progress", value: "in-progress" },
    },
    {
      id: 3,
      color: "#62BCFA",
      statusName: { label: "Live", value: "live" },
    },
  ];
  return (
    <div className="flex h-[178px] w-[223px] flex-col justify-between rounded-xl bg-bt-white_def px-[24px] py-[19px] md:h-[178px] xl:w-[255px]">
      <div className="flex items-center justify-between">
        <h3 className="text-h3">Roadmap</h3>
        <NavLink
          to={"/roadmap"}
          className="text-body-3 text-el_active underline transition-colors hover:text-[#8397F8]"
        >
          View
        </NavLink>
      </div>
      <div className="flex flex-col gap-[8px]">
        {roadmapStatus.map((status) => (
          <RoadmapStatus
            key={status.id}
            color={status.color}
            statusName={status.statusName}
          />
        ))}
      </div>
    </div>
  );
};

export default RoadmapNav;
