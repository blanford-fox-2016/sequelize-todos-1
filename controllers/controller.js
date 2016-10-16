let models = require('../models');
let Todo = models.Todo;

export class Controller {
  constructor() {

  }
  read() {
    return Todo.list();
  }

  add(act) {
    Todo.create({
      completed: 0,
      activity: act
    })
  }
  setComplete(act_id) {
      Todo.update({
        completed: 1,
      },  {
        where: {
          id: act_id
        }
      })
  }

  unComplete(act_id) {
    Todo.update({
      completed: 0,
    },  {
      where: {
        id: act_id
      }
    })
  }
  destroyAct(act_id) {
    Todo.destroy({
      where: {
        id: act_id
      }
    })

  }
}
