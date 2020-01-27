import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ListBookingsComponent} from "./booking/list-bookings/list-bookings.component";
import {AddBookingComponent} from "./booking/add-booking/add-booking.component";
import {EditBookingComponent} from "./booking/edit-booking/edit-booking.component";

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'add-booking', component: AddBookingComponent},
    {path: 'list-bookings', component: ListBookingsComponent},
    {path: 'edit-booking', component: EditBookingComponent},
    {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);