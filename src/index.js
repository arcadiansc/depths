import React, { useRef, useEffect, useState } from 'react';
import './styles.css';
import { start } from './depths';

function useWindowSize() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  function handleResize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return (() => window.removeEventListener('resize', handleResize));
  }, []);

  return { height, width };
}

const EndlessDepths = () => {
  const canvasRef = useRef();
  const { height, width } = useWindowSize();

  useEffect(() => {
    if (canvasRef.current) {
      start();
    }
  })
  return (
    <canvas
      style={{
        backgroundColor: 'rgb(0,0,0)',
        position: 'absolute'
      }}
      id="starfield"
      width={width}
      height={height}
      ref={canvasRef}
    />
  )
}

export default EndlessDepths;

