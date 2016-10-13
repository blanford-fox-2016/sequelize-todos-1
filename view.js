"use strict"

class System{
 static mainMenu(){
   console.log(`=======================================`);
   console.log(`            Welcome to Todo js`);
   console.log(`=======================================`);
   console.log(`Type following sentence to get start : `);
   console.log(`$ node todo.js help`);
   console.log(`$ node todo.js list`);
   console.log(`$ node todo.js add (type new task)`);
   console.log(`$ node todo.js task (type spesific task id)`);
   console.log(`$ node todo.js delete (type spesific task id)`);
   console.log(`$ node todo.js complete (type spesific task id)`);
   console.log(`$ node todo.js uncomplete (type spesific task id)`);
   console.log(`$ node todo.js list:outstanding`);
   console.log(`$ node todo.js list:outstanding asc`);
   console.log(`$ node todo.js list:outstanding desc`);
   console.log(`$ node todo.js list:completed`);
   console.log(`$ node todo.js tag (type spesific task id) (write tags)`);
   console.log(`$ node todo.js filter (type filter)`);
 }

 static help(){
   console.log(`=======================================`);
   console.log(`            Welcome to Todo js`);
   console.log(`=======================================`);
   console.log(`========================== Help Menu ===================`);
   console.log(`$ node todo.js help >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> to view help`);
   console.log(`$ node todo.js list >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> to see all task`);
   console.log(`$ node todo.js add (type new task) >>>>>>>>>>>>>>>>>>>>> to add new task`);
   console.log(`$ node todo.js task (type spesific task id) >>>>>>>>>>>> to see selected task`);
   console.log(`$ node todo.js delete (type spesific task id) >>>>>>>>>> to delete selected task`);
   console.log(`$ node todo.js complete (type spesific task id) >>>>>>>> to see completed task`);
   console.log(`$ node todo.js uncomplete (type spesific task id) >>>>>> to see uncomplete task`);
   console.log(`$ node todo.js list:outstanding >>>> to sort uncompleted task by created date`);
   console.log(`$ node todo.js list:outstanding asc >>>> to sort uncompleted task by created date (ascending)`);
   console.log(`$ node todo.js list:outstanding desc >>>> to sort uncompleted task by created date (descending)`);
   console.log(`$ node todo.js list:completed >>>> to sort completed task by created date`);
   console.log(`$ node todo.js tag (type spesific task id) (type tags) >>>>>> to add custom tags`);
   console.log(`$ node todo.js filter (type filter) >>>>> to sort task by filter`);
 }
}

export default System
