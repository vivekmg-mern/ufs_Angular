import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ResultComponent } from '../result/result.component';
import { ApiService } from '../services/api.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ResultComponent, FormsModule, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
names:string=" "
email:any=" "
phone:any= " "
summary:string=" "
experience:string=" "
education:string=" "
skills:string=" "

constructor(private api:ApiService){}

//Sent CV Data to Backend
captureForm(event:Event){
  const target = event.target as HTMLInputElement
  this.names=target.value
 return this.api.saveCvData({}).subscribe((req)=>{
 req=target.value
 })
}

 


 

}
