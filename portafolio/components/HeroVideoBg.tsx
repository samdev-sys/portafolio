import React from 'react';

interface HeroVideoBgProps {
  children?: React.ReactNode;
  videoSrc?: string;
  fallbackBgClass?: string;
}

const HeroVideoBg: React.FC<HeroVideoBgProps> = ({
  children,
  videoSrc = '/assets/backgroundVideo.mp4',
  fallbackBgClass = 'bg-slate-950',
}) => {
  return (
    <div className={`relative w-full min-h-screen flex items-center justify-center ${fallbackBgClass}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        key={videoSrc}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      <div className="relative z-20 text-white px-4 w-full">
        {children}
      </div>
    </div>
  );
};

export default HeroVideoBg;
