import { Injectable } from '@angular/core';
import { UKM } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class UkmService {

  public _ukm: UKM[] = [
    new UKM(
      'UKM1',
      'Basket',
      'Basket adalah UKM lalala',
      'https://www.spalding.com/dw/image/v2/ABAH_PRD/on/demandware.static/-/Sites-masterCatalog_SPALDING/default/dw8639db4a/images/hi-res/74876E_BACK.jpg?sw=555&sh=689&sm=cut'
    ),
    new UKM(
      'UKM2',
      'Volley',
      'Volley adalah UKM lalala',
      'https://4.imimg.com/data4/EI/YG/MY-20347603/volleyball-500x500.jpg'
    ),
    new UKM(
      'UKM3',
      'Soccer',
      'Soccer adalah UKM lalala',
      'https://5.imimg.com/data5/TL/QS/MY-5458350/soccer-balls-500x500.jpg'
    ),
    new UKM(
      'UKM4',
      'Badminton',
      'Badminton adalah UKM lalala',
      'https://images-na.ssl-images-amazon.com/images/I/41N8uOhcaBL._SX466_.jpg'
    ),
    new UKM(
      'UKM5',
      'Band',
      'Band adalah UKM lalala',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpT7UeGxVLMdTcmfdGJYbvdPkte84po6Zt3SVE90XQ5W2_XT8'
    ),
  ];

  get ukm() {
    return [...this._ukm];
  }

  public myUKM: UKM[]=[];

  getPlace(id: string){
    return {...this._ukm.find(p => p.id === id)};
  }

  constructor() { }
}
