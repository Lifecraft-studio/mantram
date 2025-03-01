import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { isPlatformBrowser } from '@angular/common';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mantram';
  constructor(private router: Router, @Inject(PLATFORM_ID) private _platformId: Object) { }
  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      if (isPlatformBrowser(this._platformId)) {
        window.scrollTo(0, 0);
      }
    });
  }
}
