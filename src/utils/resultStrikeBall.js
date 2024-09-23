const resultStrikeBall = (computerRandom, userInputNumber) => {
	let strike = 0
	let ball = 0

	for (let i = 0; i < computerRandom.length; i++) {
		if (computerRandom[i] === userInputNumber[i]) {
			strike++
		} else {
			if (computerRandom.find(el => el === userInputNumber[i])) {
				ball++
			}
		}
	}

	return { strike, ball }
}
export default resultStrikeBall
