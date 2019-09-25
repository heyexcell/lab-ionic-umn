import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Gading Apartment',
      '2BR, Luas dan Cozy',
      'http://www.desertsun.co.uk/blog/images/Apartment%201.jpg',
      100000000
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartment Romantis',
      'https://static3.businessinsider.com/image/5681799ce6183e55008b526d',
      125000000
    ),
    new Place(
      'p3',
      'BSD Apartment',
      'Apartment Murah',
      'http://serponggreenview.com/app/images/about/img_about.jpg',
      50000000
    ),
  ];

  get places(){
    return[...this._places];
  }
  getPlace(id: string){
    return {...this._places.find(p => p.id === id)};
  }

  constructor() { }
}
