import type { FC } from "react";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  LoginOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import SiteMap from "./SiteMap";
import { useReduxDispatch } from "../../hooks/useredux";
import { setSiteModalVisibility, setauthModal } from "../../redux/ModalSlice";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { Outlet, useNavigate } from "react-router-dom";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const userData = useAuthUser()();
  const isAuthed = useIsAuthenticated()();
  const dispatch = useReduxDispatch();
  return (
    <>
      <div className="w-[80%] m-auto p-[30px] flex justify-between items-center border-b border-[#96D0EB]">
        <SiteMap />
        <div>
          <img
            src="https://babm.uz/thogeeck/2022/07/logo-babm.png"
            alt="logo"
            className="w-[30%] h-[30%]"
          />
        </div>
        <div className="flex m-5 gap-6 items-center max-sm:hidden">
          <h3
            onClick={() => navigate("/")}
            className="cursor-pointer text-bold"
          >
            {" "}
            Home{" "}
          </h3>
          <h3
            onClick={() => navigate("/Videos")}
            className="cursor-pointer text-bold"
          >
            {" "}
            Videos{" "}
          </h3>
        </div>
        <div className="flex gap-6 items-center max-sm:hidden">
          <button
            onClick={() => dispatch(setauthModal())}
            className="bg-[#1677FF] text-white w-[96px] h-[36px] rounded-md flex justify-center items-center gap-2"
          >
            {userData ? (
              userData.name
            ) : (
              <>
                <LoginOutlined className="text-[23px]" />
                Kirish
              </>
            )}
          </button>
        </div>
        <div className="gap-6 items-center hidden max-sm:flex">
          <SearchOutlined className="text-[23px] cursor-pointer" />
          <ShoppingCartOutlined className="text-[23px] cursor-pointer" />
          <MenuOutlined
            onClick={() => dispatch(setSiteModalVisibility())}
            className="text-[23px] cursor-pointer"
          />
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;
