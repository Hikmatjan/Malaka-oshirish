import type { FC } from "react";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useredux";
import { Modal, Tabs } from "antd";
import { setauthModal } from "../../../redux/ModalSlice";
import Login from "./Login";
import Regisration from "./Regisration";

const Modals: FC = () => {
  const dispatch = useReduxDispatch();
  const { authModal } = useReduxSelector((state) => state.modal);
  return (
    <Modal
      onCancel={() => dispatch(setauthModal())}
      open={authModal}
      footer={false}
    >
      <Tabs
        defaultActiveKey="1"
        centered
        items={[
          {
            label: "Kirish",
            key: "1",
            children: <Login />,
          },

          {
            label: "Ro’yxatdan o’tish",
            key: "2",
            children: <Regisration />,
          },
        ]}
      />
    </Modal>
  );
};

export default Modals;
