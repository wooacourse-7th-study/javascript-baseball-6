import { RULES } from "../constants/messages.js";
const getBaseballCount = (computerNumber, userNum) => {
  const arr = [0, 0]; // 볼 , 스트라이크

  if (computerNumber === userNum) {
    arr[0] = 3;
    return arr;
  }

  for (let i = 0; i < RULES.NUMBER_MAX_LENGTH; i++) {
    if (computerNumber[i] === userNum[i]) {
      arr[0]++;
      continue;
    }

    if (computerNumber.includes(userNum[i])) {
      arr[1]++;
    }
  }
  return arr;
};

export default getBaseballCount;
