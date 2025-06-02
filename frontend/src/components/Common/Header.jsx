import Topbar from "../Layout/Topbar";
import Nabvar from "./Nabvar";

const Header = () => {
  return <header className="border-b border-lande-peach-ligth-2">
    {/* Topbar*/}
    <Topbar />
    {/* navbar*/}
    <Nabvar />
    {/* Cart Drawer */}
  </header>;
};

export default Header;
