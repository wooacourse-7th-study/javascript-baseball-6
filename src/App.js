import { MissionUtils } from '@woowacourse/mission-utils'
import {
	resultStrikeBall,
	userInput,
	randomNum,
	restartGame,
} from './utils/index.js'
import { MESSAGE } from './constants/message.js'
class App {
	async play() {
		//시작
		MissionUtils.Console.print(MESSAGE.START)

		const randomArr = randomNum()

		while (true) {
			//사용자 입력
			const userInputNumber = await userInput()

			//컴퓨터 결과 출력
			const { strike, ball } = resultStrikeBall(randomArr, userInputNumber)

			if (strike === 3) {
				MissionUtils.Console.print('3' + MESSAGE.STRIKE)
				MissionUtils.Console.print(MESSAGE.END)
				break
			}

			if (strike > 0 && ball === 0) {
				MissionUtils.Console.print(strike + MESSAGE.STRIKE)
			}
			if (ball > 0 && strike === 0) {
				MissionUtils.Console.print(ball + MESSAGE.BALL)
			}
			if (ball > 0 && strike > 0) {
				MissionUtils.Console.print(
					ball + MESSAGE.BALL + ' ' + strike + MESSAGE.STRIKE,
				)
			}
			if (ball === 0 && strike === 0) {
				MissionUtils.Console.print(MESSAGE.NOTHING)
			}
		}

		//재시작 유무
		await restartGame()
	}
}

const app = new App()
app.play()

export default App
