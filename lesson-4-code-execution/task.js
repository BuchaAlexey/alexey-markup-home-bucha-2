function isEmpty(obj) {
    var counter = 0;
    for (var key in obj) {
      counter++;
    }
    return counter == 0 ? true : false;
  }

  var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
  },
    maxTasksCompleted = 0, name;
  if (isEmpty(tasksCompleted)) alert('Нет сотрудников');
  else for (var key in tasksCompleted) {
    if (tasksCompleted[key] > maxTasksCompleted) {
      maxTasksCompleted = tasksCompleted[key];
      name = key
    }
  }

  module.exports = {
    isEmpty,
  };
//   alert(name);
