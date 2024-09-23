import { MissionUtils } from '@woowacourse/mission-utils'
import App from '../App.js'
import { MESSAGE } from '../constants/message.js'

const restartGame = async () => {
	const input = await MissionUtils.Console.readLineAsync(MESSAGE.RESTART)

	if (input === '1') {
		const newApp = new App()
		return newApp.play()
	} else if (input === '2') {
		return
	} else {
		throw new Error('[ERROR]')
	}
}
export default restartGame
