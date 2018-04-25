<template>
  <div id="home" class="container">
    <br>
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <h5 class="card-header bg-danger text-light">
            Back-Log
          </h5>
          <div class="card-body" id="cardBackLog">
            <div class="container">
            <!-- Inner-Card -->
              <div class="card" style="margin: 20px 0px" v-for="(data, i) in tasks" :key="i" v-show="data.status === 'backlog'">
                <h5 class="card-header bg-light text-dark">
                  {{data.title}}
                </h5>
                <div class="card-body">
                  <label><strong>Description:</strong></label>
                  <p>{{data.description}}</p>
                  <hr>
                  <label><strong>Point:</strong></label>
                  <p>{{data.point}}</p>
                  <hr>
                  <label><strong>Assign To:</strong></label>
                  <p>{{data.assignTo}}</p>
                  <hr>
                  <div class="card-footer bg-transparent border-light" style="padding: 0px; padding-top: 17px">
                    <button type="button" class="btn btn-secondary"><i class="fas fa-chevron-left"></i></button>
                    <button type="button" class="btn btn-dark" @click="deleteData(i)"><i class="fas fa-trash"></i></button>
                    <button type="button" class="btn btn-warning text-white" @click="todo(i, data.status)"><i class="fas fa-chevron-right"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <h5 class="card-header bg-warning text-light">
            To-Do
          </h5>
          <div class="card-body" id="cardToDo">
            <div class="container">
            <!-- Inner-Card -->
              <div class="card" style="margin: 20px 0px" v-for="(data, i) in tasks" :key="i" v-show="data.status === 'todo'">
                <h5 class="card-header bg-light text-dark">
                  {{data.title}}
                </h5>
                <div class="card-body">
                  <label><strong>Description:</strong></label>
                  <p>{{data.description}}</p>
                  <hr>
                  <label><strong>Point:</strong></label>
                  <p>{{data.point}}</p>
                  <hr>
                  <label><strong>Assign To:</strong></label>
                  <p>{{data.assignTo}}</p>
                  <hr>
                  <div class="card-footer bg-transparent border-light" style="padding: 0px; padding-top: 17px">
                    <button type="button" class="btn btn-danger text-white" @click="backlog(i, data.status)"><i class="fas fa-chevron-left"></i></button>
                    <button type="button" class="btn btn-dark" @click="deleteData(i)"><i class="fas fa-trash"></i></button>
                    <button type="button" class="btn btn-primary text-white" @click="doing(i, data.status)"><i class="fas fa-chevron-right"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <h5 class="card-header bg-primary text-light">
            Doing
          </h5>
          <div class="card-body" id="cardDoing">
            <div class="container">
            <!-- Inner-Card -->
              <div class="card" style="margin: 20px 0px" v-for="(data, i) in tasks" :key="i" v-show="data.status === 'doing'">
                <h5 class="card-header bg-light text-dark">
                  {{data.title}}
                </h5>
                <div class="card-body">
                  <label><strong>Description:</strong></label>
                  <p>{{data.description}}</p>
                  <hr>
                  <label><strong>Point:</strong></label>
                  <p>{{data.point}}</p>
                  <hr>
                  <label><strong>Assign To:</strong></label>
                  <p>{{data.assignTo}}</p>
                  <hr>
                  <div class="card-footer bg-transparent border-light" style="padding: 0px; padding-top: 17px">
                    <button type="button" class="btn btn-warning text-white" @click="todo(i, data.status)"><i class="fas fa-chevron-left"></i></button>
                    <button type="button" class="btn btn-dark" @click="deleteData(i)"><i class="fas fa-trash"></i></button>
                    <button type="button" class="btn btn-success text-white" @click="done(i, data.status)"><i class="fas fa-chevron-right"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <h5 class="card-header bg-success text-light">
            Done
          </h5>
          <div class="card-body" id="cardDone">
            <div class="container">
            <!-- Inner-Card -->
              <div class="card" style="margin: 20px 0px" v-for="(data, i) in tasks" :key="i" v-show="data.status === 'done'">
                <h5 class="card-header bg-light text-dark">
                  {{data.title}}
                </h5>
                <div class="card-body">
                  <label><strong>Description:</strong></label>
                  <p>{{data.description}}</p>
                  <hr>
                  <label><strong>Point:</strong></label>
                  <p>{{data.point}}</p>
                  <hr>
                  <label><strong>Assign To:</strong></label>
                  <p>{{data.assignTo}}</p>
                  <hr>
                  <div class="card-footer bg-transparent border-light" style="padding: 0px; padding-top: 17px">
                    <button type="button" class="btn btn-primary text-white" @click="doing(i, data.status)"><i class="fas fa-chevron-left"></i></button>
                    <button type="button" class="btn btn-dark" @click="deleteData(i)"><i class="fas fa-trash"></i></button>
                    <button type="button" class="btn btn-secondary"><i class="fas fa-chevron-right"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="addTask" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header" style="background-color:rgb(212, 239, 255)">
            <h5 class="modal-title">Add Task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="background-color: aliceblue">
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
          <div class="modal-footer" style="background-color:rgb(212, 239, 255)">
            <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addTask" data-dismiss="modal">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import swal from 'sweetalert2'
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBF74cqt3XHeVldAESBxyXAtPrZW6f6c2g',
  authDomain: 'kanban-79095.firebaseapp.com',
  databaseURL: 'https://kanban-79095.firebaseio.com',
  projectId: 'kanban-79095',
  storageBucket: '',
  messagingSenderId: '216203322403'
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()

export default {
  name: 'Task',
  data () {
    return {
      title: '',
      description: '',
      point: 0,
      assignTo: '',
      tasks: []
    }
  },
  created: function () {
    this.showTask()
  },
  methods: {
    addTask: function () {
      db.ref('tasks/').push({
        title: this.title,
        description: this.description,
        point: this.point,
        assignTo: this.assignTo,
        status: 'backlog'
      })
      swal(
        'New Task Created!',
        'You have just created new task',
        'success'
      )
      this.title = ''
      this.description = ''
      this.point = 0
      this.assignTo = ''
    },
    showTask: function () {
      let app = this
      db.ref('tasks/').on('value', function (snapshot) {
        app.tasks = snapshot.val()
      })
    },
    backlog: function (id, status) {
      swal({
        position: 'center',
        type: 'success',
        title: 'Your task has been moved to back-log',
        showConfirmButton: false,
        timer: 1500
      })
      db.ref('tasks/').child(id).update({
        status: 'backlog'
      })
    },
    todo: function (id, status) {
      swal({
        position: 'center',
        type: 'success',
        title: 'Your task has been moved to to-do',
        showConfirmButton: false,
        timer: 1500
      })
      db.ref('tasks/').child(id).update({
        status: 'todo'
      })
    },
    doing: function (id, status) {
      swal({
        position: 'center',
        type: 'success',
        title: 'Your task has been moved to doing',
        showConfirmButton: false,
        timer: 1500
      })
      db.ref('tasks/').child(id).update({
        status: 'doing'
      })
    },
    done: function (id, status) {
      swal({
        position: 'center',
        type: 'success',
        title: 'Your task has been moved to done',
        showConfirmButton: false,
        timer: 1500
      })
      db.ref('tasks/').child(id).update({
        status: 'done'
      })
    },
    deleteData: function (id) {
      console.log(id)
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          db.ref('tasks/').child(id).remove()
          swal(
            'Deleted!',
            'Your task has been deleted.',
            'success'
          )
        } else if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.cancel
        ) {
          swal(
            'Cancelled',
            'Your task is safe :)',
            'error'
          )
        }
      })
    }
  }
}
</script>

<style>
.card-header {
  text-align: center;
  font-size: 20px;
}
.card-footer {
  text-align: center;
  font-size: 20px;
}
#home {
  text-align: left;
  font-size: 16px;
  line-height: 1em;
}

</style>
