import { MissionUtils } from '@woowacourse/mission-utils'
import { MESSAGE } from '../constants/message.js'

const restartGame = async () => {
	const input = await MissionUtils.Console.readLineAsync(MESSAGE.RESTART)

	if (input === '1') {
		return true
	} else if (input === '2') {
		return false
	} else {
		throw new Error('[ERROR]')
	}
}
export default restartGame
