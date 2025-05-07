'use client';

import { useEffect, useRef, useState } from 'react';

interface VideoTextMaskProps {
  headingTitle: string;
}

const VideoTextMask: React.FC<VideoTextMaskProps> = ({ headingTitle }) => {
  const [viewBox, setViewBox] = useState('0 0 400 200');
  const svgRef = useRef<SVGSVGElement | null>(null);

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
        height: 'auto',
        marginTop: '90px',
        overflow: 'hidden',
      }}
    >
      {/* Video background */}
      <video
        src="/videos/bg_pattern2.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />

      {/* SVG text mask overlay */}
      <svg
        ref={svgRef}
        className="text-mask"
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="text-mask" maskUnits="userSpaceOnUse">
            <rect width="100%" height="100%" fill="black" />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="5rem"
              fontWeight="bold"
              fill="white"
              fontFamily="Arial, sans-serif"
            >
              {headingTitle}
            </text>
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="white" mask="url(#text-mask)" />
      </svg>
    </div>
  );
};

export default VideoTextMask;
