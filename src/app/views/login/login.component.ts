import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login-service/login.service';
import { environment } from 'src/environments/environment';
import { MyInputComponent } from '../../components/my-input/my-input.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('user') user!: MyInputComponent;
  @ViewChild('pass') pass!: MyInputComponent;

  loginForm!: FormGroup;
  constructor(private user_service: HttpClient) { }



  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })


  }


  save(event: any) {
    event.preventDefault();
    this.loginForm.controls.username.setValue(this.user.input.nativeElement.value);
    this.loginForm.controls.password.setValue(this.pass.input.nativeElement.value);
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.user_service.get(environment.api + 2).subscribe(user => {
        console.log(user);

      })

    } else {
      console.log("اطلاعات فرم را تکمیل کنید.")

    }




  }
}
