import { Component } from '@angular/core';
import { UkmService } from './ukm.service';
import { AlertController } from '@ionic/angular';
import { ProfileService } from '../profile/profile.service';
import { UKM } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loadedUKM: UKM[];

  constructor(
    private ukmService: UkmService,
    private alertController: AlertController,
    public profileService: ProfileService
    ) { }

  ngOnInit() {
    this.loadedUKM = this.ukmService.ukm;
  }

}
