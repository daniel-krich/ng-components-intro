import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'intro-components';

    public onParagraphUpdated(text : string) : void {
        console.log("Paragraph updated event catch from 'app.component.ts': " + text);
    }
}
