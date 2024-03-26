import { Modal } from "antd";
import type { FC } from "react";
import { LoginOutlined } from "@ant-design/icons";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useredux";
import { setSiteModalVisibility } from "../../../redux/ModalSlice";

const SiteMap: FC = () => {
  const dispatch = useReduxDispatch();
  const { SiteMapModalVisibility } = useReduxSelector((state) => state.modal);
  const hover_style: string =
    "hover:border-l-2 hover:border-[#46A258] hover:text-[#46A258] hover:pl-2 ";

  return (
    <Modal
      onCancel={() => dispatch(setSiteModalVisibility())}
      open={SiteMapModalVisibility}
      title="SiteMap "
      footer={false}
    >
      <div className="flex gap-3 flex-col">
        <h3
          className={`font-bold hover:text-[#46A258]cursor-pointer transition-colors ${hover_style}`}
        >
          Yoriqnoma
        </h3>
        <h3
          className={`font-bold  cursor-pointer transition-colors ${hover_style}`}
        >
          Ozbekcha
        </h3>
        <div className="flex justify-center items-center gap-2">
          <button className="bg-[#46A258] text-white w-[296px] h-[36px] rounded-md ">
            <LoginOutlined className="text-[16px]" />
            Login
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SiteMap;
