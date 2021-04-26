import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRoutingModule } from './view-routing.module';
import { LoginComponent } from './login/login.component';
import { BaseModule } from '../components/base.module';
import { SharedModulesModule } from '../modules/shared-modules/shared-modules.module';
import { SigninComponent } from './signin/signin.component';
import { MaterialModule } from '../modules/material/material.module';

@NgModule({
  declarations: [LoginComponent, SigninComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    BaseModule,
    SharedModulesModule,
    MaterialModule
  ],
  exports: [
  ]
})
export class ViewModule { }
