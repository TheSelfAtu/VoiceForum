import React from "react";

export function SoundList(): JSX.Element {
  return (
    <div>
      <button onClick={() => {
        synthesizser(0)
      }}>button</button>
    </div>

  )
}


function synthesizser(playbackTime: number) {
  var t0 = playbackTime;
  var t1 = t0 + tdur(180, 16);
  var t2 = t0 + tdur(180, 4) * 3;
  var si = mtof(83);
  var mi = mtof(88);
  var audioContext = new AudioContext();
  var oscillator = audioContext.createOscillator();
  var gain = audioContext.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(si, t0);
  oscillator.frequency.setValueAtTime(mi, t1);
  oscillator.start(t0);
  oscillator.stop(t2);
  oscillator.connect(gain);

  gain.gain.setValueAtTime(0.5, t0);
  gain.gain.setValueAtTime(0.5, t1);
  gain.gain.linearRampToValueAtTime(0, t2);
  gain.connect(audioContext.destination);
}

function mtof(midi: number) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}
function tdur(tempo: number, length: number) {

  return (60 / tempo) * (4 / length);
}

// function coin(playbackTime: number) {
//   var t0 = playbackTime;
//   var t1 = t0 + tdur(180, 16);
//   var t2 = t0 + tdur(180, 4) * 3;
//   var si = mtof(83);
//   var mi = mtof(88);
//   var audioContext = new AudioContext();
//   var oscillator = audioContext.createOscillator();
//   var gain = audioContext.createGain();

//   oscillator.type = "triangle";
//   oscillator.frequency.setValueAtTime(si, t0);
//   oscillator.frequency.setValueAtTime(mi, t1);
//   oscillator.start(t0);
//   oscillator.stop(t2);
//   oscillator.connect(gain);

//   gain.gain.setValueAtTime(0.5, t0);
//   gain.gain.setValueAtTime(0.5, t1);
//   gain.gain.linearRampToValueAtTime(0, t2);
//   gain.connect(audioContext.destination);
// }

// function mtof(midi: number) {
//   return 440 * Math.pow(2, (midi - 69) / 12);
// }
// function tdur(tempo: number, length: number) {

//   return (60 / tempo) * (4 / length);
// }