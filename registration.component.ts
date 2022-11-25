import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   name:string='';
   Dept:string='';
   mailid:string='';
   state:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
