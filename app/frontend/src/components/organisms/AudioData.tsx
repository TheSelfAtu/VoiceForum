import React, { useState, useEffect } from "react";
import { ImageButton } from "../molecules/ImageButton";
export function AudioData() {
  const [audioCtx, setAudioCtx] = useState<null | AudioContext>(null);
  const [
    MediaRecorderInstance,
    setMediaRecorderInstance,
  ] = useState<null | MediaRecorder>(null);
  const [audioChunks, setAudioChunks] = useState<[Blob] | null>(null);
  const [audioElement, setAudioElement] = useState<any>(null);

  useEffect(() => {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    setAudioCtx(new AudioContext());
  }, []);

  useEffect(() => {
    async function createInstance() {
      setMediaRecorderInstance(
        await createMediaRecoderInstance(setAudioChunks)
      );
    }
    createInstance();
  }, [audioChunks]);
  return (
    <div>
      {/* <button className="recording-btn btn--circle btn--shadow position--relative">
        <img
          src="/static/image/mic_black_24dp.svg"
          className="size--icon position--center"
        ></img>
      </button> */}
      <button></button>
      {/* <ImageButton description="Rec" ></ImageButton> */}
      <button
        className="btn-solid"
        onClick={() => {
          // setAudioElement(null);
          // setAudioChunks(null);
          if (MediaRecorderInstance) {
            startRecording(MediaRecorderInstance);
          }
        }}
      >
        録音スタート
      </button>
      {/* 再生ボタン */}
      <button
        className="btn-solid"
        onClick={async () => {
          if (MediaRecorderInstance) {
            await stopRecording(MediaRecorderInstance);
          }
        }}
      >
        停止
      </button>
      <button
        className="btn-solid"
        onClick={async () => {
          if (MediaRecorderInstance && audioCtx) {
            await setAudioElement(createAudioElement(audioChunks));
            const audioElementSrc = createAudioElement(audioChunks);
            if (audioElementSrc) {
              replayAudio(audioCtx, audioElementSrc);
            }
          }
        }}
      >
        再生
      </button>
    </div>
  );
}

declare global {
  interface Window {
    AudioContext: typeof AudioContext;
    webkitAudioContext: typeof AudioContext;
  }
}

async function getAudio() {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  // Audioコンテキストを作成する
  const audioCtx = new AudioContext();
  // マイクから音声を取得する
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const input = audioCtx.createMediaStreamSource(stream);
  // 音声の解析を行うAnalyserNodeを作成する
  const analyzer = audioCtx.createAnalyser();
  // マイクからの入力をAnalyserNodeに繋げる
  // input.connect(analyzer);
  input.connect(audioCtx.destination);
}

function replayAudio(AudioCtx: AudioContext, AudioElement: HTMLAudioElement) {
  // 出力につなげる

  const source = AudioCtx.createMediaElementSource(AudioElement);
  source.connect(AudioCtx.destination);

  AudioElement.play();
}

async function createMediaRecoderInstance(
  setChunks: React.Dispatch<React.SetStateAction<[Blob] | null>>
): Promise<any> {
  return new Promise((resolve, reject) => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream: MediaStream) => {
        const mediarecorderInstance = new MediaRecorder(stream);
        mediarecorderInstance.addEventListener("dataavailable", async (e) => {
          await setChunks([e.data]);
        });
        // recorder.stopが実行された時のイベント
        mediarecorderInstance.addEventListener("stop", function () { });
        resolve(mediarecorderInstance);
      })
      .catch((e) => {
        alert("このブラウザではアプリを使用できません");
      });
  });
}

function startRecording(MediaRecorderInstance: MediaRecorder) {
  if (MediaRecorderInstance.state === "recording") {
    return;
  }
  MediaRecorderInstance.start();
}

function stopRecording(MediaRecorderInstance: MediaRecorder) {
  MediaRecorderInstance.stop();
}

function createAudioElement(audioChunks: [Blob] | null) {
  if (audioChunks == null) {
    return;
  }

  const audio = document.createElement("audio");
  const blob = new Blob(audioChunks, { type: "audio/ogg; codecs=opus" });
  const audioURL = URL.createObjectURL(blob);
  audio.src = audioURL;
  return audio;
}
