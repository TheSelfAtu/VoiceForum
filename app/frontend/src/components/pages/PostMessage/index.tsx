import React, { useEffect } from "react";
import {Button} from "../../atoms/Button"
export function PostMessage(): JSX.Element {


  return (
    <div>
      <Button description="録音" onClick={()=>getAudio()}></Button>
    </div>
  )
}

declare global {
  interface Window {
    AudioContext: typeof AudioContext;
    webkitAudioContext: typeof AudioContext;
  }
}
  
async function getAudio(){
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  // Audioコンテキストを作成する
  const audioCtx = new AudioContext();
  // マイクから音声を取得する
  const stream = await navigator.mediaDevices.getUserMedia({audio: true});
  const input  = audioCtx.createMediaStreamSource(stream);
  // 音声の解析を行うAnalyserNodeを作成する
  const analyzer = audioCtx.createAnalyser();
  // マイクからの入力をAnalyserNodeに繋げる
  input.connect(analyzer);

}

