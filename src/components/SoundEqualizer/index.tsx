import { FC, ReactElement, RefObject } from 'react';

import soundFile from '@assets/sound.mp3';
import { StyledSoundEqualizer } from '@components/SoundEqualizer/styled';
import WaveAnimation from '@components/WaveAnimation';

type SoundEqualizerPropsType = {
    audioRef: RefObject<HTMLAudioElement>;
    isPlaying: boolean;
    children: ReactElement;
};

const SoundEqualizer: FC<SoundEqualizerPropsType> = ({ audioRef, isPlaying, children }) => {
    return (
        <StyledSoundEqualizer className="SG-equalizer relative">
            <WaveAnimation isPlaying={isPlaying} />

            <audio ref={audioRef} src={soundFile} controls className="display-none">
                <track kind="captions" src={soundFile} srcLang="en" label="English" default />
            </audio>

            {children}
        </StyledSoundEqualizer>
    );
};

export default SoundEqualizer;
