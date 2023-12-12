// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestListComponent } from './request-list/request-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component'; // Import the new component

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'request-form', component: RequestFormComponent },
  { path: 'request-list', component: RequestListComponent },
  { path: 'edit-task/:taskId', component: EditTaskComponent }, // New route for EditTaskComponent
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { RequestFormComponent } from './request-form/request-form.component';
// import { RequestListComponent } from './request-list/request-list.component';

// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'request-form', component: RequestFormComponent },
//   { path: 'request-list', component: RequestListComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
