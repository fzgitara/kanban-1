<template>
  <div>
    <div class="modal fade" id="addTask" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="inputTitle">Title</label>
              <input type="text" class="form-control" placeholder="Task Title" v-model="title">
            </div>
            <div class="form-group">
              <label for="inputDescription">Description</label>
              <textarea type="text" class="form-control" placeholder="Task Description" v-model="description"></textarea>
            </div>
            <div class="form-group">
              <label for="inputPoint">Point</label>
              <input type="number" class="form-control" placeholder="Task Point" v-model="point">
            </div>
            <div class="form-group">
              <label for="inputAssignTo">Assign To</label>
              <input type="text" class="form-control" placeholder="Task Assign To" v-model="assignTo">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addTask">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase'
// // Initialize Firebase
// var config = {
//   apiKey: 'AIzaSyBF74cqt3XHeVldAESBxyXAtPrZW6f6c2g',
//   authDomain: 'kanban-79095.firebaseapp.com',
//   databaseURL: 'https://kanban-79095.firebaseio.com',
//   projectId: 'kanban-79095',
//   storageBucket: '',
//   messagingSenderId: '216203322403'
// }

// const firebaseApp = firebase.initializeApp(config)
// const db = firebaseApp.database()

export default {
  // data () {
  //   return {
  //     title: '',
  //     description: '',
  //     point: 0,
  //     assignTo: '',
  //     tasks: []
  //   }
  // },
  // methods: {
  //   addTask: function () {
  //     db.ref('tasks/').push({
  //       title: this.title,
  //       description: this.description,
  //       point: this.point,
  //       assignTo: this.assignTo,
  //       status: 'backlog'
  //     })
  //   }
  // }
}
</script>
