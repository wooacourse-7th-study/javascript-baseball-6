import { RULES } from "../constants/messages.js";
const compareToNumber = (comNum, userNum) => {
  const arr = [0, 0]; // 볼 , 스트라이크

  if (comNum === userNum) {
    arr[0] = 3;
    return arr;
  }

  for (let i = 0; i < RULES.NUM_LENGTH; i++) {
    if (comNum[i] === userNum[i]) {
      arr[0]++;
      continue;
    }

    if (comNum.includes(userNum[i])) {
      arr[1]++;
    }
  }
  return arr;
};

export default compareToNumber;