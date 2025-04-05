"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

interface Post {
  username: string;
  text: string;
  mediaUrl: string;
  _id: string;
  createdAt: string;
}

const CustomerPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        interface ApiResponse {
          data: Post[];
        }

        const response: ApiResponse = await axios.get("https://detthocamcham.onrender.com/upload");
        const sortedPosts: Post[] = response.data.sort((a: Post, b: Post) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const toggleExpand = (postId: string) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-indigo-100 py-10 px-4 md:px-16">
      <h1 className="text-2xl md:text-5xl font-extrabold text-center text-gray-800 mb-10">
        🌟 Những kỷ niệm khách tham quan chia sẻ 🌟
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <h2 className="text-xl font-bold text-indigo-600 mb-2">
              {post.username}
            </h2>
            <div className="mb-4">
              <p
                className={`text-gray-700 italic break-words ${
                  expandedPostId === post._id ? "" : "line-clamp-4 cursor-pointer"
                }`}
                onClick={() => toggleExpand(post._id)}
              >
                “{post.text}”
              </p>
              {expandedPostId !== post._id && post.text.split(" ").length > 50 && (
                <button
                  className="text-indigo-500 hover:text-indigo-700 focus:outline-none text-sm"
                  onClick={() => toggleExpand(post._id)}
                >
                  
                </button>
              )}
              {expandedPostId === post._id && (
                <button
                  className="text-indigo-500 hover:text-indigo-700 focus:outline-none text-sm"
                  onClick={() => toggleExpand(post._id)}
                >
                  
                </button>
              )}
            </div>

            {post.mediaUrl && post.mediaUrl.match(/\.(mp4|webm|ogg)$/i) ? (
              <video
                controls
                className="w-full h-64 object-cover rounded-xl shadow-md"
              >
                <source src={post.mediaUrl} />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={post.mediaUrl}
                alt="Uploaded"
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
            )}
            <p className="text-sm text-gray-500 mt-4">
              Posted on: {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerPage;
