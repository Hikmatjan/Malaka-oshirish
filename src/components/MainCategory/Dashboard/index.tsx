import type { FC } from "react";
import Category from "./Category";
import Social from "./Social";

const Dashboard: FC = () => {
  return (
    <div className=" mt-5 w-[310px] bg-[#F5F5F5] p-[15px] max-lg:hidden h-fit ">
      <Category />
      <Social />
    </div>
  );
};

export default Dashboard;
