import { Component } from '@angular/core';
import { TranslateService } from './images/services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'test-ultra';

  constructor(public translate: TranslateService) {}

  public setLang(lang: string) {
    this.translate.use(lang);
  }
}
