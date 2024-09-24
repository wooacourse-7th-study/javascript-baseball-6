/**
 * 사용자의 입력값이 유효한지 확인합니다.
 * @param {string} numString - 입력 받은 문자열
 * @param {number} length - 입력 받아야 하는 문자열의 길이
 * return 값은 없으며, 유효하지 않을 경우 throw 문을 통해 예외를 발생시키고 프로그램을 종료합니다.
 */
export function isInputValid(numString, length) {
  if (numString.length !== length) {
    throw new Error(`[ERROR] 입력한 값이 ${length} 자리가 아닙니다.`);
  }
  if (isNaN(numString)) {
    throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
  }
}

/**
 * 게임 재시작을 묻는 질문에 대한 입력값이 유효한지 확인합니다.
 * @param {string} numString - 입력 받은 문자열
 * return 값은 없으며, 유효하지 않을 경우 throw 문을 통해 예외를 발생시키고 프로그램을 종료합니다.
 */
export function isEndInputValid(numString) {
  if (numString !== "1" && numString !== "2")
    throw new Error("[ERROR] 입력하신 값이 유효하지 않습니다.");
}
