import { DOCUMENT, Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Telegram {
  private window;
  tg;
  constructor(@Inject(DOCUMENT) private _document) {
    this.window = this._document.defaultView;
    this.tg = this.window.Telegram.WebApp;
  }
}
