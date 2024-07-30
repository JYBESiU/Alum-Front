import { useState, useRef } from "react";
import { uploadToS3 } from "../utils";

export const useRecorder = () => {
  const [isRecording, setIsRecording] =
    useState<boolean>(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(
    null
  );
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, {
        type: "audio/wav",
      });
      const file = new File(
        [audioBlob],
        `audio-${Date.now()}.mp3`,
        {
          lastModified: new Date().getTime(),
          type: "audio/mp3",
        }
      );
      uploadToS3(file, file.name);
      audioChunksRef.current = [];
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  return {
    isRecording,
    startRecording,
    stopRecording,
  };
};
