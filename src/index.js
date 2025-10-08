import "./styles.css";
import { randomGifFunc } from "./randomBtn";
import { catOnStartUp } from "./randomCat";
import { createFrontUi } from "./frontUiHtml";
import { searchForGif } from "./searchFormValidation";
createFrontUi();
catOnStartUp();
randomGifFunc();
searchForGif();
