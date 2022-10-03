import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-dummy',
  templateUrl: './input-dummy.component.html',
  styleUrls: ['./input-dummy.component.scss']
})
export class InputDummyComponent implements OnInit {
  @Input() simpleText : string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
