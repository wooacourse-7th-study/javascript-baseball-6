import { MissionUtils } from "@woowacourse/mission-utils";
import generateRandomNum from "./utils/generateRandomNum.js";
import { isInputValid, isEndInputValid } from "./utils/validation.js";
import { getResult, printResult } from "./utils/getResult.js";

class BaseballGame {
  #COMPUTER_NUM_LEN = 3;
  #ComputerNums;
  #UserNums;

  setComputerNums(nums) {
    this.#ComputerNums = nums;
  }

  setUserNums(input) {
    isInputValid(input, this.#COMPUTER_NUM_LEN);
    this.#UserNums = input.split("").map(Number);
  }

  /**
   * 게임의 전체 진행을 위한 메서드입니다.
   */
  async runGame() {
    this.startGame();
    await this.playGame();
    await this.endGame();
  }

  /**
   * 게임 시작을 위한 메서드입니다.
   * 게임 시작 멘트를 출력하며, 컴퓨터의 숫자 3개를 정합니다.
   */
  startGame() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.setComputerNums(generateRandomNum({ min: 1, max: 9, length: this.#COMPUTER_NUM_LEN }));
  }

  /**
   * 게임 플레이를 위한 메서드입니다.
   * 값을 입력 받고, 받은 값의 유효성 체크와 결과를 출력합니다.
   */
  async playGame() {
    let isUserWin = false;
    while (!isUserWin) {
      const userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

      this.setUserNums(userInput);

      const { strike, ball } = getResult({
        computerNums: this.#ComputerNums,
        userNums: this.#UserNums,
      });
      printResult({ strike, ball });
      if (strike === 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        isUserWin = true;
      }
    }
  }

  /**
   * 게임 종료를 위한 메서드입니다.
   * 재시작과 완전한 종료로 나뉩니다.
   */
  async endGame() {
    const userInput = await MissionUtils.Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n"
    );
    isEndInputValid(userInput);
    if (userInput === "1") await this.runGame();
    else MissionUtils.Console.print("게임이 종료되었습니다.");
  }
}
export default BaseballGame;
