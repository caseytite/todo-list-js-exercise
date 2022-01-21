// with these arrays we are keepin track of task states

function newTask(title, desc) {
  //
  const task = {
    title: title,
    description: desc,
    complete: false,
    logState() {
      console.log(
        `${this.title} has ${this.complete ? " " : " not"} been completed`
      );
    },
    markCompleted() {
      this.complete = true;
    },
  };
  return task;
}

const task1 = newTask("Chop firewood", "Split enough for the rest of the year");
const task2 = newTask(
  "Get motorcycle ready for riding season",
  "Oil change, Coolant check, Charge battery"
);
const task3 = newTask("Get bigger diapers for Owen", "Size 2 already!!!");

const tasks = [task1, task2, task3];

// console.log(tasks);

// console.log(tasks);
console.log(task2.markCompleted());
console.log(tasks);
