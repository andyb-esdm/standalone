import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from '../clock/clock.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ClockComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
