import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { CusMessageComponent } from './cus-message/cus-message.component';
import { MessageBox } from './cus-message/message-box';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent{
  name = 'Angular';

  constructor(public dialog:MatDialog){}
  
  openMsg() {
    alert("123");
    MessageBox.show(this.dialog);
  }
}
