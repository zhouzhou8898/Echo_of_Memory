'use client';

import React, { useEffect, useState } from 'react';

const P5 = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className=''>
      <iframe
        src='https://openprocessing.org/sketch/2330198/embed/?plusEmbedHash=8e6ced0b&userID=457268&plusEmbedTitle=true&plusEmbedFullscreen=true&show=sketch'
        width={dimensions.width}
        height={dimensions.height}
      ></iframe>
    </div>
  );
};

export default P5;
