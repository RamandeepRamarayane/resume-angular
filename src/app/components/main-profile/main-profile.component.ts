import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})
export class MainProfileComponent implements OnInit {

  show:boolean = false;

  Person: any = {
    name : "Ramandeep Ramarayane",
    tagline : "Emerging Full Stack Web Developer",
  }

  constructor() { }

  ngOnInit(): void {
  }


}
