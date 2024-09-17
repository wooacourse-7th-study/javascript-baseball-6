import { MissionUtils } from "@woowacourse/mission-utils";
import { NOTHING_TEXT, STRIKE_TEXT, BALL_TEXT, THREE_STRIKE_MESSAGE, RESTART_MESSAGE } from "../constants/index.js";

export const resultPrint = (strike, ball, nothing) => {
  if (nothing) {
    MissionUtils.Console.print(NOTHING_TEXT);
    return;
  }

  if (strike === 3) {
    MissionUtils.Console.print(`3${STRIKE_TEXT}`);
    MissionUtils.Console.print(THREE_STRIKE_MESSAGE);
    MissionUtils.Console.print(RESTART_MESSAGE);
    return;
  }

  MissionUtils.Console.print(`${ball}${BALL_TEXT} ${strike}${STRIKE_TEXT} `);
};
