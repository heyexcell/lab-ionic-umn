import { Injectable } from '@angular/core';
import { Place } from './places.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1',
      'Gading Apartment',
      '2BR, Luas dan Cozy',
      'http://www.desertsun.co.uk/blog/images/Apartment%201.jpg',
      100000000,
      new Date('2019-01-01'),
      new Date('2020-12-31'),
      'abc'
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartment Romantis',
      'https://static3.businessinsider.com/image/5681799ce6183e55008b526d',
      125000000,
      new Date('2019-01-01'),
      new Date('2020-12-31'),
      'abc'
    ),
    new Place(
      'p3',
      'BSD Apartment',
      'Apartment Murah',
      'http://serponggreenview.com/app/images/about/img_about.jpg',
      50000000,
      new Date('2019-01-01'),
      new Date('2020-12-31'),
      'abc'
    ),
  ]);

  get places(){
    return this._places.asObservable();
  }
  
  getPlace(id: string){
    return this.places.pipe(
      take(1),
      map(places => {
        return {...places.find(p => p.id === id)};
      })
    );
  }

  constructor(private authService: AuthService) { }

  addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://static3.businessinsider.com/image/5681799ce6183e55008b526d-480/carmel-place-nyc-micro-apartment.jpg',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );

    this.places.pipe(take(1)).subscribe(places => {
      setTimeout(() =>{
        this._places.next(places.concat(newPlace));
      }, 1000);
    })
  }

}
