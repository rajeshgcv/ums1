import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UmsServiceService } from '../ums-service.service';


@Component({
  selector: 'app-registratio-form',
  templateUrl: './registratio-form.component.html',
  styleUrls: ['./registratio-form.component.css']
})
export class RegistratioFormComponent {

  countryId:any
  stateId:any
  cityId:any
  constructor(private regSer:UmsServiceService){
    this.getCountryId()
}

registForm:FormGroup=new FormGroup({
fname:new FormControl(),
lname:new FormControl(),
email:new FormControl(),
phno:new FormControl(),
dob:new FormControl(), 
gender:new FormControl(),
countryId:new FormControl(),
stateId:new FormControl(),
cityId:new FormControl() 
})



regUser(){
  this.regSer.userRegSaveUser(this.registForm.value).subscribe((res)=>console.log(res))
}
getCountryId(){
  this.regSer.userRegCountries().subscribe((res)=>{this.countryId=res})
}


getStateBycountryId(value:any){
this.regSer.userRegState(value).subscribe((res)=>{this.stateId=res ;console.log(res)})
}

getCityByStateId(value:any){
  this.regSer.userRegCities(value).subscribe((res)=>{this.cityId=res;console.log(res)})
}



}
