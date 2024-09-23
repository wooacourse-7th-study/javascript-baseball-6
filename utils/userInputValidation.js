import { MissionUtils } from "@woowacourse/mission-utils";
import { VALIDATION_MESSAGES, RULES } from "../constants/messages.js";
/**
 * 숫자의 유효성을 검사한다.
 * 1. 숫자인지
 * 2. 세자리 수
 * 3. 중복인지
 * @param {유저가 입력한 숫자} userNum
 */
const userInputValidation = (userNum) => {
  if (isNaN(userNum)) {
    throw new Error(VALIDATION_MESSAGES.ONLY_NUMBER);
  }
  if (isLengthValid(userNum, RULES.NUM_LENGTH)) {
    throw new Error(VALIDATION_MESSAGES.THREE_LENGTH);
  }
  if (isDuplicate(userNum)) {
    throw new Error(VALIDATION_MESSAGES.DUPLICATE);
  }
};

/**
 * 숫자의 길이가 유효한지 검사하는 함수
 * @param {검사하고자 하는 숫자} num
 * @param {길이} len
 * @returns boolean
 */
const isLengthValid = (num, len) => {
  if (num.length === len) {
    return false;
  } else {
    return true;
  }
};

/**
 * 중복된 수가 있는지 검사
 * @param {검사하고자 하는 숫자} num
 * @returns boolean
 */
const isDuplicate = (num) => {
  const digits = Array.from(String(num), Number);
  const set = new Set(digits);
  return set.size !== digits.length;
};

export default userInputValidation;
