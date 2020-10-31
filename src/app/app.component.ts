import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  windowWidth: number;
  fullSize: number;
  size = 20;
  title = ['B', 'r', 'i', 'l', 'l', 'a', ' ', 'C', 'o', 'n', ' ', 'S', 'a', 'l', 'u', 'd'];

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    this.fullSize = window.innerWidth;
  }

  // Just to resize the title :)
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = window.innerWidth;
    if ((this.fullSize / 3 + (this.fullSize / 6)) > this.windowWidth ) {
      this.size = 5;
      // console.log('=====>' + this.fullSize + ' / ' + this.windowWidth + ' / '  + this.size);
    }
    else if ((this.fullSize / 2 + (this.fullSize / 4)) > this.windowWidth ) {
      this.size = 10;
      // console.log('=====>' + this.fullSize + ' / ' + this.windowWidth + ' / '  + this.size);
    }else{
      this.size = 20;
      // console.log('=====>' + this.fullSize + ' full ' + this.windowWidth + ' actual '  + this.size + ' px ');
    }


  }
}
