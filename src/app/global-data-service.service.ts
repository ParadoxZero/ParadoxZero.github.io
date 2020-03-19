import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from 'src/models/MenuItems';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataServiceService {

  public menuList: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([]);
  constructor() { }
}
