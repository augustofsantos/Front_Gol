import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddTravelComponent} from "./travel/add-travel/add-travel.component";
import {ListTravelComponent} from "./travel/list-travel/list-travel.component";
import {EditTravelComponent} from "./travel/edit-travel/edit-travel.component";
import {AddUserComponent} from "./user/add-user/add-user.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-travel', component: AddTravelComponent },
  { path: 'list-travel', component: ListTravelComponent },
  { path: 'edit-travel', component: EditTravelComponent },
  { path : '', component : LoginComponent},
  { path: 'add-user', component: AddUserComponent },
];

export const routing = RouterModule.forRoot(routes);
