import { Component, OnInit } from '@angular/core';
import { faPlus, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faPlus = faPlus
  faCircle = faCircle
  constructor() { }

  

  ngOnInit(): void {
  }

}
