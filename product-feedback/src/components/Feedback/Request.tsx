import Category from "../Category";

const Request = () => {
  return (
    <div className="flex flex-col items-start justify-between">
      <h3 className="text-h3 text-el-font_def">Title</h3>
      <p className="text-body-1 text-feedback-description">Description</p>
      <Category />
    </div>
  );
};

export default Request;
