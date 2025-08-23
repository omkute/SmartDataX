import React from "react";

interface VideoSectionProps {
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  overlayText?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  src,
  autoPlay = true,
//   loop = true,
  muted = true,
  overlayText,
}) => {
  return (
    <div className="relative w-full overflow-hidden p-5 ">
      {/* Background Video */}
      <video
        src={src}
        autoPlay={autoPlay}
        // loop={noloo}
        muted={muted}
        playsInline
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
