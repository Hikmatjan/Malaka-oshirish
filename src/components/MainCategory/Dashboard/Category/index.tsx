import type { FC } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import useLoader from "../../../../generic/skeleton";

interface Dataitemtype {
  title?: string;
  created_at?: Date;
  updated_at?: string;
  routh_path?: string;
  _id?: number;
  category?: string;
}

const Category: FC = () => {
  const { category_loader } = useLoader();
  const [params, setParams] = useSearchParams();
  const { data, isLoading } = useQuery(
    "/categories",
    () =>
      axios({
        url: "https://api.babm.uz/courses/categories",
        params: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMiw",
        },
      }).then((res) => res.data.data),
    { refetchOnWindowFocus: false },
  );
  console.log(data);
  const active_path: string = String(
    params.get("category") ?? "madaniyat va san'at",
  );

  return (
    <div>
      <h3 className=" font-bold text-xl">Categoriyalar</h3>
      <div className="mt-5">
        {isLoading
          ? category_loader()
          : data?.map((value: Dataitemtype) => (
              <div
                className="flex justify-between cursor-pointer gap-4"
                key={value._id}
              >
                <div
                  // onClick={() => setParams({ category: value.routh_path })}
                  className={`flex justify-between cursor-pointer mb-4 w-full hover:text-[46A358] transition-colors ${active_path === value.routh_path && "text-[46A358]"}`}
                >
                  <p>{String(value?.title)}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Category;
