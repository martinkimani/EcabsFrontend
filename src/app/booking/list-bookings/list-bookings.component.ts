import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {IBooking} from "../../model/booking.model";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-list-bookings',
  templateUrl: './list-bookings.component.html',
  styleUrls: ['./list-bookings.component.css']
})
export class ListBookingsComponent implements OnInit {

  bookings: IBooking[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getBookings()
      .subscribe( data => {
        this.bookings = data;
      });
  }

  deleteBooking(booking: IBooking): void {
    this.apiService.deleteBooking(booking.bookingId)
      .subscribe( data => {
        this.bookings = this.bookings.filter(u => u !== booking);
      })
  };

  editBooking(booking: IBooking): void {
    window.localStorage.removeItem("editBookingId");
    window.localStorage.setItem("editBookingId", booking.bookingId.toString());
    this.router.navigate(['edit-booking']);
  };

  addBooking(): void {
    this.router.navigate(['add-booking']);
  };
}
