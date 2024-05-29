import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jwt-Sample-Imp';
  params:any={}
  url:string=''
  headers:any={}
  logform:FormGroup
  constructor(private fb: FormBuilder,private http:HttpClient){}
  ngOnInit()
  {
    this.logform= this.fb.group({
      UserName:"",
      Password:""
    })
  }
  
  CallApi()
  {
    this.params={
      user_Details:{username:this.logform.controls['UserName'].value||"",
    Password:this.logform.controls['Password'].value || ""},
    }
    this.url='http://localhost:8080/Login/'
    //this.headers=
    this.http.post(this.url,this.params).subscribe((res:any)=>
  {
//console.log(res)
sessionStorage.setItem('JWT',res.token)
  })

  }
  
}
