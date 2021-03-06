import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/places.model';
import { ModalController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;

  constructor(private modalCtrl: ModalController, private loadingCtrl: LoadingController) { }

  ngOnInit() {}
  
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  bookThisPlace() {
    // this.isLoading = true;
    this.loadingCtrl.create({
      keyboardClose: true,
      message: 'Booking the place ...'
    })
    .then(loadingEL => {
      loadingEL.present();
      setTimeout(() => {
        loadingEL.dismiss();
        this.modalCtrl.dismiss({ message: 'booked!' }, 
        'confirm');
      }, 2000);
    });
  }

}
