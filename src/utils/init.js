import { MissionUtils } from "@woowacourse/mission-utils";
import { MIN_NUMBER, MAX_NUMBER } from "../constants/index.js";

export const init = () => {
  const computer = [];
  const hash = {};

  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);

    if (hash[number] === undefined) {
      computer.push(number);
      hash[number] = true;
    }
  }

  return computer;
};
