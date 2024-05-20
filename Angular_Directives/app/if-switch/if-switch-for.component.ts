import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-switch-for',
  templateUrl: './if-switch-for.component.html',
  styleUrls: ['./if-switch-for.component.css']
})
export class IfSwitchComponent implements OnInit {
passage:string=""
show_hide:boolean=false
word:string[]=("helloWorld").split('')
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
