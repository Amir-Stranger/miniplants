import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInputComponent } from '../components/my-input/my-input.component';
import { MaterialModule } from '../modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BaseRoutingModule } from './base-routing.module';
import { SharedModulesModule } from '../modules/shared-modules/shared-modules.module';
import { MyButtonComponent } from './my-button/my-button.component';




@NgModule({
  declarations: [MyInputComponent, MyButtonComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BaseRoutingModule,
    SharedModulesModule
  ], exports: [
    MyInputComponent,
    MyButtonComponent
  ]
})
export class BaseModule { }
