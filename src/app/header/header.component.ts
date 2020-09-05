import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'Brilla Con Salud';
  @Output() menuSelected = new EventEmitter<string>();
  constructor() { }

  onSelect(menuOpt: string) {
    this.menuSelected.emit(menuOpt);
  }
  

}
