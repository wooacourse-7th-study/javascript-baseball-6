const userInputValidate = input => {
	//숫자인지 확인
	if (isNaN(input)) {
		throw new Error('[ERROR]')
	}

	//길이 3글자 확인
	if (input.trim().length !== 3) {
		throw new Error('[ERROR]')
	}

	//0을 포함하는지 확인
	if (input.includes('0')) {
		throw new Error('[ERROR]')
	}

	//중복 확인
	const set = new Set(input)
	if (input.length !== set.size) {
		throw new Error('[ERROR]')
	}

	return
}
export default userInputValidate
