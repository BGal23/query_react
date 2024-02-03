import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Container } from "@mui/material";

const ContainerPage = () => {
  return (
    <Container>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default ContainerPage;
