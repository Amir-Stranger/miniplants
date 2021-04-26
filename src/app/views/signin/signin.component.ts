import { Component, OnInit, ViewChild, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyInputComponent } from 'src/app/components/my-input/my-input.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  @ViewChild('username') username!: MyInputComponent;
  @ViewChild('email') email!: MyInputComponent;
  @ViewChild('password') password!: MyInputComponent;
  signInForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    })
  }

  save() {
    this.signInForm.controls.username.setValue(this.username.input.nativeElement.value);
    this.signInForm.controls.email.setValue(this.email.input.nativeElement.value);
    this.signInForm.controls.password.setValue(this.password.input.nativeElement.value);
    if (this.signInForm.valid) {
      console.log("فرم ولید");

    } else {
      console.log("فرم اینولید");

    }
  }

}
