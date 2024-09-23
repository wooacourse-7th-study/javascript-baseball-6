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
			if (ball === 0 && strike === 0) {
				MissionUtils.Console.print(MESSAGE.NOTHING)
				continue
			}

			if (ball === 0) {
				MissionUtils.Console.print(strike + MESSAGE.STRIKE)
				continue
			}
			if (strike === 0) {
				MissionUtils.Console.print(ball + MESSAGE.BALL)
				continue
			}
			MissionUtils.Console.print(
				ball + MESSAGE.BALL + ' ' + strike + MESSAGE.STRIKE,
			)
		}

		//재시작 유무
		const isRestart = await restartGame()
		if (isRestart) {
			const app = new App()
			app.play()
		}
	}
}

const app = new App()
app.play()

export default App
