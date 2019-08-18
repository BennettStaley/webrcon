import React, { useState, useEffect } from 'react';
import ParticleField from 'react-particles-webgl';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  body: {
    zIndex: -10,
    padding: 0,
    margin: 0,
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
  },
});

const config = {
  showCube: false,
  dimension: '3D',
  velocity: 2,
  boundaryType: 'passthru',
  antialias: true,
  direction: {
    xMin: -0.6,
    xMax: 0.3,
    yMin: -1,
    yMax: -0.6,
    zMin: -0.6,
    zMax: 0.3,
  },
  lines: {
    colorMode: 'rainbow',
    color: '#351CCB',
    transparency: 0.9,
    limitConnections: true,
    maxConnections: 20,
    minDistance: 150,
    visible: false,
  },
  particles: {
    colorMode: 'solid',
    color: '#ffffff',
    transparency: 0.9,
    shape: 'circle',
    boundingBox: 'canvas',
    count: Math.floor(Math.random(200) * Math.floor(500)),
    minSize: 1,
    maxSize: 25,
    visible: true,
  },
  cameraControls: {
    enabled: false,
    enableDamping: false,
    dampingFactor: 0.2,
    enableZoom: false,
    autoRotate: false,
    autoRotateSpeed: 0.3,
    resetCameraFlag: true,
  },
};

export const Snow = () => {
  const [client, setClient] = useState(false);

  const styles = useStyles();
  useEffect(() => {
    setClient(true);
  }, []);

  if (client) {
    return (
      <div className={styles.body}>
        <ParticleField config={config} />
      </div>
    );
  } else return null;
};

export default Snow;
