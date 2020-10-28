import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ['B', 'r', 'i', 'l', 'l', 'a', ' ', 'C', 'o', 'n', ' ', 'S', 'a', 'l', 'u', 'd'];
  loadedMenu = 'estilo-de-vida';

  onNavigate(menu: string){
    this.loadedMenu = menu;
  }
}
