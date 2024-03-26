import { Skeleton } from "antd";

const useLoader = () => {
  const category_loader = (count?: number) => {
    count = count ?? 9;
    return Array.from({ length: count }).map((_, id) => (
      <div key={id} className="mt-4">
        <Skeleton.Input active={true} block={true} />
      </div>
    ));
  };
  const payment_loader = () => {
    return (
      <div className=" mt-[12px] text-center ">
        <h3 className=" text-[#1FD18B] text-4xl mt-[18px]">
          {" "}
          {<Skeleton.Input active={true} />}
        </h3>
        <p className=" mt-3 mb-2 text-base font-bold ">
          UP To {<Skeleton.Button size="small" active={true} />} % Off
        </p>
        <Skeleton.Image active={true} />
      </div>
    );
  };
  const flowers_loader = () => {
    return Array.from({ length: 12 }).map((_, id) => (
      <div key={id}>
        <div className="group h-[300px] bg-[#f5f5f5] flex justify-center items-center relative cursor-pointer ">
          <Skeleton.Image active={true} />
        </div>
        <h3 className="font-bold  mt-3">
          <Skeleton.Input active={true} />
        </h3>
        <p className="text-[#46A358] font-bold mt-2">
          {" "}
          $<Skeleton.Button active={true} size="small" />
        </p>
      </div>
    ));
  };
  return { category_loader, payment_loader, flowers_loader };
};

export default useLoader;
