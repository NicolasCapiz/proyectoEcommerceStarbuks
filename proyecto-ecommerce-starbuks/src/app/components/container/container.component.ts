import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { 
    const circleColor = (color : any) => {
      const circle = document.getElementById("circle");
      color = circle.style.background;
    };
  }

  ngOnInit(): void {
  }

}
