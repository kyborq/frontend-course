import { hello } from "./component";

import "./main.css";
import "./other.css";

const greetings = hello("Peter");
alert(greetings);

document.body.innerHTML += "<p>This is js generated content!</p>";
