export function isInputValid(numString, length) {
  const INPUT_NUMS = numString.split("");
  if (INPUT_NUMS.length !== length) {
    throw new Error(`[ERROR] 입력한 값이 ${length} 자리가 아닙니다.`);
  }
  for (let num of INPUT_NUMS) {
    if (isNaN(num)) {
      throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
    }
  }
}

export function isEndInputValid(numString) {
  if (numString !== "1" && numString !== "2")
    throw new Error("[ERROR] 입력하신 값이 유효하지 않습니다.");
}
