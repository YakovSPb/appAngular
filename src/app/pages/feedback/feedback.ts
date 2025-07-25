import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Telegram } from '../../services/telegram';

@Component({
  selector: 'app-feedback',
  standalone: true,
  styles: `
    .form {
      height: 70vh;
      justify-content: center;
    }
  `,
  template: `
    <form class="centered form">
      <h2 class="mb">Обратная связь</h2>
      <textarea
        [value]="feedback()"
        (input)="handleChange($event)"
        class="form-control"
      ></textarea>
    </form>
  `,
})
export class Feedback implements OnInit, OnDestroy {
  feedback = signal('');

  constructor(private telegram: Telegram) {
    this.sendData = this.sendData.bind(this)
  }

  ngOnInit(): void {
    this.telegram.MainButton.setText('Оправить сообщение')
    this.telegram.MainButton.show()
    this.telegram.MainButton.onClick(this.sendData)
  }

  sendData() {
    this.telegram.sendData({ feedback: this.feedback() })
  }

  handleChange(event) {
    this.feedback.set(event.target.value);
    if (this.feedback().trim()) {
      this.telegram.MainButton.enable()
    } else {
      this.telegram.MainButton.disable()
    }
  }

  ngOnDestroy(): void {
        this.telegram.MainButton.offClick(this.sendData);
  }
}
