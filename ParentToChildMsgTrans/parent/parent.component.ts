import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  Msg_from_parent:any='String'
  constructor() { }
  getChildData(event:any)
  {
console.log(event)
  }

  ngOnInit(): void {
  }

}
