import { api } from "~/trpc/server";
import PostCard from "./_components/postCard";

const posts = await api.post.getAll();
const postsSorted = posts.contentCards.sort(
  (a, b) => b.metadata.priority - a.metadata.priority,
);

export default async function Home() {
  return (
    <>
      <h1 className="m-8 items-start text-center text-3xl font-bold text-amber-900">
        Content Feed
      </h1>
      <div className="flex-column m-auto flex max-w-screen-sm flex-wrap justify-evenly space-y-8">
        {postsSorted.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </div>
    </>
  );
}
