export const getBaseballCount = (computer, user) => {
  let strike = 0;
  let ball = 0;

  // 3strike early return
  if (computer === user) {
    strike = 3;
    return { strike, ball };
  }

  // 카운트
  for (let i = 0; i < computer.length; i++) {
    if (computer[i] === user[i]) {
      strike++;
      continue;
    }

    if (computer.includes(user[i])) {
      ball++;
    }
  }

  return { strike, ball };
};
