import { Component, OnInit } from '@angular/core';
import { IconDefinition, faThLarge, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
import { GlobalDataServiceService } from '../global-data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isNavBarOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public currentIcon: IconDefinition = faThLarge;
  constructor(
    public dataService: GlobalDataServiceService
  ) {}

  ngOnInit() {
    this.dataService.menuList.next([
      {Name:"Item 1", Action:"#"},
      {Name:"Item 2", Action:"#"},
      {Name:"Item 3", Action:"#"},
      {Name:"Item 4", Action:"#"},
    ])
    this.isNavBarOpen.subscribe((value) => {
      this.updateIcon(value);
    })
  }

  public toggleNavbar(): void {
    this.isNavBarOpen.next(!this.isNavBarOpen.value);
  }

  private updateIcon(isOpen: boolean): void {
    if(isOpen)
      this.currentIcon = faTimesCircle;
    else
      this.currentIcon = faThLarge;
  }

}
