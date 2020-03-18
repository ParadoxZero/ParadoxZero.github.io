import { Component, OnInit } from '@angular/core';
import { IconDefinition, faThLarge, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isNavBarOpen: BehaviorSubject<boolean>;
  public currentIcon: IconDefinition = faThLarge;
  constructor(
  ) {}

  ngOnInit() {
    this.isNavBarOpen.subscribe((value) => {
      this.updateIcon(value);
    })
  }

  public openNavbar(): void {

  }

  private updateIcon(isOpen: boolean): void {
    if(isOpen)
      this.currentIcon = faTimesCircle;
    else
      this.currentIcon = faThLarge;
  }

}
