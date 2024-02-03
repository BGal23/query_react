import "./App.css";
import { useQuery, useMutation } from "@tanstack/react-query";

const POSTS = [
  {
    id: 1,
    title: "Post 1",
  },
  {
    id: 2,
    title: "Post 2",
  },
];

const App = () => {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  const newPostMutation = useMutation({
    mutationFn: (title) => {
      return wait(1000).then(() =>
        POSTS.push({ id: crypto.randomUUID(), title })
      );
    },
  });

  if (postQuery.isLoading) return <h1>Is loading...</h1>;
  if (postQuery.isError) {
    return <pre>{JSON.stringify(postQuery.error)}</pre>;
  }
  return (
    <div>
      {postQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button onClick={() => newPostMutation.mutate("New Post")}>
        Add New
      </button>
    </div>
  );
};

const wait = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

export default App;

// const { data, isLoading, isError } = useQuery({
//   queryKey: ["contact"],
//   queryFn: fetchData,
// });

// if (isLoading) {
//   return <h3>Loading...</h3>;
// }
// if (isError) {
//   return <h3>Error!</h3>;
// }

// const list = data.map((element) => {
//   return (
//     <div key={element.id}>
//       {element.name}
//       {"   -   "}
//       {element.number}
//     </div>
//   );
// });
