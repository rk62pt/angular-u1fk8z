import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { CusMessageComponent } from '../cus-message/cus-message.component';

export class MessageBox {

  static show(dialog: MatDialog) {
    const dialogRef = dialog.open( MessageBox, {width:'400px'} );
  }
}