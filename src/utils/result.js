import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, COUNT_TEXT } from "../constants/index.js";

export const resultPrint = (strike, ball, nothing) => {
  // nothing early return
  if (nothing) {
    MissionUtils.Console.print(COUNT_TEXT.NOTHING);
    return;
  }

  // 3strike early return
  if (strike === 3) {
    MissionUtils.Console.print(`3${COUNT_TEXT.STRIKE}`);
    MissionUtils.Console.print(MESSAGE.THREE_STRIKE);
    MissionUtils.Console.print(MESSAGE.RESTART);
    return;
  }

  // only strike early return
  if (ball === 0) {
    MissionUtils.Console.print(strike + COUNT_TEXT.STRIKE);
    return;
  }

  MissionUtils.Console.print(`${ball + COUNT_TEXT.BALL} ${strike + COUNT_TEXT.STRIKE}`);
};
