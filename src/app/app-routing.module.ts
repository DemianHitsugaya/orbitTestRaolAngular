import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
