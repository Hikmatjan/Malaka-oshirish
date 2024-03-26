import ReactDOM from "react-dom/client";
import "./index.css";
import ProviderConfig from "./tools/provider";
import Footer from "./components/Footer";
import MainCategory from "./components/MainCategory";
import Modalvisibility from "./components/Modalvisibility";
import Root from "./root";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <ProviderConfig>
    <Root />
    <Modalvisibility />
    <MainCategory />
    <Footer />
  </ProviderConfig>,
);
