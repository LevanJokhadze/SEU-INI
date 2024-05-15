import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-horizontal-nav',
  templateUrl: './horizontal-nav.component.html',
  styleUrls: ['./horizontal-nav.component.scss'],
  standalone: true
})
export class HorizontalNavComponent implements OnInit {
  title = "Main";

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const routeData = this.route.snapshot.firstChild?.data as { title: string } | null;
        if (routeData && routeData.title) {
          this.title = routeData.title;
        } else {
          this.title = "Main";
        }
      }
    });
  }
}
