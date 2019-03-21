import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CusMessageComponent } from './cus-message/cus-message.component';
// import { MessageBox } from './cus-message/message-box';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatDialogModule,BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, CusMessageComponent],
  entryComponents: [
    CusMessageComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DATA, useValue: {}}
  ],
  bootstrap:[ AppComponent ]
})
export class AppModule { }
