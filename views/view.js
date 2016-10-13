import { Controller } from "../controllers/controller.js";
let controller = new Controller();

export class View {
  help() {
    console.log("=== SEQUELIZE TO-DO-LIST === \n");
    console.log("'node todo.js help' - for help");
    console.log("'node todo.js list' - to show all of to-do list");
    console.log("'node todo.js add <task_content>' - to add new task content");
    console.log("'node todo.js delete <task_id>' - to delete a task");
    console.log("'node todo.js complete <task_id>' - to mark a task as a completed task");
    console.log("'node todo.js uncomplete <task_id>' - to mark a task as a uncompleted task");
  }
  display(){
    controller.read();
  }
}
