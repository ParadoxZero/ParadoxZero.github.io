import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from 'src/models/MenuItems';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataServiceService {

  public menuList: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([]);
  constructor() {

    this.menuList.next([
      {Name:"Item 1", Action:"#"},
      {Name:"Item 2", Action:"#"},
      {Name:"Item 3", Action:"#"},
      {Name:"Item 4", Action:"#"},
    ]);

  }
}
