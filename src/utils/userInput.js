import { MissionUtils } from '@woowacourse/mission-utils'
import { Validation } from './validation.js'
import { message } from '../const/message.js'

export const userInput = async () => {
	const userInputNum = await MissionUtils.Console.readLineAsync(message.INPUT)

	Validation(userInputNum)

	return userInputNum
}
