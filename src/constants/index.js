// game
export const MESSAGE = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  THREE_STRIKE: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  END: "게임을 종료합니다.",
});

// validation
export const VALIDATION = Object.freeze({
  THREE_LENGTH_MESSAGE: "[ERROR] 세 자리의 숫자만 입력 가능합니다.",
  ONLY_NUMBER_MESSAGE: "[ERROR] 숫자만 입력 가능합니다.",
  DUPLICATE_MESSAGE: "[ERROR] 중복된 숫자가 있습니다.",
  RESTART_INPUT_MESSAGE: "[ERROR] 1 또는 2만 입력 가능합니다.",
});

// count
export const COUNT_TEXT = Object.freeze({
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
});

// number
export const INPUT_VALUE_LENGTH = 3;
export const MIN_NUMBER = 1;
export const MAX_NUMBER = 9;
