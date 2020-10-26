import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';


const routes: Routes = [
 {
   path : '',
   redirectTo:'/list',
   pathMatch:'full'
   
 },
 {
   path:'list',
   component: StudentListComponent
 },
 {
   path:'add',
   component:StudentFormComponent
 },
 {
   path:'edit/:id',
   component:StudentFormComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
