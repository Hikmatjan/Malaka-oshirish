import { Carousel } from "antd";
import type { FC } from "react";
import Card from "./Card/index";
import { hero_data } from "../../../utils";

const Hero: FC = () => {
  return (
    <div>
      <Carousel>
        {hero_data.map((value, idx) => (
          <Card
            flower_url={value.flower_url}
            button_text={value.button_text}
            title={value.title}
            key={idx}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
