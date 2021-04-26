import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss']
})
export class MyInputComponent implements OnInit {
  @ViewChild('input') input: any;

  @Input() label!: any;
  @Input() type!: string;
  @Input() validation!: String;
  @Input() email!: any;
  @Input() text!: String;
  @Input() password!: String;


  Form!: FormGroup;


  constructor() { }
  ngOnInit(): void {
    this.Form = new FormGroup({
      control: new FormControl('', Validators.required)
    })
  }





}
