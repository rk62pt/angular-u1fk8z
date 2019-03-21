import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-cus-message',
  templateUrl: './cus-message.component.html',
  styleUrls: ['./cus-message.component.css']
})
export class CusMessageComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CusMessageComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}