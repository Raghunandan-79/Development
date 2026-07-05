import axios from "axios";

async function getBlogs() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/",
  );
  return response.data;
}

const Blogs = async () => {
  const blogs = await getBlogs();

  return (
    <div>
      {blogs.map((blog: ITodo) => (
        <Todo key={blog.id} title={blog.title} completed={blog.completed} id={0} />
      ))}
    </div>
  );
};

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

function Todo({ id, title, completed }: ITodo) {
  return (
    <div>
      {id} {title} {completed ? "done!" : "Not done"}
    </div>
  );
}

export default Blogs;
