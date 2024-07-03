import Category from "./Category";

const CategoryPicker = () => {
  return (
    <div className="flex h-[166px] w-[255px] gap-[8px] rounded-xl bg-bt-white_def p-[24px]">
      <Category />
      <Category />
      <Category />
    </div>
  );
};

export default CategoryPicker;
