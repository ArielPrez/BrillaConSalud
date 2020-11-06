import { Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  collapsed = true;
  // @Output() menuSelected = new EventEmitter<string>();
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  // onSelect(menuOpt: string) {
  //   this.menuSelected.emit(menuOpt);
  // }
  onYoga(){
    this.router.navigate(['yoga'], {relativeTo: this.route});
  }

  onNutricion(){
    this.router.navigate(['nutricion'], {relativeTo: this.route});
  }

  onEjercicios(){
    this.router.navigate(['ejercicios'], {relativeTo: this.route});
  }

}
