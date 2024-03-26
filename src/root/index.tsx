import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Videos from "../pages/videos";

const Root: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
      </Route>
    </Routes>
  );
};

export default Root;
