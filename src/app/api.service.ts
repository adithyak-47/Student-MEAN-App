import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addstudents = (datatosend:any) =>{
    return this.http.post("http://localhost:3000/addstudent",datatosend);
  };

  viewstudent = () =>{
    return this.http.get("http://localhost:3000/viewstudent");
  };
}
