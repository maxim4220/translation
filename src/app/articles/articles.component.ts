import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass'],
})
export class ArticlesComponent {
  constructor(@Inject(LOCALE_ID) protected localeId: string) {}

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'es', label: 'Espanol' },
  ];
}
