import { Component } from '@angular/core';
import { MenuHamburgerComponent } from '../menu-hamburger/menu-hamburger.component';


@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MenuHamburgerComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

}
// add commonmodule for ngif? in imports...