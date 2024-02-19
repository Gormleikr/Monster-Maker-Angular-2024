import { Component } from '@angular/core';
import {LeftViewerComponent} from '../left-viewer/left-viewer.component'
import { CenterViewerComponent } from '../center-viewer/center-viewer.component';
import { MenuHamburgerComponent } from '../menu-hamburger/menu-hamburger.component';
import { MidToolbarComponent } from '../mid-toolbar/mid-toolbar.component';
import { RightViewerComponent } from '../right-viewer/right-viewer.component';


@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [LeftViewerComponent, CenterViewerComponent, MenuHamburgerComponent, MidToolbarComponent, RightViewerComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {

}
