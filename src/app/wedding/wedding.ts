import { Component } from '@angular/core';

@Component({
  selector: 'app-wedding',
  imports: [],
  templateUrl: './wedding.html',
  styleUrl: './wedding.css',
})
export class Wedding {
  openDirections(url: string): void {
    // opens Google Maps link in a new tab
    window.open(url, '_blank');
}
}
