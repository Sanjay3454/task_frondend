import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private fb: FormBuilder,private ds:DataserviceService,private router: Router){}


 //Model For Register Form
 registerForm = this.fb.group({
  uname: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
  email: ['', [Validators.required]],
  psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
  
  
})


register(){
 var uname=this.registerForm.value.uname
 var email=this.registerForm.value.email
 var psw=this.registerForm.value.psw
 if (this.registerForm.valid) {
  this.ds.register(uname,email,psw).subscribe((result: any) => {
    console.log(result); 
    alert(result.message)
    this.router.navigateByUrl("")
  },
  result=>{
    console.log(result); 
    alert(result.error.message) 
  })
  }
  else {
    alert("Invalid Form !")
  }
}

}



