import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  // signupForm = new FormGroup({
  //   'emailId':new FormControl(),
  //   'password': new FormControl(),
  //   'userName':new FormControl(),
  //   'mobileNo':new FormControl(),
  //   'address':new FormControl()
  // })
  signupForm = this.fb.group({
    emailId:['',[Validators.email,Validators.required]],
    userName:['', [Validators.required,Validators.minLength(2)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    phoneNumber:['',[Validators.pattern(/^[789]\d{9,9}$/), Validators.required]],
    address:['',[Validators.required]]
  } )

  get emailId() {
    return this.signupForm.get('emailId');
  }
  get userName() {
    return this.signupForm.get('userName');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get phoneNumber() {
    return this.signupForm.get('phoneNumber');
  }
  get address() {
    return this.signupForm.get('address');
  }

  sendSignupData(){
    console.log(this.signupForm.value);
    this.userService.registerUser(this.signupForm.value).subscribe(
      response=>{
      console.log(response);
      // have to add alert or snackbar
      this._snackBar.open('Congrats!!User has been registered!!', 'success', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
      //  this.signupForm.reset();
       this.router.navigate(['loginView']);
      }
    )
  }
  
  editStatus:any
  canDeActivate() {
    if (!this.editStatus) {
      let response = confirm(
        'Changes are not saved. Do you still want to Leave?'
      );
      return response;
    } else return true;
  }

}
