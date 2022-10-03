import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-reflection',
  templateUrl: './input-reflection.component.html',
  styleUrls: ['./input-reflection.component.scss']
})
export class InputReflectionComponent implements OnInit {
    public reflectionInput : string = "";
    public reflectionParagraphText : string = "";
    constructor() { }

    ngOnInit(): void {
    }

    public updateReflection() {
        this.reflectionParagraphText = this.reflectionInput;
    }

}
