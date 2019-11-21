import { Component, LOCALE_ID, Inject } from '@angular/core';
import { TranslateService } from './images/services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'test-ultra';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'es', label: 'Espanol' },
  ];

  constructor(public translate: TranslateService, @Inject(LOCALE_ID) protected localeId: string) {}

  public setLang(lang: string) {
    this.translate.use(lang);
  }
}
