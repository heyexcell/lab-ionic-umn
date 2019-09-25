import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.model';
import { BookingsService } from './bookings.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];

  constructor(private bookingService: BookingsService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.bookings;
  }

  onCancel(offerId: string, slidingEl: IonItemSliding){
    slidingEl.close();
  }

}
