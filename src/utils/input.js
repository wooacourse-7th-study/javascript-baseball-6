import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_VALUE_LENGTH, MESSAGE, VALIDATION } from "../constants/index.js";
import { isInputValueLengthValid, isInputValueDuplicate } from "./validation.js";

export const getUserInput = async () => {
  try {
    const userInput = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT);

    // 숫자인지 체크
    if (isNaN(userInput)) {
      throw new Error(VALIDATION.ONLY_NUMBER_MESSAGE);
    }

    // 인풋 길이(3) 체크
    if (isInputValueLengthValid(userInput, INPUT_VALUE_LENGTH)) {
      throw new Error(VALIDATION.THREE_LENGTH_MESSAGE);
    }

    // 중복 체크
    if (isInputValueDuplicate(userInput)) {
      throw new Error(VALIDATION.DUPLICATE_MESSAGE);
    }

    return userInput;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getRestartInput = async () => {
  try {
    const userInput = await MissionUtils.Console.readLineAsync("");

    // 1, 2가 아닌 경우
    if (userInput !== "1" && userInput !== "2") {
      throw new Error(VALIDATION.RESTART_INPUT_MESSAGE);
    }

    return userInput;
  } catch (error) {
    throw new Error(error.message);
  }
};
