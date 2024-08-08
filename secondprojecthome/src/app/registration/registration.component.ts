import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../model/user.model';
import { error } from 'console';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

regFrom !: FormGroup;

constructor(
  private authService: AuthService,
  private router: Router,
  private formBuilder: FormBuilder
){

this.regFrom=this.formBuilder.group({

  name:['', Validators.required],
  email:['', [Validators.required, Validators.email]],
  password:['',Validators.required]


  // name:['', Validators.required],
  // email:['',[Validators.required, Validators.email]],
  // password:['',[Validators.required, Validators.min(6), Validators.max(20)]]
})

}

onSubmit(): void{
if(this.regFrom.valid){
const user: UserModel=this.regFrom.value;
this.authService.registration(user).subscribe({
  next: (res)=>{
    console.log('User registration Successful:', res);
    this.authService.storeToken(res.token);
    this.router.navigate(['/']); // Navigate to a protected route after registration
  },
  error: (error)=>{
    console.log('Error registration user:', error);
  }
});
}
else{
  alert("Complete mandatory field");
}
}




}
