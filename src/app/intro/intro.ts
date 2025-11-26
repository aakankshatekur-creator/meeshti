import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro implements OnInit, OnDestroy {
  constructor(private router :Router) { }
  private targetDate = new Date('2026-01-20T18:00:00'); 

  days = '00';
  hours = '00';
  minutes = '00';
  seconds = '00';

  private timerId: any;

  ngOnInit(): void {
    this.updateCountdown();
    this.timerId = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  private updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance <= 0) {
      this.days = this.hours = this.minutes = this.seconds = '00';
      return;
    }

    const totalSeconds = Math.floor(distance / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    this.days    = this.pad(days);
    this.hours   = this.pad(hours);
    this.minutes = this.pad(minutes);
    this.seconds = this.pad(seconds);
  }

  private pad(num: number): string {
    return num < 10 ? '0' + num : '' + num;
  }
  events(){
    this.router.navigateByUrl('/events');
  }

}
