import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.model';
import { BookingsService } from './bookings.service';
import { IonItemSliding } from '@ionic/angular';
import { Place } from '../places/places.model';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];
  myBookings: Place[];

  constructor(private bookingService: BookingsService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.bookings;
    this.myBookings = this.bookingService.getMyBookings();
    console.log(this.myBookings);
  }

  ionViewWillEnter(){
    this.myBookings = this.bookingService.getMyBookings();
    console.log(this.myBookings);
  }

  onCancelMyBooking(id: string){
    this.bookingService.removeFromMyBookings(id);
    this.myBookings = this.bookingService.getMyBookings();
  }

  onCancel(offerId: string, slidingEl: IonItemSliding){
    slidingEl.close();
  }

}
