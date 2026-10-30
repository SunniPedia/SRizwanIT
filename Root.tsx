import React from 'react';
import {Composition} from 'remotion';
import {Video} from './Video';
import {DURATION, FPS, HEIGHT, WIDTH} from './theme';

// One composition at 1920x1080. 4K = same composition rendered with --scale=2.
export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="Intro"
      component={Video}
      durationInFrames={DURATION}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
