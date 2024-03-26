import type { FC } from "react";
import Dashboard from "./Dashboard";
import VideosCategory from "./VideosCategory";

const MainCategory: FC = () => {
  return (
    <div className="  w-[80%] m-auto flex mt-6 gap-12">
      <Dashboard />
      <VideosCategory />
    </div>
  );
};

export default MainCategory;
