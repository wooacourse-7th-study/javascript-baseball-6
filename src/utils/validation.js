export const isInputValueDuplicate = (userInput) => {
  const set = new Set([...userInput]);
  return set.size !== userInput.length;
};

export const isInputValueLengthValid = (userInput, length) => {
  return userInput.length !== length;
};
