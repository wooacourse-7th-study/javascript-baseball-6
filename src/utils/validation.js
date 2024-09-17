export const isInputValueDuplicate = (userInput) => {
  const set = new Set([...userInput]);
  return set.size !== userInput.length;
};

export const isInputValueLengthValid = (userInput, maxLength) => {
  return userInput.length > maxLength;
};
