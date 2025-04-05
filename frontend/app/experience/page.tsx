"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Background from "../component/Background";

const ExperiencePage = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setMedia(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!username || !text || !media) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const formData = new FormData();
    formData.append("username", username);
    formData.append("text", text);
    formData.append("media", media);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("✨ Cảm ơn bạn đã chia sẻ kỉ niệm!");
        router.push("/customer");
      }
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu:", error);
      alert("Đã xảy ra lỗi khi gửi dữ liệu.");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden px-6 py-12 bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 text-white">
      <Background />

      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-xl z-0"></div>

      <div className="relative z-10 w-full max-w-2xl p-8 rounded-3xl bg-white/10 shadow-2xl border border-white/20 backdrop-blur-xl">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-white drop-shadow-xl">
          🌠 Gửi Kỉ Niệm Của Bạn Tới Làng Nghề Mỹ Nghiệp
        </h1>

        <div className="space-y-6">
          <div>
            <label className="block text-lg font-semibold mb-2">👤 Tên của bạn</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập tên của bạn..."
              className="w-full px-4 py-3 rounded-xl bg-white/30 placeholder-white border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">📸 Hình ảnh</label>
            <input
              type="file"
              accept="image/*, video/*"
              onChange={handleMediaChange}
              className="w-full file:px-4 file:py-2 file:rounded-full file:bg-pink-400 file:text-white file:border-none cursor-pointer transition-all hover:file:bg-pink-600 bg-white/20 rounded-xl text-white"
            />

            {previewUrl && (
              <div className="mt-4">
                {previewUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                  <video src={previewUrl} controls className="rounded-xl w-full h-64 object-cover shadow-xl" />
                ) : (
                  <img src={previewUrl} alt="preview" className="rounded-xl w-full h-64 object-cover shadow-xl" />
                )}
              </div>
            )}
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">📝 Cảm nghĩ</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Chia sẻ cảm xúc, một câu chuyện, hoặc kỉ niệm đẹp..."
              className="w-full px-4 py-3 h-32 resize-none rounded-xl bg-white/30 placeholder-white border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition"
            >
              🚀 Gửi Kỉ Niệm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
