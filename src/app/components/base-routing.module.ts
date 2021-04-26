import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyInputComponent } from './my-input/my-input.component';

const routes: Routes = [
  // { path: '', component: MyInputComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
