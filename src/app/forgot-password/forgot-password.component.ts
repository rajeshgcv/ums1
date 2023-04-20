import { Component } from '@angular/core';
import { UmsServiceService } from '../ums-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
constructor(private forgotPass:UmsServiceService){

}
forgtPass:FormGroup=new FormGroup({
  emailId:new FormControl()
})

forgotPassword(){
  console.log(this.forgtPass.value)
  this.forgotPass.userForgotPwd(this.forgotPass.value.emailId).subscribe
  ((res)=>{console.log(res)})
}


}
