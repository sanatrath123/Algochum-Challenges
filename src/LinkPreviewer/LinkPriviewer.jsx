import React, { useEffect, useState } from 'react';
import { encode } from 'qss';
import { motion } from 'framer-motion';

export default function LinkPriviewer({ url, children }) {
  const width = 200;
  const height = 125;
  const params = encode({
    url,
    screenshot: true,
    meta: false,
    embed: 'screenshot.url',
    colorScheme: 'dark',
    'viewport.isMobile': true,
    'viewport.deviceScaleFactor': 1,
    'viewport.width': width * 3,
    'viewport.height': height * 3,
  });

  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const src = `https://api.microlink.io/?${params}`;

  const dropIn = {
    hidden: {
      y: '-10vh',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '-100vh',
      opacity: 0,
    },
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {isMounted && show ? (
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            position: 'absolute',
            top: '-150px',
            left: '-60px',
            right: '0',
            zIndex: 10,
            backgroundColor: 'transparent',
          }}
        >
          <motion.img
            className="image"
            src={src}
            width={width}
            height={height}
          />
        </motion.div>
      ) : null}
      <a
        href={url}
        target="__blank"
        className="pointer"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </a>
    </div>
  );
}


 