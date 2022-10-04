import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private api:ApiService) {
    this.api.viewstudent().subscribe(
      (response) =>{
        this.data = response;
      }
    )
   }

data:any = []
  ngOnInit(): void {
  }

}
