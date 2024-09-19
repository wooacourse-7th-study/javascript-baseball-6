import { MissionUtils } from "@woowacourse/mission-utils";

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

export async function printResult({ strike, ball }) {
  if (strike === 0 && ball === 0) await MissionUtils.Console.print("낫싱");
  else if (strike === 0) await MissionUtils.Console.print(`${ball}볼`);
  else if (ball === 0) await MissionUtils.Console.print(`${strike}스트라이크`);
  else await MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
}
