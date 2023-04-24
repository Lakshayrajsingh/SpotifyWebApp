import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService:UserService , private router:Router,private fb:FormBuilder,private auth:AuthService,private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  loginform = new FormGroup({
    'emailId':new FormControl(),
    'password': new FormControl()
  });

  // loginform=this.fb.group({
  //   email:['', Validators.required],
  //   password:['', Validators.required]
  // })

  responseData:any;
  sendLoginData(){
    console.log(this.loginform.value);
    this.userService.loginCheck(this.loginform.value).subscribe(
      response=>{
        console.log(response);
        this.responseData=response;
        console.log(this.responseData.token);
        console.log(this.responseData.role);
        console.log(this.responseData.message);
        localStorage.setItem('jwt',this.responseData.token);
        // let token = localStorage.getItem('jwt')
        // console.log(token);
        localStorage.setItem("role",this.responseData.role);
        // this.auth.isLoggedIn=true;
        this._snackBar.open('Logged in Successfully!!', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        if(this.responseData.role=="ROLE_ADMIN"){
          this.router.navigateByUrl("/adminView");
        }
        else
        this.router.navigateByUrl("/userView");
      }
    )
    
  }

}
