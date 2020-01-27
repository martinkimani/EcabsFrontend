import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {first} from "rxjs/operators";
import {IBooking} from "../../model/booking.model";
import {ApiService} from "../../service/api.service";


@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {

  booking: IBooking;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let bookingId = window.localStorage.getItem("editBookingId");
    if(!bookingId) {
      alert("Invalid action.")
      this.router.navigate(['list-bookings']);
      return;
    }
    this.editForm = this.formBuilder.group({
      bookingId: [],
      passengerName: ['', Validators.required],
      passangerContactNumber: ['', Validators.required],
      waitingTime: ['', Validators.required],
      price: ['', Validators.required],
      rating: ['', Validators.required],
      noOfPassengers: ['',Validators.required],
      asap: [''],
      pickupTime: [new Date()]
    });

    this.apiService.getBookingById(bookingId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.apiService.updateBooking(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.code === 0) {
            alert('Booking updated successfully.');
            this.router.navigate(['list-bookings']);
          }else {
            alert(data.description);
          }
        },
        error => {
          alert(error);
        });
  }

}
