import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      passengerName: ['', Validators.required],
      passangerContactNumber: ['', Validators.required],
      waitingTime: ['', Validators.required],
      price: ['', Validators.required],
      noOfPassengers: ['',Validators.required],
      asap: [''],
      pickupTime: [new Date()]
    });

  }

  onSubmit() {
    this.apiService.addBooking(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-bookings']);
      });
  }

}
