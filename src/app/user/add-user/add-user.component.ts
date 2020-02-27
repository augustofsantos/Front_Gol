import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const User = {
      id: 0,
      nome: this.loginForm.controls.nome.value,
      email: this.loginForm.controls.email.value,
      senha: this.loginForm.controls.senha.value
    }

    this.apiService.createUser(User).subscribe(data => {
      alert("Usuario Cadastrado");
      this.router.navigate(['login']);     
    });
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      senha: ['', Validators.required],
      nome: ['', Validators.required]
    });
  }

}
