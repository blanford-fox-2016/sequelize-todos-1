
class View {
  constructor() {

  }

  static printHelp() {
    console.log("============HELP============\n");
    console.log("node todo.js #will call help");
    console.log("node todo.js help");
    console.log("node todo.js list");
    console.log("node todo.js add <task_content>");
    console.log("node todo.js delete <task_id>");
    console.log("node todo.js completed <task_id>");
    console.log("node todo.js uncompleted <task_id>");
  }
}

export default View
