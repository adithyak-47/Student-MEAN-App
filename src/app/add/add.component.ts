import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private api:ApiService) { }

  name="";
  rollno="";
  admn_no="";
  college="";

  valueadd = () =>{
    let data ={
                "name":this.name,
                "rollno":this.rollno,
                "admn_no":this.admn_no,
                "college":this.college
              };
    this.api.addstudents(data).subscribe(
      (response) =>{
        console.log(response);
      }
    )
  }

  ngOnInit(): void {
  }

}
