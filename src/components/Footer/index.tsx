import type { FC } from "react";
import FooterImage from "./FooterImage";

const Footer: FC = () => {
  return (
    <div className="  w-[80%] m-auto mt-6 bg-[#F5F5F5] flex max-sm:flex-col">
      <FooterImage />
    </div>
  );
};

export default Footer;
