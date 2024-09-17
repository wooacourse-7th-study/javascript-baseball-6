import { MissionUtils } from "@woowacourse/mission-utils";
import {
  INPUT_MESSAGE,
  ONLY_NUMBER_MESSAGE,
  OVER_MAX_LENGTH_MESSAGE,
  DUPLICATE_MESSAGE,
  INPUT_VALUE_MAX_LENGTH,
  RESTART_INPUT_MESSAGE,
} from "../constants/index.js";
import { isInputValueLengthValid, isInputValueDuplicate } from "./validation.js";

export const getUserInput = async () => {
  try {
    const userInput = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);

    // 숫자인지 체크
    if (isNaN(userInput)) {
      throw new Error(ONLY_NUMBER_MESSAGE);
    }

    // 인풋 길이 체크
    if (isInputValueLengthValid(userInput, INPUT_VALUE_MAX_LENGTH)) {
      throw new Error(OVER_MAX_LENGTH_MESSAGE);
    }

    // 중복 체크
    if (isInputValueDuplicate(userInput)) {
      throw new Error(DUPLICATE_MESSAGE);
    }

    return userInput;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getRestartInput = async () => {
  try {
    const userInput = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);

    if (userInput !== "1" && userInput !== "2") {
      throw new Error(RESTART_INPUT_MESSAGE);
    }

    if (userInput === "2") {
      throw new Error();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
