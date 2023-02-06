import "../../../assets/styles/public/blogs.css";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Footer from "./Footer";
import TopBanner from "./TopBanner";

const PublicLayout = () => {
  return (
    <>
      <TopBanner />
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
