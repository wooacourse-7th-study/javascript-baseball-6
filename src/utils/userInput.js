import { MissionUtils } from '@woowacourse/mission-utils'
import userInputValidate from './userInputValidate.js'
import { MESSAGE } from '../constants/message.js'

const userInput = async () => {
	const userInputNum = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT)

	userInputValidate(userInputNum)

	return userInputNum
}
export default userInput
