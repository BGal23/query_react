import "./App.css";
import { fetchData } from "./API";
import CreateContact from "./CreateContact";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["contact"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>Error!</h3>;
  }

  const list = data.map((element) => {
    return (
      <div key={element.id}>
        {element.name}
        {"   -   "}
        {element.number}
      </div>
    );
  });

  return (
    <>
      <CreateContact />
      <br />
      <br />
      <div>{list}</div>
    </>
  );
};

export default App;
