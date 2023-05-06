import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
  readonly currentTime$ = interval(1000).pipe(
    map(() => {
      const date = new Date();
      return date.toLocaleTimeString();
    })
  );
}
