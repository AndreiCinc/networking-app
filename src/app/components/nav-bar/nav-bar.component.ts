import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']

})
export class NavBarComponent {
  color: ThemePalette = 'warn';
  checked = false;
  disabled = false;
  available = true;
  
  switchAvalability() {
    this.available = !this.available;
  }
}
