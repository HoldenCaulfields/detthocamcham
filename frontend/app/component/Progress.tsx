"use client";

import React, { useState, useRef, useEffect } from "react";

const Progress = () => {
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoUrl = "/mymom.mp4";

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateProgress = () => setProgress((video.currentTime / video.duration) * 100);
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        video.addEventListener("timeupdate", updateProgress);
        video.addEventListener("play", handlePlay);
        video.addEventListener("pause", handlePause);

        return () => {
            video.removeEventListener("timeupdate", updateProgress);
            video.removeEventListener("play", handlePlay);
            video.removeEventListener("pause", handlePause);
        };
    }, []);

    const togglePlay = () => {
        const video = videoRef.current;
        if (video) isPlaying ? video.pause() : video.play();
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const video = videoRef.current;
        if (!video) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const clickPosition = e.clientX - rect.left;
        const progressPercentage = clickPosition / rect.width;

        video.currentTime = video.duration * progressPercentage;
        setProgress(progressPercentage * 100);
    };

    return (
        <div className="video-container">
            <div className="video-wrapper">
                <video ref={videoRef} src={videoUrl} className="video-player" onClick={togglePlay} />
                <button className="play-pause-button" onClick={togglePlay}>
                    {isPlaying ? (
                        // Pause Icon (SVG)
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                            <rect x="5" y="4" width="4" height="16"></rect>
                            <rect x="15" y="4" width="4" height="16"></rect>
                        </svg>
                    ) : (
                        // Play Icon (SVG)
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                            <polygon points="5,4 19,12 5,20"></polygon>
                        </svg>
                    )}
                </button>
            </div>
            <div className="progress-bar-container" onClick={handleProgressClick}>
                <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>

            <style jsx>{`
                .video-container {
                    width: 90%;
                    max-width: 700px;
                    margin: 20px auto;
                    border: 1px solid #ddd;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }

                .video-wrapper {
                    position: relative;
                    width: 100%;
                }

                .video-player {
                    width: 100%;
                    display: block;
                    cursor: pointer;
                    border-radius: 10px 10px 0 0;
                }

                .play-pause-button {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(0, 0, 0, 0.5);
                    border: none;
                    padding: 15px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: background 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .play-pause-button:hover {
                    background: rgba(0, 0, 0, 0.8);
                }

                .progress-bar-container {
                    background: #eee;
                    height: 10px;
                    cursor: pointer;
                    border-radius: 5px;
                    position: relative;
                }

                .progress-bar {
                    background: #3498db;
                    height: 10px;
                    width: 0;
                    transition: width 0.2s ease-in-out;
                    border-radius: 5px;
                }

                @media (min-width: 1024px) {
                    .video-container {
                        max-width: 700px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Progress;
