export const getBaseballCount = (computer, user) => {
  let strike = 0;
  let ball = 0;
  let nothing = false;

  // 3스트라이크 early return
  if (computer === user) {
    strike = 3;
    return { strike, ball, nothing };
  }

  // 카운트
  for (let i = 0; i < computer.length; i++) {
    if (computer[i] === user[i]) {
      strike++;
      continue;
    }

    const computerArray = [...computer];
    const userArray = [...user];

    if (computerArray.includes(userArray[i])) {
      ball++;
    }
  }

  // 낫싱 체크
  if (strike === 0 && ball === 0) {
    nothing = true;
  }

  return { strike, ball, nothing };
};

export const checkThreeStrike = (strike) => strike === 3;
