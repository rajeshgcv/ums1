
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class UmsServiceService {
value: any;

constructor(private umsService:HttpClient){
}
baseurl:string='http://15.206.171.20:9090/'

signInUser(body:any){
  return this.umsService.post(`${this.baseurl}login`,body)
}
userRegCities(id:number){
  return this.umsService.get(`${this.baseurl}cities/${id}`)
}
userRegCountries(){
  return this.umsService.get(`${this.baseurl}countries`)
}
userRegEmail(email:any){
  return this.umsService.get(`${this.baseurl}emailcheck/${email}`)
}
userRegSaveUser(body:any){
  return this.umsService.post(`${this.baseurl}saveUser`,body,{responseType:'text'})
}
userRegState(id:number){
  return this.umsService.get(`${this.baseurl}states/${id}`)
}
userForgotPwd(emailId:any){
  return this.umsService.get(`${this.baseurl}forgotPwd/${emailId}`,{responseType:'text'})
}
userUnlock(body:any){
  return this.umsService.post(`${this.baseurl}unlock`,body)
}
}


