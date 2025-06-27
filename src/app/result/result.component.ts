import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {

 constructor(private api:ApiService) { } 
// To store data
cvData:any=[]

// Get Data API
getCvData1(){
  return this.api.getCvData().subscribe((res)=>{
this.cvData=res
  })
}

}
