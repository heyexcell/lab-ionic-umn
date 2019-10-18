import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import { UKM } from '../home/home.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _profile: Profile[] = [];

  addJoin(p: UKM){
    this._profile.push(p);
  }

  removeJoin(id: string){
    this._profile = this._profile.filter(profile=>{
      return profile.id !== id;
    });
  }

  constructor( ) { }

  getProfile() {
    return [...this._profile];
  }
}
