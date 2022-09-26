import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picaboo',
  templateUrl: './picaboo.component.html',
  styleUrls: ['./picaboo.component.scss']
})
export class PicabooComponent implements OnInit {
    public toggle : boolean = false;
    constructor() { }

    ngOnInit(): void {
    }

    public toggleParagraph() {
        this.toggle = !this.toggle;
    }

}
