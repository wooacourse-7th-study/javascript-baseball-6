import { MissionUtils } from "@woowacourse/mission-utils";
import { generateRandomNum } from "./utils/generateRandomNum.js";
import { isInputValid, isEndInputValid } from "./utils/validation.js";
import { getResult, printResult } from "./utils/getResult.js";

class BaseballGame {
  #COMPUTER_NUM_LEN = 3;
  #ComputerNums;
  #UserNums;

  setComputerNums(nums) {
    this.#ComputerNums = nums;
  }

  setUserNums(nums) {
    isInputValid(nums, this.#COMPUTER_NUM_LEN);
    this.#UserNums = nums.split("").map((str) => Number(str));
  }

  /**
   * 게임의 전체 진행을 위한 메서드입니다.
   */
  async runGame() {
    await this.startGame();
    await this.playGame();
    await this.endGame();
  }

  /**
   * 게임 시작을 위한 메서드입니다.
   * 게임 시작 멘트를 출력하며, 컴퓨터의 숫자 3개를 정합니다.
   */
  async startGame() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.setComputerNums(await generateRandomNum(1, 9, this.#COMPUTER_NUM_LEN));
  }

  /**
   * 게임 플레이를 위한 메서드입니다.
   * 값을 입력 받고, 받은 값의 유효성 체크와 결과를 출력합니다.
   */
  async playGame() {
    let isUserWin = false;
    while (!isUserWin) {
      const USER_INPUT = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

      this.setUserNums(USER_INPUT);

      const { strike, ball } = await getResult({
        computerNums: this.#ComputerNums,
        userNums: this.#UserNums,
      });
      await printResult({ strike, ball });
      if (strike === 3) {
        await MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        isUserWin = true;
      }
    }
  }

  /**
   * 게임 종료를 위한 메서드입니다.
   * 재시작과 완전한 종료로 나뉩니다.
   */
  async endGame() {
    const USER_INPUT = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n"
    );
    isEndInputValid(USER_INPUT);
    if (USER_INPUT === "1") await this.runGame();
    else await MissionUtils.Console.print("게임이 종료되었습니다.");
  }
}
export default BaseballGame;
