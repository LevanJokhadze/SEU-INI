import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HorizontalNavComponent } from './Components/navbars/horizontal-nav/horizontal-nav.component';
import { VerticalNavComponent } from './Components/navbars/vertical-nav/vertical-nav.component';
import { ContentComponent } from './Components/content/content.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HorizontalNavComponent, VerticalNavComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ini-app';
}
