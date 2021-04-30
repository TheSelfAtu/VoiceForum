import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {AudioData} from "../organisms/AudioData"
export function PostMessage(): JSX.Element {

  return (
    <div className="flexbox--column">
      <AudioData></AudioData>
      {/* エフェクターを選ぶ画面へ移動 */}
      <Link to="/select-effecter">エフェクターを選択</Link>
    </div>
  );
}

