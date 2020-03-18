import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataServiceService } from './global-data-service.service';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SidhinPersonalWebsite';
  constructor(
    private router: Router,
    private dataService: GlobalDataServiceService,
    ){
    this.router.navigate
  }
}
