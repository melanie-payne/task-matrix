import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css'],
})
export class RequestListComponent implements OnInit {
  requestList: any[] = [];

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.requestService.getRequestList().subscribe(
      (data: any[]) => {
        this.requestList = data;
      },
      (error) => {
        console.error('Error fetching request list:', error);
      }
    );
  }

  editRequest(request: any): void {
    // Implement the edit functionality here
    // You can navigate to a separate edit page or show a modal for editing
  }

  deleteRequest(requestId: string): void {
    console.log('Deleting request with ID:', requestId); // Log to see the ID being sent

    if (!requestId) {
      console.error('Invalid request id:', requestId);
      return;
    }

    if (confirm('Are you sure you want to delete this request?')) {
      this.requestService.deleteRequest(requestId).subscribe(
        () => {
          console.log('Request deleted successfully');
          // Update the UI by removing the deleted item
          this.requestList = this.requestList.filter(
            (request) => request.id !== requestId
          );
        },
        (error) => {
          console.error('Error deleting request:', error);
          // Handle the error (display a message, log it, etc.)
        }
      );
    }
  }
}
// import { Component, OnInit } from '@angular/core';
// import { RequestService } from '../request.service';

// @Component({
//   selector: 'app-request-list',
//   templateUrl: './request-list.component.html',
//   styleUrls: ['./request-list.component.css'],
// })
// export class RequestListComponent implements OnInit {
//   requestList: any[] = [];

//   constructor(private requestService: RequestService) {}

//   ngOnInit(): void {
//     this.requestService.getRequestList().subscribe(
//       (data: any[]) => {
//         this.requestList = data;
//       },
//       (error) => {
//         console.error('Error fetching request list:', error);
//       }
//     );
//   }

//   editRequest(request: any): void {
//     // Implement the edit functionality here
//     // You can navigate to a separate edit page or show a modal for editing
//   }

//   deleteRequest(requestId: string): void {}
// }
