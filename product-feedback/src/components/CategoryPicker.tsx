import Category from "./Category";

import data from "../data/data.json";
import { useState } from "react";

const CategoryPicker = () => {
  const productRequests = data.productRequests;
  const allDataCategories = productRequests.map((request) => request.category);
  const nonDataCategories = ["all", "ui", "ux"];
  const categories = [...nonDataCategories, ...allDataCategories];
  const filteredCategories = Array.from(new Set(categories));

  const [categorySelected, setCategorySelected] = useState("all");

  return (
    <div className="flex h-[166px] w-[255px] flex-wrap items-start gap-[8px] rounded-xl bg-bt-white_def p-[24px]">
      {filteredCategories.map((category) => (
        <Category
          key={category}
          categoryName={category}
          categorySelected={categorySelected}
        />
      ))}
    </div>
  );
};

export default CategoryPicker;
