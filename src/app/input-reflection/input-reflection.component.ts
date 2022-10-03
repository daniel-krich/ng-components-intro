import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-reflection',
  templateUrl: './input-reflection.component.html',
  styleUrls: ['./input-reflection.component.scss']
})
export class InputReflectionComponent implements OnInit {
    public reflectionInput : string = "";
    public reflectionParagraphText : string = "";

    @Output() reflectionParagraphTextChanged : EventEmitter<string> = new EventEmitter<string>(); 

    constructor() { }

    ngOnInit(): void {
    }

    public updateReflection() {
        this.reflectionParagraphText = this.reflectionInput;

        this.reflectionParagraphTextChanged.emit(this.reflectionParagraphText);
    }

}
