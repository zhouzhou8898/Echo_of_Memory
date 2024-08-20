'use client';

import React, { useEffect, useState } from 'react';

const P5 = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      handleResize(); // 初始化尺寸
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className='iframe-container'>
      <iframe
        src='https://openprocessing.org/sketch/2330198/embed/?plusEmbedHash=8e6ced0b&userID=457268&plusEmbedTitle=true&plusEmbedFullscreen=true&show=sketch'
        style={{ width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
};

export default P5;
