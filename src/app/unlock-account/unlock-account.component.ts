import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UmsServiceService } from '../ums-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent {

  unlockForm:FormGroup=new FormGroup({
    confirmPwd:new FormControl(),
    email:new FormControl(),
    newPwd:new FormControl(),
    tempPwd:new FormControl()
  })

constructor( private unlockService:UmsServiceService, private router:Router){

}

userUnlock(){
  //console.log(this.unlockForm.value)
  this.unlockService.userUnlock(this.unlockForm.value).subscribe((res)=>{console.log(res);this.router.navigate(['sign-in'])})
}


}
