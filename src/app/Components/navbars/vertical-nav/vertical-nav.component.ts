import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vertical-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './vertical-nav.component.html',
  styleUrl: './vertical-nav.component.scss'
})
export class VerticalNavComponent {
  name = "რატი რატიანი";
  navHeader = "ადამიანური რესურსების მართვა";
}
