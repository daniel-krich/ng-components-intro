import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input-reflection',
  templateUrl: './input-reflection.component.html',
  styleUrls: ['./input-reflection.component.scss']
})
export class InputReflectionComponent implements OnInit {
    @ViewChild('reflectionInput') reflectionInput: ElementRef | undefined;
    public reflectionParagraphText : string = "";
    constructor() { }

    ngOnInit(): void {
    }

    public updateReflection() {
        this.reflectionParagraphText = this.reflectionInput?.nativeElement.value;
    }

}
