"use client";
import React, { useState } from "react";
import Image from "next/image";
import type { Post } from "../types/post";
import Comment from "./comment";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [showText, setShowText] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const truncateClass = showText ? "" : "line-clamp-3";

  const handleShowMore = () => {
    setShowText(!showText);
  };

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  const authorName = `${post.textData.author.first} ${post.textData.author.last}`;

  return (
    <React.Fragment>
      <div className="max-h-128 max-w-screen-md  overflow-hidden rounded p-4 shadow-lg">
        <Image
          className="m-auto h-48 w-96 object-cover"
          src={post.imageUri}
          alt="Post image"
          width="500"
          height="500"
        />
        <div className="px-6 py-4">
          <div className="flex justify-between">
            <div className="mb-2 font-bold">{post.textData.title}</div>
            <div className="mb-2">Author: {authorName}</div>
          </div>
          <div className="mb-2">{post.textData.subTitle}</div>
          <p className={`text-base text-gray-700 ${truncateClass}`}>
            {post.textData.body}
          </p>
          <p
            className="m-2 w-full cursor-pointer text-center"
            onClick={handleShowMore}
          >
            {showText ? "Show less" : "Show more"}
          </p>
        </div>
        {showComments && (
          <div className="px-6 pb-2 pt-4">
            {post.comments.map((comment) => {
              return <Comment key={comment.author} comment={comment} />;
            })}
          </div>
        )}
        <p
          className="w-full cursor-pointer text-center"
          onClick={handleShowComments}
        >
          {!showComments ? "Show comments" : "Hide comments"}
        </p>
      </div>
    </React.Fragment>
  );
};

export default PostCard;
