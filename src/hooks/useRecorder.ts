import { useState, useRef } from "react";
import { uploadToS3 } from "../utils";

export const useRecorder = (
  handleAfterUpload: (payload: object) => Promise<void>
) => {
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

    mediaRecorderRef.current.onstop = async () => {
      const audioBlob = new Blob(audioChunksRef.current, {
        type: "audio/mp3",
      });
      const file = new File(
        [audioBlob],
        `audio-${Date.now()}.mp3`,
        {
          lastModified: new Date().getTime(),
          type: "audio/mp3",
        }
      );
      await uploadToS3(file, file.name);
      handleAfterUpload({
        audioUrl: `https://kr.object.ncloudstorage.com/message-audio/${file.name}`,
        audioFilename: file.name,
      });

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
