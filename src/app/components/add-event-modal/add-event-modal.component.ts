import {Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'dialog-content-example',
  templateUrl: 'dialog-content-example.html',
  styleUrls: ["add-event-modal.component.scss"],
})
export class DialogContentExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  styleUrls: ["add-event-modal.component.scss"],
})
export class DialogContentExampleDialog {
  typeOfBreak = ['Smoke break', 'Coffee break', 'Lunch break', 'Darts game', 'Ping Pong', 'FIFA', 'Other'];
  roles = ['All', 'Frontend Developer', 'Backend Developer', 'Project Manager', 'Scrum Master', 'Python Developer', 'HR'];
  myControl = new FormControl('');
  color: ThemePalette = 'warn';
  checked = false;
  disabled = false;
  available = true;
  constructor() {}

  keywords = ['angular', 'how-to', 'tutorial', 'accessibility'];
  formControl = new FormControl(['angular']);

  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  
}
