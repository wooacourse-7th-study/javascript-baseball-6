import { MissionUtils } from '@woowacourse/mission-utils'

const randomNum = () => {
	const arr = []
	while (arr.length < 3) {
		const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9)

		let overlap = arr.includes(String(randomNumber))

		if (!overlap) {
			arr.push(String(randomNumber))
		}
	}

	return arr
}
export default randomNum
