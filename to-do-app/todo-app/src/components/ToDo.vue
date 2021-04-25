<template>
  <div class="tasks-list-example">
    <h3>Please add a task:</h3>
    <br />
    <form v-on:submit.prevent="addTask">
      <label for="new-task"></label>
      <input
        v-model="newTask"
        type="text"
        id="new-task"
      />
      <div>
        <button class="addButton" type="submit">Add Task</button>
        <button class="deleteAllTasks" v-on:click="deleteTasks">
          Delete all tasks
        </button>
      </div>
    </form>

    <div class="container mx-4 my-4">
      <ul id="border">
        <li class="title" v-for="toDo in toDos" :key="toDo.id">
          {{ toDo.title }}

          <i v-on:click="deleteOneTask" class="fas fa-trash-alt bg-red-300"></i>
          <div>
            <router-link to="/ShowToDoTasks">Show Task</router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      newTask: "",
      toDos: [],
    };
  },

  methods: {
    addTask() {
      if (this.newTask !== "") {
        this.toDos.push({
          id: this.toDos.length + 1,
          title: this.newTask,
          done: false,
        });
      }

      this.newTask = "";
    },
    deleteTasks() {
      if (confirm("Are you sure you want to delete all the tasks?")) {
        this.toDos.splice(this.newTask);
      }
    },
    deleteOneTask() {
      this.toDos.splice(this.newTask, 1);
    },
  },
};
</script>



<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  box-shadow: 0px 4px 6px -2px #000619;
}
a {
  color: #42b983;
}
i {
  cursor: pointer;
}
#card {
  border: 1px solid black;
  background-color: #ddd;
  margin-top: 20px;
}
:root {
  font-family: Arial, Helvetica, sans-serif;
}
input[type="text"] {
  font-size: 16px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
}

button {
  background: #ddd;
  border: 0px solid #ddd;
  border-radius: 8px;
  color: #000000;
  font-size: 18px;
  padding: 8px 20px;
  margin-left: 5px;
  margin-top: 30px;
  cursor: pointer;
}
.deleteAllTasks {
  background: tomato;
  border-radius: 8px;
  color: #000000;
  font-size: 18px;
  padding: 8px 20px;
  margin-left: 5px;
  margin-top: 30px;
  cursor: pointer;
}

button:hover {
  background: #3cb0fd;
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
}
i:hover {
  color: red;
}
#border {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin-top: 20px;
  width: 200px;
  padding: 30px;
  border: 1px solid #ddd;
  font-size: 20px;
  border-radius: 12px;
}
</style>
