import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {ApiService} from "../../service/api.service";
import { Travel } from 'src/app/model/travel.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-travel.component.html',
  styleUrls: ['./edit-travel.component.css']
})
export class EditTravelComponent implements OnInit {

  travel: Travel;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let travelId = window.localStorage.getItem("editId");
    if(!travelId) {
      alert("Tente novamente!")
      this.router.navigate(['list-travel']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      travelId: [''],
      nome: ['', Validators.required],
      origem: ['', Validators.required],
      destino: ['', Validators.required],
      dataViagem: ['', Validators.required]
    });
    this.apiService.getTravelById(travelId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.apiService.updateTravel(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
            alert('Viagem atualizada');
            this.router.navigate(['list-travel']);
        },
        error => {
          alert(error);
        });
  }

}
