import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
string_url:any="https://ufstech.onrender.com"
  constructor(private http:HttpClient) { }

  // Get CV Data APi
  getCvData(){
    return this.http.get(`${ this.string_url}/getCV`)
  }


  //Save CV Data
 saveCvData(req:any){
    return this.http.post(`${ this.string_url}/postCV`,  req)
  }
}

