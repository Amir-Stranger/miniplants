import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private http: HttpClient) { }

  data = JSON.stringify({
    id: 1,
    first_name: 'Aliiiiii',
    email: 'ali@gmail.com',
    password: '0000',
  })


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })

    this.http.get("http://localhost:3000").subscribe(resullt => {
      console.log(resullt);
    })
  }


  save(event: any) {
    event.preventDefault();
    this.loginForm.controls.username.setValue(this.user.input.nativeElement.value);
    this.loginForm.controls.password.setValue(this.pass.input.nativeElement.value);
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log("اطلاعات فرم را تکمیل کنید.")
      this.http.post("http://localhost:3000", this.data, {
        headers: {
          "Content-Type": "application/json"
        }
      }).subscribe(res => console.log(res))
    }




  }
}
