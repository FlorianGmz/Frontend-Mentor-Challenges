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
    <div className="flex h-[178px] w-[255px] flex-col justify-between rounded-xl bg-bt-white_def px-[24px] py-[19px]">
      <div className="flex items-center justify-between">
        <h3 className="text-h3">Roadmap</h3>
        <a className="text-body-3 text-el_active underline">View</a>
      </div>
      {roadmapStatus.map((status) => (
        <RoadmapStatus
          key={status.id}
          color={status.color}
          statusName={status.statusName}
        />
      ))}
      {/*  <RoadmapStatus color="#F49F85" statusName="Planned" />
      <RoadmapStatus color="#AD1FEA" statusName="In-Progress" />
      <RoadmapStatus color="#62BCFA" statusName="Live" /> */}
    </div>
  );
};

export default RoadmapNav;
