import { MissionUtils } from "@woowacourse/mission-utils";

/**
 * 컴퓨터가 숫자야구게임의 정답이 될 숫자를 선택한다.
 * @param {number} min - 컴퓨터가 선택할 수 있는 최솟값
 * @param {number} max - 컴퓨터가 선택할 수 있는 최댓값
 * @param {number} length - 컴퓨터가 선택하는 수의 개수
 * @returns {number[]} 컴퓨터가 선택한 수의 배열
 */
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
