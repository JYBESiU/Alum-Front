import { PauseIcon, PlayIcon } from "@/svg";
import { primaryColor } from "@/utils/colors";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

export interface VoicePalyerProps {
  voiceUrl: string;
  setIsQuizShow: Dispatch<SetStateAction<boolean>>;
}

function VoicePalyer({
  voiceUrl,
  setIsQuizShow,
}: VoicePalyerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (progress > 60) {
      setIsQuizShow(true);
    } else {
      setIsQuizShow(false);
    }
  }, [progress, setIsQuizShow]);

  useEffect(() => {
    var audio = new Audio();
    audioRef.current = audio;
    audioRef.current.src = voiceUrl;

    audioRef.current.addEventListener(
      "loadedmetadata",
      handleLoadedMetadata
    );
    audioRef.current.addEventListener(
      "timeupdate",
      handleTimeUpdate
    );
    audioRef.current.addEventListener("ended", handleEnded);

    return () => {
      audioRef.current?.pause();
    };
  }, [voiceUrl]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress =
        (audioRef.current.currentTime /
          audioRef.current.duration) *
        100;
      setProgress(progress);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      setTimeout(() => {
        audioRef.current?.play();
        setIsPlaying(true);
      }, 500);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <AudioPlayerContainer>
      <ProgressBar>
        <Progress progress={progress} />
      </ProgressBar>
      <Time>
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </Time>
      <Box onClick={handlePlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </Box>
      {/* <audio
        ref={audioRef}
        src={voiceUrl}
        onEnded={handleEnded}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      /> */}
    </AudioPlayerContainer>
  );
}

export default VoicePalyer;

const AudioPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 52px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #8a9a9d;
  overflow: hidden;
  margin-bottom: 4px;
`;

const Progress = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: ${primaryColor};
`;

const Time = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  color: #8a9a9d;
`;
