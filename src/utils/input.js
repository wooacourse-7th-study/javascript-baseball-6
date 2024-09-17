import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/index.js";

export const getUserInput = async () => {
  try {
    const userInput = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);
    return userInput;
  } catch (error) {}
};
