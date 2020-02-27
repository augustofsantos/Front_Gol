import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";
import { Travel } from '../model/travel.model';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://localhost:5001/api/';

  login(login) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'user/login', login);    
  }

  createUser(user: User): Observable<ApiResponse> {  
    return this.http.post<ApiResponse>(this.baseUrl + 'user/add', user);
  }

  getTravels() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+ 'travel');
  }

  getTravelById(id: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'travel/' + id);
  }

  createTravel(travel: Travel): Observable<ApiResponse> {    
    return this.http.post<ApiResponse>(this.baseUrl + 'travel', travel);
  }

  updateTravel(travel: Travel): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + 'travel/' + travel.id, travel);
  }

  deleteTravel(id: string): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + 'travel/' + id);
  }
}
