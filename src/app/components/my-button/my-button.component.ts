import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnInit {
  @Input() btn_label !: String;
  @Input() btn_type !: String;

  constructor() { }

  ngOnInit(): void {
  }

}
