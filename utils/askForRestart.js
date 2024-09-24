import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../constants/messages.js";

/**
 * 사용자에게 재시작 or 종료를 묻는 함수
 * @returns boolean
 */
const askForRestart = async () => {
  const restart = await MissionUtils.Console.readLineAsync(
    GAME_MESSAGES.RESTART
  );

  if (restart === "1") {
    return true;
  }
  if (restart === "2") {
    return false;
  }
};

export default askForRestart;
