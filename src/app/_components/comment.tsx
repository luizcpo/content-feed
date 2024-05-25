"use client"
import Image from "next/image";
import type { Comment } from "../types/post";

interface CommentProps {
  comment: Comment;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <article className="m-1 rounded-lg bg-white p-6 text-base dark:bg-gray-900">
      <footer className="mb-2 flex items-center justify-between">
        <div className="flex items-center">
          <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
            <Image
              className="mr-2 h-6 w-6 rounded-full"
              src={comment.profilePic}
              alt={comment.author}
              width={500}
              height={500}
            />
            {comment.author}
          </p>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{comment.text}</p>
    </article>
  );
};

export default Comment;
