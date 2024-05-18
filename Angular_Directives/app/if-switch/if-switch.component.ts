import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-switch',
  templateUrl: './if-switch.component.html',
  styleUrls: ['./if-switch.component.css']
})
export class IfSwitchComponent implements OnInit {
passage:string=""
show_hide:boolean=false
  constructor() { }

  ngOnInit(): void {
    this.passage="Sample message"
  }
  showhide()
  {
    this.show_hide=!this.show_hide
    //return this.show_hide
  }

}
