import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegistratioFormComponent } from './registratio-form/registratio-form.component';
import { UnlockAccountComponent } from './unlock-account/unlock-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
{
  path:'sign-in',component:SignInComponent
},
{
  path:'registration',component:RegistratioFormComponent
},
{
path:'unlockAcc',component:UnlockAccountComponent
},
{
  path:'forgot-pswd',component:ForgotPasswordComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
