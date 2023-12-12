// edit-task.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  taskId: string | null = null; // Initialize taskId to null

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve task ID from route parameters
    this.taskId = this.route.snapshot.paramMap.get('taskId');

    // Fetch task details based on the ID from your data source
    // (e.g., service or API call)
  }

  submitEditedRequest() {
    //    // Handle the submission of edited request
    //   // Update the existing task with the editedUser and editedMovie
    //   const updatedTask = {
    //     id: this.taskId,
    //     user: this.editedUser,
    //     movie: this.editedMovie,
    //     // Include other properties of your task
    //   };
    //   this.taskService.updateTask(updatedTask).subscribe((response) => {
    //     console.log('Task updated successfully:', response);
    //     // You might want to navigate back to the task list or perform other actions
    //   }, (error) => {
    //     console.error('Error updating task:', error);
    //     // Handle error, display a message, etc.
    //   });
    // }
  }
}
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-edit-task',
//   templateUrl: './edit-task.component.html',
//   styleUrls: ['./edit-task.component.css']
// })
// export class EditTaskComponent {

// }
