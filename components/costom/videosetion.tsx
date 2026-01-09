'use client'
import React, { useEffect, useRef } from "react";

interface VideoSectionProps {
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  overlayText?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  src,
  // autoPlay = true,
  muted = true,
  overlayText,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play();
          } else if (videoRef.current) {
            videoRef.current.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      }
    );

    const el = containerRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full xl:w-[80vw] mx-auto overflow-hidden p-5 rounded-3xl 
                shadow-xl shadow-green-400/20 
                transition-all duration-300 ease-in-out
                hover:shadow-2xl hover:shadow-green-400/40
                animate-shadow-pulse"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src={src}
        autoPlay={false} // Changed to false since we'll control play manually
        muted={muted}
        playsInline
        loop
        className="w-full h-full object-cover rounded-2xl"
      />

      {/* Overlay (Optional) */}
      {overlayText && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            {overlayText}
          </h1>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
