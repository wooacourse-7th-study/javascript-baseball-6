export const isInputValueDuplicate = (userInput) => {
  const set = new Set([...userInput]); // 중복 제거
  return set.size !== userInput.length;
};

export const isInputValueLengthValid = (userInput, length) => {
  return userInput.trim().length !== length;
};
