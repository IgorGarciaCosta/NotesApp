//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],

    getTasksToDo() {//arrow functions are bad for methods
        // this.tasks.forEach(task => {//MY VERSION
        //     if(!task.completed){
        //         console.log('Incomplete Task: ' + task.text)
        //     }
        // })

        return this.tasks.filter((task) => task.completed === false)//IDEAL VERSION
    }
}

console.log(tasks.getTasksToDo())