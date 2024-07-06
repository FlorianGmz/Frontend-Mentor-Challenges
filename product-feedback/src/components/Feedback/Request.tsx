import CategoryBadge from "./CategoryBadge.tsx";

const Request = () => {
  return (
    <div className="flex flex-col items-start justify-between">
      <h3 className="text-h3 text-el-font_def group-hover:text-bt-blue_def">
        Title
      </h3>
      <p className="text-body-1 text-feedback-description">Description</p>
      <CategoryBadge categoryName={"Feature"} />
    </div>
  );
};

export default Request;
