import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";
import { Travel } from 'src/app/model/travel.model';

@Component({
  selector: 'app-list-travel',
  templateUrl: './list-travel.component.html',
  styleUrls: ['./list-travel.component.css']
})
export class ListTravelComponent implements OnInit {

  travels: Travel[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    var token = window.localStorage.getItem('token');
    if(token == null || token == undefined) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getTravels()
      .subscribe( data => {
        this.travels = data.result;
      });
  }

  deleteTravel(travel: Travel): void {
    this.apiService.deleteTravel(travel.id)
      .subscribe( data => {
        this.travels = this.travels.filter(u => u !== travel);
      })
  };

  editTravel(travel: Travel): void {
    window.localStorage.removeItem("editId");
    window.localStorage.setItem("editId", travel.id.toString());
    this.router.navigate(['edit-travel']);
  };

  addTravel(): void {
    this.router.navigate(['add-travel']);
  };
}
