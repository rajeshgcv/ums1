import { Component } from '@angular/core';
import { UmsServiceService } from '../ums-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

constructor(private signinservie:UmsServiceService){

}
signinForm:FormGroup=new FormGroup({
  email:new FormControl(),
  pwd:new FormControl()
})

signIn(){
  this.signinservie.signInUser(this.signinForm.value).subscribe((res)=>console.log(res))
}


}

