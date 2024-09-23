// 게임 기본 출력 메시지
export const GAME_MESSAGES = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  END: "게임을 종료합니다.",
  THREE_STRIKE: "3개의 숫자를 모두 맞히셨습니다! 게임종료",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

//유효성 검사 메시지
export const VALIDATION_MESSAGES = {
  THREE_LENGTH: "[ERROR] 세 자리의 숫자만 입력 가능합니다.",
  ONLY_NUMBER: "[ERROR] 숫자만 입력 가능합니다.",
  DUPLICATE: "[ERROR] 중복된 숫자가 있습니다.",
  RESTART_INPUT: "[ERROR] 1 또는 2만 입력 가능합니다.",
};

// 규칙
export const RULES = {
  INPUT_LENGTH: 3,
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
};

// 결과
export const RESULT = {
  NOTHING: "낫싱",
  STRIKE: "스트라이크",
  BALL: "볼",
};
