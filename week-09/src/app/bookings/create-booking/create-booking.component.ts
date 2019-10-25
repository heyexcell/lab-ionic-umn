import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Place } from 'src/app/places/places.model';
import { ModalController, LoadingController } from '@ionic/angular';
import { BookingsService } from '../bookings.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  @Input() selectedMode: 'select' | 'random';
  // @ViewChild('f') form: NgForm;
  form: NgForm;
  startDate: string;
  endDate: string;

  constructor(private modalCtrl: ModalController, 
    private loadingCtrl: LoadingController,
    private bookingSrvc: BookingsService) { }

  ngOnInit() {
    const availableFrom = new Date(this.selectedPlace.availableFrom);
    const availableTo = new Date(this.selectedPlace.availableTo);
    if(this.selectedMode === 'random'){
      this.startDate = new Date(
        availableFrom.getTime() +
        Math.random() * (availableTo.getTime() - 7 * 24 * 60 * 60 * 1000 - availableFrom.getTime())
      ).toISOString();

      this.endDate = new Date(
        new Date(this.startDate).getTime() +
        Math.random() *
          (new Date(this.startDate).getTime() + 6 * 24 * 60 * 60 * 1000 - new Date(this.startDate).getTime())
      ).toISOString();
    }
  }
  
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  bookThisPlace() {
    if(!this.form.valid || !this.datesValid){
      return;
    }
    this.modalCtrl.dismiss({ bookingData: {
      firstName: this.form.value['first-name'],
      lastName: this.form.value['last-name'],
      guestNumber: this.form.value['guest-number'],
      startDate: this.form.value['date-from'],
      endDate: this.form.value['dates-to']
    }}, 'confirm');
  }

  datesValid(){
    const startDate = new Date(this.form.value['date-from']);
    const endDate = new Date(this.form.value['date-to']);
    return endDate > startDate;
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  onBookMyPlace(){
    this.modalCtrl.dismiss({message: 'this is a dummy message!'}, 'comfirm');
    this.bookingSrvc.addToMyBookings(this.selectedPlace);
  }

}
