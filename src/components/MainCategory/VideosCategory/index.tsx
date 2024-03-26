import type { FC } from "react";
import axios from "axios";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { useSearchParams, useNavigate } from "react-router-dom";
// import useLoader from "../../../../../generic/skeleton";
import { useQuery } from "react-query";
interface DataItemType {
  title?: string;
  created_at?: Date;
  updated_at?: string;
  curriculum?: string;
  _id?: number;
}

const VideosCategory: FC<DataItemType> = ({ title, _id }) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  // const { flowers_loader } = useLoader();

  const category: string = String(
    params.get("category") ?? "madaniyat va san'at",
  );
  const { data, isLoading } = useQuery(
    `/category`,
    () =>
      axios({
        url: `https://api.babm.uz/courses/madaniyat-va-sanat/${category}`,
        params: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMiw",
        },
      }).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    },
  );

  console.log(data);
  console.log(params);
  return (
    <div className="mt-[30px] grid grid-cols-3 gap-4 max-sm:grid-cols-2 ">
      {data?.map((value: DataItemType) => (
        <div key={value?._id} {...value}>
          <div className="group h-[300px] bg-[#f5f5f5] flex justify-center items-center relative cursor-pointer ">
            <img src={value.title} alt="" />
            <div className=" gap-2 absolute bottom-5 hidden group-hover:flex">
              <div className=" w-[35px] h-[35px] bg-[#ffffff] rounded-lg flex justify-center items-center text-xl">
                <ShoppingCartOutlined />
              </div>
              <div className=" w-[35px] h-[35px] bg-[#ffffff] rounded-lg flex justify-center items-center text-xl">
                <HeartOutlined />
              </div>
              <div
                onClick={() => {
                  navigate(`./shop/${category}/${value._id}`);
                }}
                className=" w-[35px] h-[35px] bg-[#ffffff] rounded-lg flex justify-center items-center text-xl"
              >
                <SearchOutlined />
              </div>
            </div>
          </div>
          <h3 className="font-bold  mt-3">{value.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default VideosCategory;
