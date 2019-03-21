import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CusMessageComponent } from './cus-message/cus-message.component';
import { CusMessage } from './cus-message/cus-message';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatDialogModule ],
  declarations: [ AppComponent, HelloComponent, CusMessageComponent ],
  entryComponents: [
    CusMessageComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
