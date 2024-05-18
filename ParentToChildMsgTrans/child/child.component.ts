import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() ParentEmitter=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  @Input() parent_msg:String
}
