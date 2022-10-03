import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-work',
  templateUrl: './class-work.component.html',
  styleUrls: ['./class-work.component.scss']
})
export class ClassWorkComponent implements OnInit {

    public nameInput : string = "";
    public nameP : string = "";
    
    constructor() { }

    ngOnInit(): void {
    }

    public onNameInputSubmit() : void {
        this.nameP = this.nameInput;
        this.nameInput = "";
    }

}
