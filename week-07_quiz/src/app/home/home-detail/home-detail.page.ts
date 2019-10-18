import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UKM } from '../home.model';
import { UkmService } from '../ukm.service';
import { NavController, AlertController } from '@ionic/angular';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
  ukm: UKM;
  constructor(private alertController: AlertController,
    private navCtrl: NavController, 
    private route: ActivatedRoute, 
    private router: Router,
    private ukmService: UkmService,
    private profileService: ProfileService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        this.navCtrl.navigateBack('/home');
        return;
      }
      this.ukm = this.ukmService.getPlace(paramMap.get('id'));
    });
  }

  async presentAlertMultipleButtons(p:UKM) {
    const alert = await this.alertController.create({
      message: 'Beneran mau join ?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Serius',
          handler: () => {
            this.profileService.addJoin(p);
            console.log('Comfirm!');
            this.router.navigate(['../home']);
          }
        }
      ]
    });

    await alert.present();
  }

}
