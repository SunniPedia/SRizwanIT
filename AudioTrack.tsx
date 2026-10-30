import React from 'react';
import {Audio, interpolate, useVideoConfig} from 'remotion';
import bgm from './background.mp3';

// C7: background.mp3 must be in the repo root (step A2).
// 1s fade-in, 1.5s fade-out, peak volume 0.8.
// `loop`: if background.mp3 is shorter than the video (e.g. 18s vs 30s)
// it repeats automatically until the video ends. If longer, it is cut at 30s.
export const AudioTrack: React.FC = () => {
  const {durationInFrames, fps} = useVideoConfig();
  return (
    <Audio
      src={bgm}
      loop
      volume={(f) =>
        interpolate(
          f,
          [0, fps, durationInFrames - fps * 1.5, durationInFrames],
          [0, 0.8, 0.8, 0],
          {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
        )
      }
    />
  );
};
