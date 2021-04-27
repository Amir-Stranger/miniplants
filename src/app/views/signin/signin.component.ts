import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyInputComponent } from 'src/app/components/my-input/my-input.component';
import { LoginService } from 'src/app/services/login-service/login.service';
import { environment } from 'src/environments/environment';

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

  constructor(private fb: FormBuilder, private usr_service: HttpClient) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      first_name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    })
  }

  save() {
    this.signInForm.controls.first_name.setValue(this.username.input.nativeElement.value);
    this.signInForm.controls.email.setValue(this.email.input.nativeElement.value);
    this.signInForm.controls.password.setValue(this.password.input.nativeElement.value);
    if (this.signInForm.valid) {
      this.usr_service.post(environment.api, this.signInForm.value, { headers: { "Content-Type": "application/json" } }).subscribe(res => console.log(res))

    } else {
      alert("فرم را کامل کنید.");
    }
  }

}
