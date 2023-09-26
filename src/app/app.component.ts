import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'frontend';

  currentRoute!: string;

  constructor(
    //private themeService: ThemeService,
    private router: Router
    ) {}

    ngOnInit() {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentRoute = event.url;
        }
      });
    }
/*
  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }*/
}
