import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Telegram } from './services/telegram';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<router-outlet/>`,
})
export class App {
  telegram = inject(Telegram)
  constructor() {
    this.telegram.ready()
  }
}
