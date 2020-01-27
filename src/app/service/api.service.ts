import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IBooking} from "../model/booking.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:7011/api/bookings/';

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:7011/generate-token', loginPayload);
  }

  getBookings() : Observable<IBooking[]> {
    return this.http.get<IBooking[]>(this.baseUrl);
  }

  getBookingById(bookingId: string): Observable<IBooking> {
    return this.http.get<IBooking>(this.baseUrl + bookingId);
  }

  addBooking(booking: IBooking): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl+'0', booking);
  }

  updateBooking(booking: IBooking): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + booking.bookingId+'/0', booking);
  }

  deleteBooking(bookingId: string): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + bookingId+'/0');
  }
}