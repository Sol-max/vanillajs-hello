/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let rWho = who[Math.floor(Math.random() * who.length)];
  let rAction = action[Math.floor(Math.random() * action.length)];
  let rWhat = what[Math.floor(Math.random() * what.length)];
  let rWhen = when[Math.floor(Math.random() * when.length)];

  let excuse = rWho + " " + rAction + " " + rWhat + " " + rWhen;

  document.getElementById("excuse").innerHTML = excuse;
};
