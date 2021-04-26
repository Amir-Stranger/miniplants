import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  //add lazy modules to routing
  {
    path: 'base', loadChildren: () => import('./components/base.module').then(q => q.BaseModule)
  },
  {
    path: '', loadChildren: () => import('./views/view.module').then(q => q.ViewModule)
  }


];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
