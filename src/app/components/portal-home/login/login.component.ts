import { Component, OnInit } from '@angular/core';
 import { AuthService } from "../../../providers/auth.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public user$ = this._authService.user;

  constructor(public _authService: AuthService,private formBuilder: FormBuilder,private _router: Router ){ 
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    
  }
  login(){
    const inputValue = this.form.value;
    console.log(inputValue.email, inputValue.password);
    this._authService.login(inputValue.email, inputValue.password)
    .subscribe(success => {
      this._router.navigate(['/contacts'])
    },
      error => console.log(error)
    );
  }
  
   
  }
 
