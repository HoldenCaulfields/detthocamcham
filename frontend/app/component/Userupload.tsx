"use client";

import React from "react";
import { useRouter } from "next/navigation";

const UserUpload: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/experience");
  };

  return (
    <div className="w-[90%] sm:w-[80%] md:w-[400px] lg:w-[500px] mx-auto bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-indigo-600/50 transition-transform duration-300 hover:-translate-y-1">
      <div onClick={handleClick} className="flex cursor-pointer flex-col items-center text-center space-y-4">
        <div className="text-4xl sm:text-5xl">📸</div>
        <h2 className="text-xl sm:text-2xl font-bold leading-snug">
          Chia sẻ những hình ảnh <br className="hidden sm:block" /> bạn đã tham quan
        </h2>
        <p className="text-sm sm:text-base text-gray-200 px-2 sm:px-4">
            "Chỉ có khoảnh khắc hiện tại mới thực sự thuộc về chúng ta. (W&P. Lev Tolstoy)"
        </p>
        <button
            onClick={handleClick}
            className="bg-white text-blue-900 font-semibold py-2 px-6 rounded-xl shadow hover:bg-gray-100 transition-all duration-200 active:scale-95"
        >
          Lưu trữ khoảnh khắc
        </button>
      </div>
    </div>
  );
};

export default UserUpload;
