"use client";

import React, { useState, useEffect } from 'react';

interface Question {
    questionText: string;
    options: string[];
    correctAnswer: string;
}

const questions: Question[] = [
    {
        questionText: 'Nghề dệt thổ cẩm Chăm chủ yếu do ai đảm nhận?',
        options: ['A. Đàn ông', 'B. Phụ nữ', 'C. Cả đàn ông và phụ nữ', 'D. Trẻ em'],
        correctAnswer: 'B. Phụ nữ',
    },
    {
        questionText: 'Điều gì tạo nên nét độc đáo trong nghệ thuật dệt thổ cẩm Chăm?',
        options: ['A. Sử dụng nguyên liệu tự nhiên', 'B. Hoa văn tinh xảo', 'C. Màu sắc tươi sáng', 'D. Tất cả các yếu tố trên'],
        correctAnswer: 'D. Tất cả các yếu tố trên',
    },
    {
        questionText: 'Nghề dệt thổ cẩm Chăm được truyền từ đời này sang đời khác như thế nào?',
        options: ['A. Qua sách vở', 'B. Qua các lớp học', 'C. Theo hình thức "mẹ truyền con nối"', 'D. Qua các video hướng dẫn'],
        correctAnswer: 'C. Theo hình thức "mẹ truyền con nối"',
    },
    {
        questionText: 'Hoa văn trên thổ cẩm Chăm Mỹ Nghiệp thường phản ánh điều gì?',
        options: ['A. Quan niệm về vũ trụ và cuộc sống', 'B. Phong cảnh thiên nhiên', 'C. Các câu chuyện lịch sử', 'D. Các loài động vật'],
        correctAnswer: 'A. Quan niệm về vũ trụ và cuộc sống',
    },
    {
        questionText: 'Ai là người đã đưa ra công thức nổi tiếng E=mc²?',
        options: ['A. Oppenheimer', 'B. Steven Spielberg', 'C. Franz Kafka', 'D. Albert Einstein'],
        correctAnswer: 'D. Albert Einstein',
    },
];

const Game: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswerClick = (selectedAnswer: string) => {
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const handleRestartGame = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    };

    return (
        <div className="game-container p-8 max-w-xl mx-auto bg-gradient-to-r from-purple-100 to-pink-50 shadow-2xl rounded-3xl">
            {showResult ? (
                <div className="result-section text-center">
                    <h1 className="text-3xl font-extrabold text-purple-700 mb-6 animate-pulse">
                        Chúc mừng bạn đã hoàn thành!
                    </h1>
                    <p className="text-xl text-gray-700 mb-8">
                        Điểm số của bạn: {score} / {questions.length}
                    </p>
                    <button
                        onClick={handleRestartGame}
                        className="bg-gradient-to-br from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition duration-300"
                    >
                        Chơi lại
                    </button>
                </div>
            ) : (
                <div>
                    <div className="question-section mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Câu hỏi {currentQuestion + 1}/{questions.length}
                        </h2>
                        <p className="text-xl text-gray-700 leading-relaxed">{questions[currentQuestion].questionText}</p>
                    </div>
                    <div className="answer-section space-y-4">
                        {questions[currentQuestion].options.map((option, index) => {
                            const colors = ['bg-red-200 hover:bg-red-300', 'bg-green-200 hover:bg-green-300', 'bg-blue-200 hover:bg-blue-300', 'bg-yellow-200 hover:bg-yellow-300'];
                            const color = colors[index % colors.length];

                            return (
                                <button
                                    key={option}
                                    onClick={() => handleAnswerClick(option)}
                                    className={`w-full px-8 py-4 rounded-xl ${color} shadow-md text-lg text-gray-800 text-left focus:outline-none transition duration-300 font-semibold`}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Game;
