'use strict';
import { View } from "./views/view.js";
let view = new View();

import { Controller } from "./controllers/controller.js";
let controller = new Controller();


process.argv.splice(0,2);
let cmd = process.argv.splice(0,1).join("");
let arg = process.argv.join(" ");

if (cmd == "list") {
  view.display();
}
else if (cmd == "help" || cmd == "") {
  view.help();
}
else if (cmd == "add") {
  controller.add(arg);
  console.log('Data added!');
}
else if (cmd == "delete" && isNaN(arg) == false) {
  controller.destroyAct(arg);
  console.log(`Data with id ${arg} has been deleted`);
}
else if (cmd == "complete" && isNaN(arg) == false) {
  controller.setComplete(arg);
  console.log(`Data with id ${arg} has been set to completed`);
}
else if (cmd == "uncomplete" && isNaN(arg) == false) {
  controller.unComplete(arg);
  console.log(`Data with id ${arg} has been set to uncompleted`);
}
else {
  view.help();
}
