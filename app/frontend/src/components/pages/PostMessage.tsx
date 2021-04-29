import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "../atoms/Button";
export function PostMessage(): JSX.Element {
  return (
    <div className="flexbox--column">
      <button className="recording-btn btn--circle btn--shadow position--relative">
        <img
          src="/static/image/mic_black_24dp.svg"
          className="size--icon position--center"
        ></img>
      </button>
      <button
        className="btn-solid"
        onClick={() => {
          getAudio();
        }}
      >
        録音スタート
      </button>
      {/* 再生ボタン */}
      <button
        className="btn-solid"
        onClick={() => {
          getAudio();
        }}
      >
        再生
      </button>
      {/* エフェクターを選ぶ画面へ移動 */}
      <Link to="/select-effecter">エフェクターを選択</Link>
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
  console.log(stream, audioCtx);
  const input = audioCtx.createMediaStreamSource(stream);
  // 音声の解析を行うAnalyserNodeを作成する
  const analyzer = audioCtx.createAnalyser();
  // マイクからの入力をAnalyserNodeに繋げる
  input.connect(analyzer);
}
