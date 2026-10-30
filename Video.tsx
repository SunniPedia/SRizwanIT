import React from 'react';
import {AbsoluteFill} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {wipe} from '@remotion/transitions/wipe';
import {SCENE, TRANSITION} from './theme';
import {SceneHook, SceneIntro, SceneApps, SceneWeb, SceneOutro} from './Scenes';
import {AudioTrack} from './AudioTrack';
import {SfxTrack} from './SfxTrack';
import './fonts'; // make sure every font loads

const t = linearTiming({durationInFrames: TRANSITION});

export const Video: React.FC = () => {
  return (
    <AbsoluteFill style={{background: '#fff'}}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={SCENE.hook}>
          <SceneHook />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t} />
        <TransitionSeries.Sequence durationInFrames={SCENE.intro}>
          <SceneIntro />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t} />
        <TransitionSeries.Sequence durationInFrames={SCENE.apps}>
          <SceneApps />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({direction: 'from-bottom'})} timing={t} />
        <TransitionSeries.Sequence durationInFrames={SCENE.web}>
          <SceneWeb />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={wipe({direction: 'from-left'})} timing={t} />
        <TransitionSeries.Sequence durationInFrames={SCENE.outro}>
          <SceneOutro />
        </TransitionSeries.Sequence>
      </TransitionSeries>
      <AudioTrack />
      <SfxTrack />
    </AbsoluteFill>
  );
};
