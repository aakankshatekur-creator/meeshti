import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  constructor(private router: Router) { }
 directions(url: string){

  window.open(url, '_blank');
 }
  wed(){
    this.router.navigateByUrl('/wedding');
}
}