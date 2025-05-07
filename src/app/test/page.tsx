'use client';

import { useEffect, useRef, useState } from 'react';

interface VideoTextMaskProps {
  headingTitle: string;
}

const VideoTextMask: React.FC<VideoTextMaskProps> = ({ headingTitle }) => {
  const [viewBox, setViewBox] = useState('0 0 400 200');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const updateViewBox = () => {
      setViewBox(window.innerWidth >= 800 ? '0 0 800 200' : '0 0 400 200');
    };

    updateViewBox();
    window.addEventListener('resize', updateViewBox);
    return () => window.removeEventListener('resize', updateViewBox);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '200px',
        marginTop: '90px',
        overflow: 'hidden',
      }}
    >
      <svg
        viewBox={viewBox}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="text-mask">
            <rect width="100%" height="100%" fill="black" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="4rem"
              fontWeight="bold"
              fill="white"
              fontFamily="Arial, sans-serif"
            >
              Contact us
            </text>
          </mask>
        </defs>

        <image
          href="/videos/bg_pattern2.mp4"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#text-mask)"
        />

        {/* Fallback for Safari using <video> absolutely positioned behind text-shaped mask */}
        <foreignObject width="100%" height="100%">
          <div
            style={{
              width: '100%',
              height: '100%',
              maskImage: 'url(#text-mask)',
              WebkitMaskImage: 'url(#text-mask)',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
            }}
          >
            <video
              ref={videoRef}
              src="/videos/bg_pattern2.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default VideoTextMask;
