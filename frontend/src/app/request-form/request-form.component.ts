import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
})
export class RequestFormComponent {
  user?: string; // add the ? modifier to make the property optional
  movie?: string;
  collaborators?: string;
  progress?: number;

  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {}
  // Define the submitRequest method
  submitRequest() {
    // Logic to handle form submission
    console.log('create task button clicked');

    let request_form_data = {
      user: this.user,
      movie: this.movie,
      collaborators: this.collaborators,
      progress: this.progress,
    };

    this.http
      .post('http://localhost:4000/request-form', request_form_data)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('task has been created successfully :)');
        this.router.navigateByUrl('/request-list');
      });
  }
}
