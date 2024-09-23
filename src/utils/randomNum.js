import { MissionUtils } from '@woowacourse/mission-utils'

const randomNum = () => {
	const arr = []
	while (arr.length < 3) {
		const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9)

		let overlap = arr.indexOf(String(randomNumber))

		if (overlap === -1) {
			arr.push(String(randomNumber))
		}
	}

	return arr
}
export default randomNum
