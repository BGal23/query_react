import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ContainerPage from "./components/Container/Container";
//const Container = lazy(() => import("./components/Container/Container"));
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));

// import { fetchData } from "./API";
// import CreateContact from "./CreateContact";
// import { useQuery } from "@tanstack/react-query";

const App = () => {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<ContainerPage />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" index element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
