// import React from 'react';

// const Page = () => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         position: "relative",
//         textAlign: "start",
//       }}
//     >
//       <svg
//         className="home_svg"
//         viewBox="0 0 500 200"
//         style={{ width: "100%", height: "auto", aspectRatio: "500 / 200" }}
//       >
//         <defs>
//           <clipPath id="video-text-clip">
//             {/* Static text */}
//             <text
//               x="0"
//               y="50"
//               dominantBaseline="hanging"
//               textAnchor="start"
//               fontSize="50"
//               fontWeight="bold"
//               fill="white"
//               fontFamily="Arial, sans-serif"
//             >
//               CONTACT US
//             </text>
//           </clipPath>
//         </defs>
//       </svg>

//       {/* Video Container */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           clipPath: "url(#video-text-clip)",
//           WebkitClipPath: "url(#video-text-clip)", // For better support on Safari
//         }}
//       >
//         <video
//           src="/videos/bg_pattern.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             display: "block",
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default Page;


import React from 'react';

const ResponsiveVideoTextWithClamp = () => {
  const svgWidth = 800;
  const svgHeight = 350;

  // clamp for font size: min 30px, preferred 8vw, max 95px
  // 8vw adapts font size relative to viewport width
  const fontSizeClamp = 'clamp(30px, 8vw, 95px)';

  // vertical position centered roughly in the SVG
  const textY = svgHeight / 2;

  return (
    <div
      style={{
        width: '100%',
        maxWidth: svgWidth,
        margin: '0 auto',
        position: 'relative',
        height: svgHeight,
        textAlign: 'start',
      }}
    >
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        style={{ width: '100%', height: 'auto', aspectRatio: `${svgWidth} / ${svgHeight}` }}
      >
        <defs>
          <clipPath id="video-text-clip">
            <text
              x="40" // some left padding
              y={textY}
              dominantBaseline="middle"
              textAnchor="start"
              fill="white"
              fontFamily="Arial, sans-serif"
              fontWeight="bold"
              style={{
                fontSize: fontSizeClamp,
                userSelect: 'none',
              }}
            >
              CONTACT US
            </text>
          </clipPath>
        </defs>
      </svg>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          clipPath: 'url(#video-text-clip)',
          WebkitClipPath: 'url(#video-text-clip)',
        }}
      >
        <video
          src="/videos/bg_pattern.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
};

export default ResponsiveVideoTextWithClamp;