import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {  DataserviceService } from '../services/dataservice.service';
import {  Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private ds: DataserviceService, private fb: FormBuilder){
  }


loginForm = this.fb.group({
    email: ['', [Validators.required]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
  })


  login() {
    var email = this.loginForm.value.email
    var psw = this.loginForm.value.psw
    if (this.loginForm.valid) {
      this.ds.login(email, psw).subscribe((result:any)=>{
        localStorage.setItem("currentuser",result.currentuser)
        localStorage.setItem("token",JSON.stringify(result.token))
        alert(result.message)
        this.router.navigateByUrl("dashboard");
      },
      result=>{
        alert(result.error.message)
      }
      )
    }
  
    else {
      alert("Invalid Form")
    }
}


reloadPage() {
  window.location.reload();
}

}
