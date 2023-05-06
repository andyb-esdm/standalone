import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from '../clock/clock.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ClockComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

}
