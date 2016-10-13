export class Interface {
  static list(Task){
    Task.findAll().then((task, err) => {
      for(var i = 0 ; i < task.length ; i++){
        console.log(`${task[i].dataValues.id}. [ ${task[i].dataValues.status === true ? 'X' : ''} ] ${task[i].dataValues.content}`);
      }
    })
  }

  static help(){
      console.log("---------------------");
      console.log("1. node todo.js help ");
      console.log("2. node todo.js add <task_content>");
      console.log("3. node todo.js task <task_id>");
      console.log("4. node todo.js delete <task_id> ");
      console.log("5. node todo.js complete <task_id>");
      console.log("6. node todo.js uncomplete <task_id");
      console.log("7. node todo.js list");
      console.log("------------------------------");
  }

  static printTask(Task,id){
    Task.findOne({
      where:{
        id : id
      }
    }).then((data)=>{
      console.log(`Task_id : ${data.dataValues.id} status: [ ${data.dataValues.status == true ? 'x' : ''} ]  content :${data.dataValues.content}`)
    })
  }



}
