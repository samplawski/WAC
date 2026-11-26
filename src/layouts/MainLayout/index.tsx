import { Outlet } from "react-router";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
