import axios from "axios";

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  const data = response.data;

  return (
    <div>
      Id: {data.id}
      <br />
      Title: {data.title}
      <br />
      body: {data.body}
    </div>
  );
}
