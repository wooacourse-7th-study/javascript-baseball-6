import { MissionUtils } from "@woowacourse/mission-utils";

/**
 * 컴퓨터의 숫자와 플레이어의 숫자를 비교하여 스트라이크와 볼을 얻어냅니다.
 * @param {Object} params
 * @param {number[]} params.computerNums - 컴퓨터의 숫자 배열
 * @param {number[]} params.userNums - 플레이어가 입력한 숫자 배열
 * @returns {{ strike: number, ball: number }} - 스트라이크와 볼 개수
 */
export async function getResult({ computerNums, userNums }) {
  let strike = 0;
  let ball = 0;
  const ARR_LENGTH = Math.min(computerNums.length, userNums.length);

  for (let i = 0; i < ARR_LENGTH; i++) {
    for (let j = 0; j < ARR_LENGTH; j++) {
      if (i === j && computerNums[i] === userNums[j]) strike++;
      if (i !== j && computerNums[i] === userNums[j]) ball++;
    }
  }
  return { strike, ball };
}

/**
 * 스트라이크와 볼 개수를 가지고 결과를 출력합니다.
 * @param {Object} params
 * @param {number} params.strike - 스트라이크 개수
 * @param {number} params.ball - 볼 개수
 */
export async function printResult({ strike, ball }) {
  if (strike === 0 && ball === 0) await MissionUtils.Console.print("낫싱");
  else if (strike === 0) await MissionUtils.Console.print(`${ball}볼`);
  else if (ball === 0) await MissionUtils.Console.print(`${strike}스트라이크`);
  else await MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
}
