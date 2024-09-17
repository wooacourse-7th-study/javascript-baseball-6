import { init } from "./utils/index.js";

class App {
  async play() {
    const computerNumber = init();
  }
}

const app = new App();
app.play();

export default App;
