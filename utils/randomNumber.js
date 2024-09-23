import { MissionUtils } from "@woowacourse/mission-utils";
import { RULES } from "../constants/messages.js";

/**
 * 컴퓨터 숫자 3개를 랜덤하게 return 한다.(숫자의 중복 없음)
 */
const randomNumber = () => {
  const set = new Set();

  while (set.size < RULES.NUM_LENGTH) {
    const randomNum = MissionUtils.Random.pickNumberInRange(
      RULES.MIN_NUMBER,
      RULES.MAX_NUMBER
    );
    set.add(randomNum);
  }

  return Array.from(set);
};

export default randomNumber;
