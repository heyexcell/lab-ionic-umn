import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { IonItemSliding } from '@ionic/angular';
import { Profile } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  loadedProfile: Profile[];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.loadedProfile = this.profileService.getProfile();
  }

  onCancelJoin(id: string, slidingEl: IonItemSliding){
    this.profileService.removeJoin(id);
    slidingEl.close();
    this.loadedProfile = this.profileService.getProfile();
  }
}
