import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import FooterPage from "../Footer/Footer";

const ContainerPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FooterPage />
    </>
  );
};

export default ContainerPage;
