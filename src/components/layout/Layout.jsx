import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="container p-5 mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
