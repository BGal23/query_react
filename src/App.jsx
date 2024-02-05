import "./App.css";
import { Route, Routes } from "react-router-dom";
import ContainerPage from "./components/Container/Container";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

// import { fetchData } from "./API";
// import CreateContact from "./CreateContact";
// import { useQuery } from "@tanstack/react-query";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ContainerPage />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" index element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
