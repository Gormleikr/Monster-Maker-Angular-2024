import { Component } from '@angular/core';
import { MidToolbarComponent } from '../mid-toolbar/mid-toolbar.component';

@Component({
  selector: 'app-left-viewer',
  standalone: true,
  imports: [MidToolbarComponent],
  templateUrl: './left-viewer.component.html',
  styleUrl: './left-viewer.component.css'
})
export class LeftViewerComponent {

}
