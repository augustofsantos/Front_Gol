import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      nome: ['', Validators.required],
      origem: ['', Validators.required],
      destino: ['', Validators.required],
      dataViagem: ['', Validators.required]
    });

  }

  onSubmit() {
    this.apiService.createTravel(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-travel']);
      });
  }

  voltar() {
        this.router.navigate(['list-travel']);
  }
}
