import type { FC } from "react";
import { Form, Input, Divider } from "antd";
import { useState } from "react";
import {
  FacebookOutlined,
  GoogleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useReduxDispatch } from "../../../../hooks/useredux";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
const Login: FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const signIn = useSignIn();
  const dispatch = useReduxDispatch();
  const onFinish = (e: { email: string; password: string }) => {
    setLoading(true);
    axios({
      url: "https://api.babm.uz/auth/sign-in",
      method: "POST",
      data: e,
      params: {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMiw",
      },
    }).then((res) => {
      signIn({
        token: res.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: res.data.data.user,
      });
      setLoading(false);
    });
  };
  return (
    <div className="m-auto">
      <div>
        <h3 className="mt-5">Enter your username and password to login.</h3>
        <Form onFinish={onFinish} name="normal_login" className="login-form">
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Pochtangizni kiriting!" }]}
          >
            <Input
              className="h-10  mt-3 border border-[#46A358]"
              placeholder="sasasas@gmail.com"
              type="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Parolingizni kiriting" }]}
          >
            <Input.Password
              className="h-10  mt-3 border border-[#46A358]"
              placeholder="*********"
              type="password"
            />
          </Form.Item>
          <h3 className="text-[#1677FF] font-normal mt-[14px] cursor-pointer w-fit ml-auto">
            Parolni tiklash
          </h3>
          <button
            type="submit"
            className="bg-[#1677FF] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-11 my-7"
          >
            {isLoading ? <LoadingOutlined /> : "Login"}
          </button>
        </Form>
        <Divider>Or Login with</Divider>
      </div>
      <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-10 w-full rounded-md mb-4 pl-3">
        {" "}
        <FacebookOutlined />
        Login with Facebook
      </button>
      <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-10 w-full rounded-md mb-4 pl-3 ">
        {" "}
        <GoogleOutlined /> Login With Google
      </button>
    </div>
  );
};

export default Login;
