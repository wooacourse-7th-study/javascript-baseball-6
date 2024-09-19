import { MissionUtils } from "@woowacourse/mission-utils";

export async function generateRandomNum(min, max, length) {
  const COMPUTER_NUMS = [];
  while (COMPUTER_NUMS.length < length) {
    const number = await MissionUtils.Random.pickNumberInRange(min, max);
    // 중복되는 숫자 없도록 예외 처리
    if (!COMPUTER_NUMS.includes(number)) {
      COMPUTER_NUMS.push(number);
    }
  }
  return COMPUTER_NUMS;
}
