import { GridBindComponent } from './grid-bind/grid-bind.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user', component: UserFormComponent },
  { path: 'user/:id', component: UserFormComponent },
  { path: 'grid', component: GridBindComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
