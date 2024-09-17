import { MissionUtils } from "@woowacourse/mission-utils";
import { MIN_NUMBER, MAX_NUMBER, START_MESSAGE } from "../constants/index.js";

export const init = () => {
  let computer = "";
  const hash = {};

  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);

    // 중복 체크
    if (hash[number]) {
      continue;
    }

    computer += number;
    hash[number] = true;
  }

  MissionUtils.Console.print(START_MESSAGE);
  return Number(computer);
};
