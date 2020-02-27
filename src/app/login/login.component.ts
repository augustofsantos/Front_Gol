import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const User = {
      Email: this.loginForm.controls.email.value,
      Senha: this.loginForm.controls.password.value
    }
    
    this.apiService.login(User).subscribe(data => {
      if(data.result != null){
        window.localStorage.setItem('token', data.result.accessToken);   
        this.router.navigate(['list-travel']);
      }else{
        alert("usuário e/ou senha inválidos");
      }
    });
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  clickFunction() {
    this.router.navigate(['add-user']);
  }

}
