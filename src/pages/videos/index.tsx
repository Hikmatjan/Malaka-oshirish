import type { FC } from "react";
import { useQuery } from "react-query";
import axios from "axios";
interface Dataitemtype {
  number: string;
  title: string;
  _id?: string;
}

const Videos: FC = () => {
  const { data } = useQuery(
    "categories",
    () =>
      axios({
        url: "https://api.babm.uz/courses/categories",
        params: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMiw",
        },
      }).then((res) => res.data),
    { refetchOnWindowFocus: false },
  );
  console.log(data);
  return (
    <div className=" w-[80%] m-auto mt-5 ">
      <div>
        <h3 className=" font-bold text-xl">Shaxmat Tugaragi</h3>

        <div className="mt-5">
          {data?.map((value: Dataitemtype) => (
            <div
              className="flex justify-between cursor-pointer gap-4"
              key={value._id}
            >
              <div className="flex justify-between cursor-pointer mb-4 w-full hover:text-[46A358]">
                <p>{String(value?.title)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
