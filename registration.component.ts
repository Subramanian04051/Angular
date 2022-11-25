import { Component, OnInit } from '@angular/core';
interface StudentData
{
  name:string;
  dept:string;
  state:string;
  mail:string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }
  //datarr=new Array(3);
   jsonObj={};
  
  PrintValue()
  {
    
    var attributearr=['name','dept','state','mail']
     // 👇️ const input: HTMLInputElement | null
     for(let i=0;i<4;i++)
     {
let value= document.getElementById(attributearr[i]) as HTMLInputElement | null;
  this.jsonObj[attributearr[i]]=value?.value;
  console.log(this.jsonObj[attributearr[i]]);
     }
     
  }
 
  students:StudentData[]=[{name:this.jsonObj[0],dept:this.jsonObj[1],state:this.jsonObj[2],mail:this.jsonObj[3]}]
  ngOnInit(): void {
  }

}
