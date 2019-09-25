import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController, ActionSheetController, LoadingController } from '@ionic/angular';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placeService: PlacesService,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placeService.getPlace(paramMap.get('placeId'));
    });
  }
  
  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.navCtrl.navigateBack('/places/tabs/discover');
    // this.navCtrl.pop();
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace : this.place }
      })
      .then(modaLEL =>{
        modaLEL.present();
        return modaLEL.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('BOOKED');
        }
      });
  }

  async bookPlace() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Book Place',
      buttons: [{
        text: 'Book w/ Random Date',
        role: 'confirm',
        handler: () => {
          this.onBookPlace();
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
